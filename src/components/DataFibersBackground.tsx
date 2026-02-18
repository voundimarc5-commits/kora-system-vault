import { useEffect, useRef } from "react";

const DataFibersBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = 0, h = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Fibers: gentle flowing lines
    interface Fiber {
      points: { x: number; y: number }[];
      speed: number;
      alpha: number;
      width: number;
      offset: number;
    }

    const fibers: Fiber[] = [];
    const fiberCount = 18;
    for (let i = 0; i < fiberCount; i++) {
      const pointCount = 5 + Math.floor(Math.random() * 4);
      const points: { x: number; y: number }[] = [];
      const baseY = Math.random() * h;
      for (let p = 0; p < pointCount; p++) {
        points.push({
          x: (p / (pointCount - 1)) * w,
          y: baseY + (Math.random() - 0.5) * 200,
        });
      }
      fibers.push({
        points,
        speed: 0.2 + Math.random() * 0.4,
        alpha: 0.03 + Math.random() * 0.05,
        width: 0.5 + Math.random() * 1.5,
        offset: Math.random() * Math.PI * 2,
      });
    }

    // Sparse particles
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }

    const particles: Particle[] = [];
    const particleCount = 25;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.15,
        radius: 1 + Math.random() * 1.5,
        alpha: 0.08 + Math.random() * 0.12,
      });
    }

    const draw = (time: number) => {
      const t = time * 0.001;
      ctx.clearRect(0, 0, w, h);

      // Draw fibers
      for (const fiber of fibers) {
        ctx.beginPath();
        const pts = fiber.points;
        const animPts = pts.map((p, i) => ({
          x: p.x,
          y: p.y + Math.sin(t * fiber.speed + fiber.offset + i * 0.8) * 30,
        }));

        ctx.moveTo(animPts[0].x, animPts[0].y);
        for (let i = 1; i < animPts.length - 1; i++) {
          const cpx = (animPts[i].x + animPts[i + 1].x) / 2;
          const cpy = (animPts[i].y + animPts[i + 1].y) / 2;
          ctx.quadraticCurveTo(animPts[i].x, animPts[i].y, cpx, cpy);
        }
        const last = animPts[animPts.length - 1];
        ctx.lineTo(last.x, last.y);

        ctx.strokeStyle = `hsla(187, 60%, 55%, ${fiber.alpha})`;
        ctx.lineWidth = fiber.width;
        ctx.stroke();
      }

      // Draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(187, 65%, 60%, ${p.alpha})`;
        ctx.fill();
      }

      // Draw faint connection lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(187, 50%, 55%, ${0.04 * (1 - dist / 200)})`;
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
