import { useEffect, useRef } from "react";

const DataFibersBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    interface Fiber {
      points: { x: number; y: number }[];
      speed: number;
      offset: number;
      width: number;
      alpha: number;
    }

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      size: number;
      life: number;
      maxLife: number;
    }

    const fibers: Fiber[] = [];
    const fiberCount = 8;
    for (let i = 0; i < fiberCount; i++) {
      const pointCount = 5 + Math.floor(Math.random() * 4);
      const points: { x: number; y: number }[] = [];
      for (let p = 0; p < pointCount; p++) {
        points.push({
          x: (p / (pointCount - 1)) * canvas.width,
          y: canvas.height * (0.15 + Math.random() * 0.7),
        });
      }
      fibers.push({
        points,
        speed: 0.3 + Math.random() * 0.6,
        offset: Math.random() * Math.PI * 2,
        width: 0.5 + Math.random() * 1,
        alpha: 0.04 + Math.random() * 0.06,
      });
    }

    const particles: Particle[] = [];
    const maxParticles = 20;

    const draw = (time: number) => {
      const t = time * 0.001;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw fibers
      for (const fiber of fibers) {
        ctx.beginPath();
        const pts = fiber.points.map((p, i) => ({
          x: p.x,
          y: p.y + Math.sin(t * fiber.speed + fiber.offset + i * 0.8) * 30,
        }));

        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length - 1; i++) {
          const cx = (pts[i].x + pts[i + 1].x) / 2;
          const cy = (pts[i].y + pts[i + 1].y) / 2;
          ctx.quadraticCurveTo(pts[i].x, pts[i].y, cx, cy);
        }
        const last = pts[pts.length - 1];
        ctx.lineTo(last.x, last.y);

        ctx.strokeStyle = `hsla(187, 70%, 50%, ${fiber.alpha})`;
        ctx.lineWidth = fiber.width;
        ctx.stroke();
      }

      // Spawn particles
      if (particles.length < maxParticles && Math.random() > 0.92) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          alpha: 0,
          size: 1 + Math.random() * 1.5,
          life: 0,
          maxLife: 200 + Math.random() * 300,
        });
      }

      // Draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        const progress = p.life / p.maxLife;
        p.alpha = progress < 0.2 ? progress * 5 * 0.15 : progress > 0.8 ? (1 - progress) * 5 * 0.15 : 0.15;

        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(187, 70%, 55%, ${p.alpha})`;
        ctx.fill();
      }

      // Draw subtle connection lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(187, 70%, 50%, ${0.03 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
};

export default DataFibersBackground;
