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

    interface DataLine {
      y: number;
      speed: number;
      segments: { x: number; width: number; alpha: number; growing: boolean }[];
      label: string;
    }

    const lineLabels = ["AUTH", "DB", "NET", "API", "TLS", "CDN", "FLOW", "PAY", "SEC", "DNS", "SYNC", "LOG"];
    const dataLines: DataLine[] = [];
    const lineCount = 12;
    for (let i = 0; i < lineCount; i++) {
      const segments: DataLine["segments"] = [];
      const segCount = 3 + Math.floor(Math.random() * 5);
      for (let s = 0; s < segCount; s++) {
        segments.push({
          x: Math.random() * canvas.width,
          width: 30 + Math.random() * 120,
          alpha: 0,
          growing: true,
        });
      }
      dataLines.push({
        y: (i + 1) * (canvas.height / (lineCount + 1)),
        speed: 0.15 + Math.random() * 0.5,
        segments,
        label: lineLabels[i],
      });
    }

    const verticalLines: number[] = [];
    const vCount = 16;
    for (let i = 0; i < vCount; i++) {
      verticalLines.push((i + 1) * (canvas.width / (vCount + 1)));
    }

    interface Pulse {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      alpha: number;
    }
    const pulses: Pulse[] = [];

    interface Packet {
      lineIdx: number;
      x: number;
      speed: number;
      size: number;
      trailLen: number;
    }
    const packets: Packet[] = [];

    const throughputBars: number[] = new Array(60).fill(0).map(() => Math.random() * 0.2);

    const logMessages = [
      "TLS handshake verified ✓",
      "Packet routed → gateway",
      "Query executed (1.2ms)",
      "Token refresh ✓",
      "Settlement confirmed",
      "Firewall rule applied",
      "Cache invalidated",
      "Request forwarded",
      "Data replicated ✓",
      "DNS resolved (0.4ms)",
      "Audit trail recorded",
      "Session validated ✓",
    ];
    interface LogEntry {
      text: string;
      alpha: number;
      age: number;
    }
    const logs: LogEntry[] = [];
    let lastLogSpawn = 0;

    // Light theme colors
    const lineColor = "rgba(30, 80, 160, 0.06)";
    const gridColor = "rgba(30, 80, 160, 0.04)";
    const labelColor = (t: number, i: number) => `rgba(30, 90, 160, ${0.12 + 0.04 * Math.sin(t + i)})`;
    const segColor = (alpha: number) => `rgba(30, 90, 160, ${alpha * 0.7})`;
    const packetTrail = "rgba(30, 100, 200, 0)";
    const packetTrailEnd = "rgba(40, 120, 200, 0.35)";
    const packetHead = "rgba(60, 130, 200, 0.6)";
    const packetCore = "rgba(30, 80, 180, 0.7)";
    const pulseColor = (alpha: number) => `rgba(40, 100, 180, ${alpha})`;
    const barColor = (v: number) => `rgba(30, 90, 160, ${0.1 + v * 0.25})`;
    const logColor = (alpha: number) => `rgba(40, 100, 170, ${alpha})`;
    const statusColor = (t: number) => `rgba(30, 140, 90, ${0.2 + 0.1 * Math.sin(t * 2)})`;

    const draw = (time: number) => {
      const t = time * 0.001;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const vx of verticalLines) {
        ctx.beginPath();
        ctx.moveTo(vx, 0);
        ctx.lineTo(vx, canvas.height);
        ctx.strokeStyle = gridColor;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      for (let i = 0; i < dataLines.length; i++) {
        const line = dataLines[i];
        ctx.beginPath();
        ctx.moveTo(0, line.y);
        ctx.lineTo(canvas.width, line.y);
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 0.5;
        ctx.stroke();

        ctx.font = "9px monospace";
        ctx.fillStyle = labelColor(t, i);
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillText(line.label, 8, line.y - 8);

        for (const seg of line.segments) {
          seg.x += line.speed;
          if (seg.x > canvas.width + seg.width) {
            seg.x = -seg.width - Math.random() * 200;
          }
          if (seg.growing) {
            seg.alpha = Math.min(seg.alpha + 0.01, 0.25 + Math.random() * 0.1);
            if (seg.alpha >= 0.3) seg.growing = false;
          } else {
            seg.alpha = 0.15 + 0.1 * Math.sin(t * 2 + seg.x * 0.01);
          }

          const grad = ctx.createLinearGradient(seg.x, 0, seg.x + seg.width, 0);
          grad.addColorStop(0, `rgba(30, 90, 160, 0)`);
          grad.addColorStop(0.2, segColor(seg.alpha));
          grad.addColorStop(0.8, segColor(seg.alpha));
          grad.addColorStop(1, `rgba(30, 90, 160, 0)`);
          ctx.fillStyle = grad;
          ctx.fillRect(seg.x, line.y - 1.5, seg.width, 3);
        }
      }

      if (Math.random() > 0.96) {
        const li = Math.floor(Math.random() * dataLines.length);
        packets.push({
          lineIdx: li,
          x: -10,
          speed: 1 + Math.random() * 2,
          size: 3 + Math.random() * 2,
          trailLen: 40 + Math.random() * 80,
        });
      }

      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.x += p.speed;
        if (p.x > canvas.width + 50) {
          packets.splice(i, 1);
          continue;
        }
        const ly = dataLines[p.lineIdx].y;

        for (const vx of verticalLines) {
          if (Math.abs(p.x - vx) < p.speed * 1.5) {
            if (Math.random() > 0.7) {
              pulses.push({ x: vx, y: ly, radius: 0, maxRadius: 15 + Math.random() * 15, alpha: 0.3 });
            }
          }
        }

        const trailGrad = ctx.createLinearGradient(p.x - p.trailLen, 0, p.x, 0);
        trailGrad.addColorStop(0, packetTrail);
        trailGrad.addColorStop(1, packetTrailEnd);
        ctx.fillStyle = trailGrad;
        ctx.fillRect(p.x - p.trailLen, ly - 1, p.trailLen, 2);

        const headGrad = ctx.createRadialGradient(p.x, ly, 0, p.x, ly, p.size * 3);
        headGrad.addColorStop(0, packetHead);
        headGrad.addColorStop(1, "rgba(40, 100, 200, 0)");
        ctx.fillStyle = headGrad;
        ctx.beginPath();
        ctx.arc(p.x, ly, p.size * 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, ly, p.size * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = packetCore;
        ctx.fill();
      }

      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.radius += 0.5;
        p.alpha -= 0.01;
        if (p.alpha <= 0 || p.radius > p.maxRadius) {
          pulses.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.strokeStyle = pulseColor(p.alpha);
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      if (Math.random() > 0.6) {
        throughputBars.shift();
        throughputBars.push(0.05 + Math.random() * 0.5);
      }

      const barArea = { x: canvas.width - 260, y: canvas.height - 60, w: 220, h: 35 };
      ctx.strokeStyle = "rgba(30, 80, 160, 0.08)";
      ctx.lineWidth = 0.5;
      ctx.strokeRect(barArea.x, barArea.y, barArea.w, barArea.h);
      ctx.font = "8px monospace";
      ctx.fillStyle = "rgba(30, 90, 160, 0.2)";
      ctx.textAlign = "left";
      ctx.fillText("THROUGHPUT", barArea.x + 3, barArea.y - 3);

      const barW = barArea.w / throughputBars.length;
      for (let i = 0; i < throughputBars.length; i++) {
        const h = throughputBars[i] * barArea.h;
        ctx.fillStyle = barColor(throughputBars[i]);
        ctx.fillRect(barArea.x + i * barW, barArea.y + barArea.h - h, barW - 1, h);
      }

      if (t - lastLogSpawn > 2 + Math.random() * 1.5) {
        lastLogSpawn = t;
        logs.unshift({
          text: logMessages[Math.floor(Math.random() * logMessages.length)],
          alpha: 0.35,
          age: 0,
        });
        if (logs.length > 6) logs.pop();
      }

      const logX = canvas.width - 250;
      for (let i = 0; i < logs.length; i++) {
        const log = logs[i];
        log.age++;
        log.alpha = Math.max(0, 0.35 - log.age * 0.0005);
        const logY = 50 + i * 18;
        ctx.font = "9px monospace";
        ctx.fillStyle = logColor(log.alpha);
        ctx.textAlign = "left";
        ctx.fillText(`› ${log.text}`, logX, logY);
      }

      ctx.font = "9px monospace";
      ctx.fillStyle = statusColor(t);
      ctx.textAlign = "left";
      ctx.fillText("● SYSTEMS ONLINE", 20, 30);

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
