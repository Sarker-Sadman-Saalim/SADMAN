import React, { useEffect, useRef, useState, useCallback } from 'react';
import { portfolioData } from '../data/portfolioData';

interface CinematicCanvasProps {
  scrollProgress: number;
  onLoadingProgress?: (progress: number) => void;
}

export const CinematicCanvas: React.FC<CinematicCanvasProps> = ({
  scrollProgress,
  onLoadingProgress,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { totalFrames, framePathPrefix, frameExtension, naturalWidth, naturalHeight } = portfolioData.animationConfig;

  // Image cache
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(totalFrames).fill(null));
  const loadedCountRef = useRef<number>(0);
  const [initialFrameReady, setInitialFrameReady] = useState(false);
  const [loadPercentage, setLoadPercentage] = useState(0);

  // Animation lerp state
  const targetFrameRef = useRef<number>(1);
  const currentFrameRef = useRef<number>(1);
  const animFrameIdRef = useRef<number | null>(null);

  // Target frame calculation from scrollProgress
  useEffect(() => {
    const frameIndex = Math.min(
      totalFrames,
      Math.max(1, Math.round(1 + scrollProgress * (totalFrames - 1)))
    );
    targetFrameRef.current = frameIndex;
  }, [scrollProgress, totalFrames]);

  // Helper to format frame URL
  const getFrameUrl = useCallback((index: number) => {
    const padded = String(index).padStart(3, '0');
    return `${framePathPrefix}${padded}${frameExtension}`;
  }, [framePathPrefix, frameExtension]);

  // Drawing function with masterclass responsive scaling — portrait-safe
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Find best available image: exact frame or closest loaded frame
    let img = imagesRef.current[frameIndex - 1];
    if (!img || !img.complete || img.naturalWidth === 0) {
      let closest: HTMLImageElement | null = null;
      let minDiff = Infinity;
      for (let i = 0; i < totalFrames; i++) {
        const candidate = imagesRef.current[i];
        if (candidate && candidate.complete && candidate.naturalWidth > 0) {
          const diff = Math.abs(i + 1 - frameIndex);
          if (diff < minDiff) {
            minDiff = diff;
            closest = candidate;
          }
        }
      }
      img = closest;
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    // Ensure canvas dimensions match screen exactly
    const targetW = Math.round(displayWidth * dpr);
    const targetH = Math.round(displayHeight * dpr);
    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
      canvas.style.width = displayWidth + 'px';
      canvas.style.height = displayHeight + 'px';
    }

    // Reset transform & clear
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.scale(dpr, dpr);

    // Fill background first
    ctx.fillStyle = '#070709';
    ctx.fillRect(0, 0, displayWidth, displayHeight);

    // Image aspect ratio: portrait 720x1280 = 0.5625 wide
    const imageRatio = naturalWidth / naturalHeight; // ~0.5625
    const screenRatio = displayWidth / displayHeight;

    let renderW: number;
    let renderH: number;
    let renderX: number;
    let renderY: number;

    if (displayWidth < 480) {
      // SMALL MOBILE: Fill full width, clip height — face stays centered
      renderW = displayWidth;
      renderH = displayWidth / imageRatio;
      renderX = 0;
      // Position image so Sarker's face (top ~40%) is visible in viewport
      renderY = Math.min(0, (displayHeight - renderH) * 0.22);
    } else if (displayWidth < 768) {
      // MOBILE (portrait & landscape):
      if (screenRatio > imageRatio) {
        // Landscape mobile — fit height, center horizontally
        renderH = displayHeight;
        renderW = renderH * imageRatio;
        renderX = (displayWidth - renderW) * 0.5;
        renderY = 0;
      } else {
        // Portrait mobile — fill width, anchor top-center
        renderW = displayWidth;
        renderH = displayWidth / imageRatio;
        renderX = 0;
        renderY = Math.min(0, (displayHeight - renderH) * 0.25);
      }
    } else if (displayWidth < 1024) {
      // TABLET: Fit height, centered
      renderH = displayHeight * 1.0;
      renderW = renderH * imageRatio;
      renderX = (displayWidth - renderW) * 0.5;
      renderY = (displayHeight - renderH) * 0.5;
    } else if (displayWidth < 1440) {
      // LAPTOP/DESKTOP: Fill height gracefully, perfectly centered
      renderH = displayHeight * 1.02;
      renderW = renderH * imageRatio;
      renderX = (displayWidth - renderW) * 0.5;
      renderY = (displayHeight - renderH) * 0.35;
    } else {
      // ULTRAWIDE (≥1440px): Scale up more to fill the wide viewport better
      // Try fitting to viewport height first
      renderH = displayHeight * 1.05;
      renderW = renderH * imageRatio;

      // If still too narrow for ultrawide, use a minimum width
      const minWidthFraction = 0.35;
      if (renderW < displayWidth * minWidthFraction) {
        renderW = displayWidth * minWidthFraction;
        renderH = renderW / imageRatio;
      }

      renderX = (displayWidth - renderW) * 0.5;
      renderY = (displayHeight - renderH) * 0.35;
    }

    // High quality rendering
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Draw frame image
    ctx.drawImage(img, renderX, renderY, renderW, renderH);

    // Fade out edges on wider screens where portrait doesn't fill full width
    if (displayWidth >= 768 && renderX > 2) {
      const fadeW = Math.min(100, renderW * 0.18);

      // Left edge fade into background
      const leftGrad = ctx.createLinearGradient(renderX, 0, renderX + fadeW, 0);
      leftGrad.addColorStop(0, '#070709');
      leftGrad.addColorStop(1, 'rgba(7, 7, 9, 0)');
      ctx.fillStyle = leftGrad;
      ctx.fillRect(renderX - 2, renderY, fadeW + 4, renderH);

      // Right edge fade
      const rightGrad = ctx.createLinearGradient(renderX + renderW - fadeW, 0, renderX + renderW + 2, 0);
      rightGrad.addColorStop(0, 'rgba(7, 7, 9, 0)');
      rightGrad.addColorStop(1, '#070709');
      ctx.fillStyle = rightGrad;
      ctx.fillRect(renderX + renderW - fadeW - 2, renderY, fadeW + 4, renderH);
    }

    // Fade background area around/beside the portrait on all screens
    // Top subtle fade
    const topGrad = ctx.createLinearGradient(0, 0, 0, 60);
    topGrad.addColorStop(0, 'rgba(7, 7, 9, 0.55)');
    topGrad.addColorStop(1, 'rgba(7, 7, 9, 0)');
    ctx.fillStyle = topGrad;
    ctx.fillRect(0, 0, displayWidth, 60);

    // Bottom fade — seamlessly blend into content sections
    const bottomGrad = ctx.createLinearGradient(0, displayHeight - 100, 0, displayHeight);
    bottomGrad.addColorStop(0, 'rgba(7, 7, 9, 0)');
    bottomGrad.addColorStop(1, '#070709');
    ctx.fillStyle = bottomGrad;
    ctx.fillRect(0, displayHeight - 100, displayWidth, 100);

  }, [naturalWidth, naturalHeight, totalFrames]);

  // Resize handler — re-draw on any size change including orientation
  const handleResize = useCallback(() => {
    drawFrame(Math.round(currentFrameRef.current));
  }, [drawFrame]);

  useEffect(() => {
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [handleResize]);

  // Animation Loop with Smooth Lerping
  useEffect(() => {
    let active = true;

    const renderLoop = () => {
      if (!active) return;

      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.04) {
        currentFrameRef.current += diff * 0.20; // Silky responsive scrub
      } else {
        currentFrameRef.current = targetFrameRef.current;
      }

      drawFrame(Math.round(currentFrameRef.current));
      animFrameIdRef.current = requestAnimationFrame(renderLoop);
    };

    animFrameIdRef.current = requestAnimationFrame(renderLoop);

    return () => {
      active = false;
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [drawFrame]);

  // Intelligent Tiered Preloader Engine
  useEffect(() => {
    let isCancelled = false;

    const updateProgress = () => {
      loadedCountRef.current += 1;
      const pct = Math.round((loadedCountRef.current / totalFrames) * 100);
      setLoadPercentage(pct);
      if (onLoadingProgress) {
        onLoadingProgress(pct);
      }
    };

    const loadImage = (index: number): Promise<HTMLImageElement> => {
      return new Promise((resolve) => {
        if (imagesRef.current[index - 1] && imagesRef.current[index - 1]?.complete) {
          resolve(imagesRef.current[index - 1]!);
          return;
        }

        const img = new Image();
        img.src = getFrameUrl(index);
        img.onload = () => {
          if (!isCancelled) {
            imagesRef.current[index - 1] = img;
            updateProgress();
            if (index === 1) {
              setInitialFrameReady(true);
              drawFrame(1);
            }
          }
          resolve(img);
        };
        img.onerror = () => {
          if (!isCancelled) {
            updateProgress();
          }
          resolve(img);
        };
      });
    };

    // Tier 1: Immediate Frame 1
    loadImage(1).then(() => {
      if (isCancelled) return;

      // Tier 2: Priority First 35 Frames for Instant Scrolling
      const priorityBatch = [];
      for (let i = 2; i <= Math.min(35, totalFrames); i++) {
        priorityBatch.push(loadImage(i));
      }

      Promise.all(priorityBatch).then(() => {
        if (isCancelled) return;

        // Tier 3: Concurrency-limited background streaming
        const queue: number[] = [];
        for (let i = 36; i <= totalFrames; i++) {
          queue.push(i);
        }

        const CONCURRENCY = 6;
        let activeWorkers = 0;

        const processQueue = () => {
          if (isCancelled) return;
          while (queue.length > 0 && activeWorkers < CONCURRENCY) {
            const nextIndex = queue.shift()!;
            activeWorkers++;
            loadImage(nextIndex).then(() => {
              activeWorkers--;
              processQueue();
            });
          }
        };

        processQueue();
      });
    });

    return () => {
      isCancelled = true;
    };
  }, [getFrameUrl, totalFrames, drawFrame, onLoadingProgress]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-obsidian"
      style={{ height: '100dvh' }}
    >
      {/* Immediate Fallback: Frame 1 image ensures background is NEVER blank */}
      <img
        src={getFrameUrl(1)}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-700 ${
          initialFrameReady ? 'opacity-0' : 'opacity-90'
        }`}
        style={{
          objectFit: 'contain',
          objectPosition: 'center top',
        }}
      />

      {/* Main High-Performance Canvas — exactly viewport-sized */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block pointer-events-none z-10"
        style={{
          width: '100%',
          height: '100%',
          opacity: initialFrameReady ? 0.96 : 0,
          transition: 'opacity 0.5s ease',
        }}
      />

      {/* Cinematic Ambient Vignette */}
      <div className="absolute inset-0 canvas-vignette pointer-events-none z-20" />

      {/* Crimson laser beam aligned with portrait's eyes */}
      <div
        className="absolute left-0 right-0 pointer-events-none z-20"
        style={{
          top: '41.5%',
          height: '1.5px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,42,75,0.15) 10%, rgba(255,42,75,0.8) 50%, rgba(255,42,75,0.15) 90%, transparent 100%)',
          boxShadow: '0 0 18px 3px rgba(255, 42, 75, 0.5), 0 0 35px 8px rgba(255, 42, 75, 0.2)',
          opacity: 0.75,
        }}
      />

      {/* Frame Sequence Buffer Indicator */}
      {loadPercentage < 100 && (
        <div className="absolute top-4 right-4 z-50 pointer-events-none flex items-center gap-2 bg-obsidian-100/70 border border-surface-border px-2.5 py-1 rounded-full text-[10px] font-mono text-titanium-muted backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
          <span>BUFFERING SEQUENCE: {loadPercentage}%</span>
        </div>
      )}
    </div>
  );
};
