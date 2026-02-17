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

    // Particles flowing like data streams
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
      stream: number; // which data stream it belongs to
    }

    const particles: Particle[] = [];
    const maxParticles = 150;

    // Data stream paths (flowing curves across screen)
    const streams = [
      { startX: 0, startY: 0.3, endX: 1, endY: 0.6, speed: 1.2 },
      { startX: 0.1, startY: 0, endX: 0.8, endY: 1, speed: 0.8 },
      { startX: 1, startY: 0.2, endX: 0, endY: 0.8, speed: 1.0 },
      { startX: 0.5, startY: 0, endX: 0.3, endY: 1, speed: 0.6 },
      { startX: 1, startY: 0.7, endX: 0, endY: 0.4, speed: 0.9 },
    ];

    const spawnParticle = () => {
      if (particles.length >= maxParticles) return;
      const si = Math.floor(Math.random() * streams.length);
      const s = streams[si];
      const life = 200 + Math.random() * 300;
      particles.push({
        x: s.startX * canvas.width + (Math.random() - 0.5) * 60,
        y: s.startY * canvas.height + (Math.random() - 0.5) * 60,
        vx: (s.endX - s.startX) * s.speed * 1.5 + (Math.random() - 0.5) * 0.3,
        vy: (s.endY - s.startY) * s.speed * 1.5 + (Math.random() - 0.5) * 0.3,
        size: 1 + Math.random() * 2.5,
        life,
        maxLife: life,
        stream: si,
      });
    };

    // Floating hexagonal grid nodes
    interface HexNode {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      phase: number;
      pulseSpeed: number;
      size: number;
    }

    const hexNodes: HexNode[] = [];
    const hexSpacing = 120;
    for (let row = 0; row < 12; row++) {
      for (let col = 0; col < 20; col++) {
        const offset = row % 2 === 0 ? 0 : hexSpacing * 0.5;
        hexNodes.push({
          x: col * hexSpacing + offset,
          y: row * hexSpacing * 0.866,
          baseX: col * hexSpacing + offset,
          baseY: row * hexSpacing * 0.866,
          phase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.5 + Math.random() * 1.5,
          size: 1 + Math.random() * 1.5,
        });
      }
    }

    // Circuit-like connection paths
    interface CircuitPath {
      points: { x: number; y: number }[];
      progress: number;
      speed: number;
      color: string;
    }

    const circuitPaths: CircuitPath[] = [];
    const createCircuitPath = () => {
      const points: { x: number; y: number }[] = [];
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      points.push({ x, y });
      const segments = 4 + Math.floor(Math.random() * 4);
      for (let i = 0; i < segments; i++) {
        // Move either horizontally or vertically (circuit board style)
        if (Math.random() > 0.5) {
          x += (Math.random() - 0.5) * 300;
        } else {
          y += (Math.random() - 0.5) * 300;
        }
        points.push({ x: Math.max(0, Math.min(canvas.width, x)), y: Math.max(0, Math.min(canvas.height, y)) });
      }
      return {
        points,
        progress: 0,
        speed: 0.002 + Math.random() * 0.003,
        color: Math.random() > 0.5 ? "59, 130, 246" : "96, 165, 250",
      };
    };

    for (let i = 0; i < 8; i++) {
      circuitPaths.push(createCircuitPath());
    }

    const draw = (time: number) => {
      const t = time * 0.001;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn particles
      if (Math.random() > 0.4) spawnParticle();

      // Draw hex grid connections
      for (let i = 0; i < hexNodes.length; i++) {
        const node = hexNodes[i];
        node.x = node.baseX + Math.sin(t * 0.3 + node.phase) * 3;
        node.y = node.baseY + Math.cos(t * 0.2 + node.phase) * 3;
        const brightness = 0.03 + 0.08 * (0.5 + 0.5 * Math.sin(t * node.pulseSpeed + node.phase));

        // Connect to nearby nodes
        for (let j = i + 1; j < hexNodes.length; j++) {
          const other = hexNodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < hexSpacing * 1.2) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${brightness * 0.4})`;
            ctx.lineWidth = 0.3;
            ctx.stroke();
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96, 165, 250, ${brightness})`;
        ctx.fill();
      }

      // Draw circuit paths with flowing light
      for (const path of circuitPaths) {
        path.progress += path.speed;
        if (path.progress > 1.3) {
          path.progress = -0.3;
        }

        // Draw the path
        ctx.beginPath();
        ctx.moveTo(path.points[0].x, path.points[0].y);
        for (let i = 1; i < path.points.length; i++) {
          ctx.lineTo(path.points[i].x, path.points[i].y);
        }
        ctx.strokeStyle = `rgba(${path.color}, 0.06)`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Flowing light along path
        const totalLen = path.points.length - 1;
        const pos = path.progress * totalLen;
        const segIdx = Math.floor(pos);
        const segFrac = pos - segIdx;
        if (segIdx >= 0 && segIdx < totalLen) {
          const p1 = path.points[segIdx];
          const p2 = path.points[segIdx + 1];
          const lx = p1.x + (p2.x - p1.x) * segFrac;
          const ly = p1.y + (p2.y - p1.y) * segFrac;

          const grad = ctx.createRadialGradient(lx, ly, 0, lx, ly, 20);
          grad.addColorStop(0, `rgba(${path.color}, 0.5)`);
          grad.addColorStop(1, `rgba(${path.color}, 0)`);
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(lx, ly, 20, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw and update particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life--;

        if (p.life <= 0 || p.x < -50 || p.x > canvas.width + 50 || p.y < -50 || p.y > canvas.height + 50) {
          particles.splice(i, 1);
          continue;
        }

        const alpha = Math.min(1, p.life / 50, (p.maxLife - (p.maxLife - p.life)) / 50) * 0.6;

        // Particle glow
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        grad.addColorStop(0, `rgba(96, 165, 250, ${alpha * 0.8})`);
        grad.addColorStop(1, `rgba(59, 130, 246, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Particle core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 220, 255, ${alpha})`;
        ctx.fill();
      }

      // Pulsing dashboard-style HUD elements in corners
      const hudAlpha = 0.04 + 0.03 * Math.sin(t * 0.8);
      
      // Top-left HUD bracket
      ctx.strokeStyle = `rgba(59, 130, 246, ${hudAlpha * 3})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(30, 80);
      ctx.lineTo(30, 40);
      ctx.lineTo(80, 40);
      ctx.stroke();

      // Bottom-right HUD bracket
      ctx.beginPath();
      ctx.moveTo(canvas.width - 30, canvas.height - 80);
      ctx.lineTo(canvas.width - 30, canvas.height - 40);
      ctx.lineTo(canvas.width - 80, canvas.height - 40);
      ctx.stroke();

      // Scanning line effect
      const scanY = ((t * 30) % (canvas.height + 200)) - 100;
      const scanGrad = ctx.createLinearGradient(0, scanY - 50, 0, scanY + 50);
      scanGrad.addColorStop(0, "rgba(59, 130, 246, 0)");
      scanGrad.addColorStop(0.5, "rgba(59, 130, 246, 0.015)");
      scanGrad.addColorStop(1, "rgba(59, 130, 246, 0)");
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanY - 50, canvas.width, 100);

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

export default DashboardBackground;
