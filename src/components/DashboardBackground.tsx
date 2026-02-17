import { useEffect, useRef } from "react";

const DashboardBackground = () => {
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

    // Grid of "dashboard" nodes
    const cols = 20;
    const rows = 12;
    const nodes: { x: number; y: number; phase: number; speed: number; brightness: number }[] = [];

    for (let i = 0; i < cols * rows; i++) {
      nodes.push({
        x: (i % cols) / cols,
        y: Math.floor(i / cols) / rows,
        phase: Math.random() * Math.PI * 2,
        speed: 0.3 + Math.random() * 0.8,
        brightness: 0,
      });
    }

    // Connection lines between nearby nodes
    const connections: [number, number][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 0.12) {
          connections.push([i, j]);
        }
      }
    }

    const draw = (time: number) => {
      const t = time * 0.001;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update brightness
      for (const node of nodes) {
        node.brightness = 0.05 + 0.2 * (0.5 + 0.5 * Math.sin(t * node.speed + node.phase));
      }

      // Draw connections
      for (const [i, j] of connections) {
        const a = nodes[i];
        const b = nodes[j];
        const alpha = Math.min(a.brightness, b.brightness) * 0.6;
        ctx.beginPath();
        ctx.moveTo(a.x * canvas.width, a.y * canvas.height);
        ctx.lineTo(b.x * canvas.width, b.y * canvas.height);
        ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Draw nodes
      for (const node of nodes) {
        const x = node.x * canvas.width;
        const y = node.y * canvas.height;

        // Glow
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${node.brightness * 0.3})`;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96, 165, 250, ${node.brightness * 1.5})`;
        ctx.fill();
      }

      // Draw a few "dashboard panels" as faint rectangles
      const panels = [
        { x: 0.05, y: 0.1, w: 0.18, h: 0.12 },
        { x: 0.77, y: 0.15, w: 0.18, h: 0.1 },
        { x: 0.1, y: 0.7, w: 0.15, h: 0.15 },
        { x: 0.7, y: 0.72, w: 0.2, h: 0.12 },
        { x: 0.4, y: 0.82, w: 0.2, h: 0.08 },
      ];

      for (let pi = 0; pi < panels.length; pi++) {
        const p = panels[pi];
        const panelAlpha = 0.02 + 0.04 * (0.5 + 0.5 * Math.sin(t * 0.5 + pi * 1.3));
        ctx.strokeStyle = `rgba(59, 130, 246, ${panelAlpha * 3})`;
        ctx.lineWidth = 0.5;
        ctx.strokeRect(
          p.x * canvas.width,
          p.y * canvas.height,
          p.w * canvas.width,
          p.h * canvas.height
        );
        ctx.fillStyle = `rgba(59, 130, 246, ${panelAlpha})`;
        ctx.fillRect(
          p.x * canvas.width,
          p.y * canvas.height,
          p.w * canvas.width,
          p.h * canvas.height
        );

        // Fake bar chart lines inside panels
        const bars = 5;
        for (let b = 0; b < bars; b++) {
          const bx = p.x + (b / bars) * p.w + p.w * 0.05;
          const bh = p.h * (0.2 + 0.6 * (0.5 + 0.5 * Math.sin(t * 0.8 + b + pi)));
          const by = p.y + p.h - bh;
          ctx.fillStyle = `rgba(96, 165, 250, ${panelAlpha * 4})`;
          ctx.fillRect(
            bx * canvas.width,
            by * canvas.height,
            (p.w / bars) * 0.6 * canvas.width,
            bh * canvas.height
          );
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
      style={{ opacity: 0.6 }}
    />
  );
};

export default DashboardBackground;
