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

    // Horizontal data flow lines
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
        speed: 0.3 + Math.random() * 1.2,
        segments,
        label: lineLabels[i],
      });
    }

    // Vertical grid lines (faint)
    const verticalLines: number[] = [];
    const vCount = 16;
    for (let i = 0; i < vCount; i++) {
      verticalLines.push((i + 1) * (canvas.width / (vCount + 1)));
    }

    // Intersection pulses — where horizontal meets vertical
    interface Pulse {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      alpha: number;
    }
    const pulses: Pulse[] = [];

    // Data packets moving along horizontal lines
    interface Packet {
      lineIdx: number;
      x: number;
      speed: number;
      size: number;
      trailLen: number;
    }
    const packets: Packet[] = [];

    // Throughput bars along the bottom
    const throughputBars: number[] = new Array(60).fill(0).map(() => Math.random() * 0.2);

    // Log readouts (right side, vertically stacked)
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

    const draw = (time: number) => {
      const t = time * 0.001;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw vertical grid lines
      for (const vx of verticalLines) {
        ctx.beginPath();
        ctx.moveTo(vx, 0);
        ctx.lineTo(vx, canvas.height);
        ctx.strokeStyle = "rgba(30, 60, 120, 0.06)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Draw horizontal base lines and labels
      for (let i = 0; i < dataLines.length; i++) {
        const line = dataLines[i];

        // Base line
        ctx.beginPath();
        ctx.moveTo(0, line.y);
        ctx.lineTo(canvas.width, line.y);
        ctx.strokeStyle = "rgba(30, 60, 120, 0.08)";
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // Label on the left
        ctx.font = "9px monospace";
        ctx.fillStyle = `rgba(50, 120, 180, ${0.15 + 0.05 * Math.sin(t + i)})`;
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillText(line.label, 8, line.y - 8);

        // Animated data segments flowing along this line
        for (const seg of line.segments) {
          seg.x += line.speed;
          if (seg.x > canvas.width + seg.width) {
            seg.x = -seg.width - Math.random() * 200;
          }

          // Fade in/out
          if (seg.growing) {
            seg.alpha = Math.min(seg.alpha + 0.01, 0.25 + Math.random() * 0.1);
            if (seg.alpha >= 0.3) seg.growing = false;
          } else {
            seg.alpha = 0.15 + 0.1 * Math.sin(t * 2 + seg.x * 0.01);
          }

          // Draw the data segment as a glowing bar
          const grad = ctx.createLinearGradient(seg.x, 0, seg.x + seg.width, 0);
          grad.addColorStop(0, `rgba(30, 70, 150, 0)`);
          grad.addColorStop(0.2, `rgba(40, 100, 180, ${seg.alpha})`);
          grad.addColorStop(0.8, `rgba(40, 100, 180, ${seg.alpha})`);
          grad.addColorStop(1, `rgba(30, 70, 150, 0)`);

          ctx.fillStyle = grad;
          ctx.fillRect(seg.x, line.y - 1.5, seg.width, 3);
        }
      }

      // Spawn packets
      if (Math.random() > 0.92) {
        const li = Math.floor(Math.random() * dataLines.length);
        packets.push({
          lineIdx: li,
          x: -10,
          speed: 2 + Math.random() * 4,
          size: 3 + Math.random() * 2,
          trailLen: 40 + Math.random() * 80,
        });
      }

      // Update & draw packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.x += p.speed;

        if (p.x > canvas.width + 50) {
          packets.splice(i, 1);
          continue;
        }

        const ly = dataLines[p.lineIdx].y;

        // Check intersection with vertical lines → pulse
        for (const vx of verticalLines) {
          if (Math.abs(p.x - vx) < p.speed * 1.5) {
            if (Math.random() > 0.7) {
              pulses.push({ x: vx, y: ly, radius: 0, maxRadius: 15 + Math.random() * 15, alpha: 0.4 });
            }
          }
        }

        // Packet trail
        const trailGrad = ctx.createLinearGradient(p.x - p.trailLen, 0, p.x, 0);
        trailGrad.addColorStop(0, "rgba(40, 100, 200, 0)");
        trailGrad.addColorStop(1, "rgba(60, 150, 220, 0.5)");
        ctx.fillStyle = trailGrad;
        ctx.fillRect(p.x - p.trailLen, ly - 1, p.trailLen, 2);

        // Packet head
        const headGrad = ctx.createRadialGradient(p.x, ly, 0, p.x, ly, p.size * 3);
        headGrad.addColorStop(0, "rgba(100, 180, 240, 0.8)");
        headGrad.addColorStop(1, "rgba(40, 100, 200, 0)");
        ctx.fillStyle = headGrad;
        ctx.beginPath();
        ctx.arc(p.x, ly, p.size * 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, ly, p.size * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(180, 220, 255, 0.9)";
        ctx.fill();
      }

      // Draw & update pulses
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
        ctx.strokeStyle = `rgba(60, 140, 200, ${p.alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Throughput mini-bars (bottom)
      if (Math.random() > 0.6) {
        throughputBars.shift();
        throughputBars.push(0.05 + Math.random() * 0.5);
      }

      const barArea = { x: canvas.width - 260, y: canvas.height - 60, w: 220, h: 35 };
      ctx.strokeStyle = "rgba(30, 70, 140, 0.12)";
      ctx.lineWidth = 0.5;
      ctx.strokeRect(barArea.x, barArea.y, barArea.w, barArea.h);
      ctx.font = "8px monospace";
      ctx.fillStyle = "rgba(50, 120, 180, 0.25)";
      ctx.textAlign = "left";
      ctx.fillText("THROUGHPUT", barArea.x + 3, barArea.y - 3);

      const barW = barArea.w / throughputBars.length;
      for (let i = 0; i < throughputBars.length; i++) {
        const h = throughputBars[i] * barArea.h;
        ctx.fillStyle = `rgba(40, 100, 180, ${0.15 + throughputBars[i] * 0.3})`;
        ctx.fillRect(barArea.x + i * barW, barArea.y + barArea.h - h, barW - 1, h);
      }

      // Log readouts (right side)
      if (t - lastLogSpawn > 2 + Math.random() * 1.5) {
        lastLogSpawn = t;
        logs.unshift({
          text: logMessages[Math.floor(Math.random() * logMessages.length)],
          alpha: 0.45,
          age: 0,
        });
        if (logs.length > 6) logs.pop();
      }

      const logX = canvas.width - 250;
      for (let i = 0; i < logs.length; i++) {
        const log = logs[i];
        log.age++;
        log.alpha = Math.max(0, 0.45 - log.age * 0.0005);
        const logY = 50 + i * 18;
        ctx.font = "9px monospace";
        ctx.fillStyle = `rgba(60, 140, 200, ${log.alpha})`;
        ctx.textAlign = "left";
        ctx.fillText(`› ${log.text}`, logX, logY);
      }

      // Status indicator
      ctx.font = "9px monospace";
      ctx.fillStyle = `rgba(40, 160, 110, ${0.25 + 0.12 * Math.sin(t * 2)})`;
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
      style={{ opacity: 0.8 }}
    />
  );
};

export default DashboardBackground;
