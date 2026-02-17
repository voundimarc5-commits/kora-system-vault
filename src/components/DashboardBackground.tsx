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

    // System nodes — represent processing units
    interface SystemNode {
      x: number;
      y: number;
      label: string;
      size: number;
      pulse: number;
      active: boolean;
      activeCooldown: number;
    }

    const nodeLabels = ["AUTH", "DB", "API", "CDN", "DNS", "TLS", "FLOW", "SYNC", "LOG", "NET", "PAY", "SEC"];
    const systemNodes: SystemNode[] = [];
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.3;
      systemNodes.push({
        x: canvas.width * 0.5 + Math.cos(angle) * radius * (0.6 + Math.random() * 0.8),
        y: canvas.height * 0.5 + Math.sin(angle) * radius * (0.5 + Math.random() * 0.7),
        label: nodeLabels[i],
        size: 18 + Math.random() * 12,
        pulse: Math.random() * Math.PI * 2,
        active: false,
        activeCooldown: 0,
      });
    }

    // Data packets traveling between nodes
    interface DataPacket {
      fromNode: number;
      toNode: number;
      progress: number;
      speed: number;
      size: number;
      type: "data" | "auth" | "payment";
    }

    const packets: DataPacket[] = [];
    const packetColors = {
      data: { r: 40, g: 100, b: 180 },
      auth: { r: 50, g: 140, b: 200 },
      payment: { r: 30, g: 80, b: 160 },
    };

    const spawnPacket = () => {
      if (packets.length > 30) return;
      const from = Math.floor(Math.random() * systemNodes.length);
      let to = Math.floor(Math.random() * systemNodes.length);
      while (to === from) to = Math.floor(Math.random() * systemNodes.length);
      const types: DataPacket["type"][] = ["data", "data", "data", "auth", "payment"];
      packets.push({
        fromNode: from,
        toNode: to,
        progress: 0,
        speed: 0.005 + Math.random() * 0.012,
        size: 2 + Math.random() * 3,
        type: types[Math.floor(Math.random() * types.length)],
      });
    };

    // Throughput graph data (bottom bar)
    const throughputData: number[] = new Array(80).fill(0).map(() => Math.random() * 0.3);

    // Log lines scrolling
    const logLines: { text: string; alpha: number; y: number }[] = [];
    const logMessages = [
      "SYS → Packet routed via TLS gateway",
      "NET → Connection established [200 OK]",
      "AUTH → Token verified ✓",
      "FLOW → Transaction processed $12,450",
      "DB → Query executed (2.1ms)",
      "SEC → Firewall rule applied",
      "CDN → Cache invalidated",
      "API → Request forwarded to cluster",
      "SYNC → Data replicated across nodes",
      "PAY → Settlement batch confirmed",
      "DNS → Resolution: 0.8ms",
      "LOG → Audit trail recorded",
    ];
    let lastLogTime = 0;

    const draw = (time: number) => {
      const t = time * 0.001;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update throughput
      if (Math.random() > 0.7) {
        throughputData.shift();
        throughputData.push(0.1 + Math.random() * 0.6);
      }

      // Spawn packets
      if (Math.random() > 0.85) spawnPacket();

      // Activate random nodes
      for (const node of systemNodes) {
        if (node.activeCooldown > 0) {
          node.activeCooldown--;
          node.active = true;
        } else {
          node.active = false;
          if (Math.random() > 0.995) node.activeCooldown = 60 + Math.floor(Math.random() * 120);
        }
      }

      // Draw connection lines between all nodes (faint network topology)
      for (let i = 0; i < systemNodes.length; i++) {
        for (let j = i + 1; j < systemNodes.length; j++) {
          const a = systemNodes[i];
          const b = systemNodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < canvas.width * 0.35) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(30, 70, 140, ${0.06 - dist / (canvas.width * 8)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw and update packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.progress += p.speed;

        if (p.progress >= 1) {
          systemNodes[p.toNode].activeCooldown = 30;
          packets.splice(i, 1);
          continue;
        }

        const from = systemNodes[p.fromNode];
        const to = systemNodes[p.toNode];

        // Curved path via control point
        const mx = (from.x + to.x) / 2 + (from.y - to.y) * 0.15;
        const my = (from.y + to.y) / 2 + (to.x - from.x) * 0.15;

        const t1 = p.progress;
        const t2 = 1 - t1;
        const px = t2 * t2 * from.x + 2 * t2 * t1 * mx + t1 * t1 * to.x;
        const py = t2 * t2 * from.y + 2 * t2 * t1 * my + t1 * t1 * to.y;

        const c = packetColors[p.type];

        // Packet trail
        for (let trail = 0; trail < 5; trail++) {
          const tt = Math.max(0, p.progress - trail * 0.015);
          const tt2 = 1 - tt;
          const trailX = tt2 * tt2 * from.x + 2 * tt2 * tt * mx + tt * tt * to.x;
          const trailY = tt2 * tt2 * from.y + 2 * tt2 * tt * my + tt * tt * to.y;
          ctx.beginPath();
          ctx.arc(trailX, trailY, p.size * (1 - trail * 0.15), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${0.4 - trail * 0.07})`;
          ctx.fill();
        }

        // Packet glow
        const grad = ctx.createRadialGradient(px, py, 0, px, py, p.size * 5);
        grad.addColorStop(0, `rgba(${c.r + 40}, ${c.g + 50}, ${c.b + 60}, 0.3)`);
        grad.addColorStop(1, `rgba(${c.r}, ${c.g}, ${c.b}, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(px, py, p.size * 5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw system nodes
      for (const node of systemNodes) {
        const brightness = node.active ? 0.7 : 0.15 + 0.1 * Math.sin(t * 1.5 + node.pulse);

        // Node outer ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(40, 100, 180, ${brightness * 0.6})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Node fill
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size - 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(15, 35, 70, ${brightness * 0.8})`;
        ctx.fill();

        // Node label
        ctx.font = `${node.size * 0.45}px monospace`;
        ctx.fillStyle = `rgba(80, 160, 220, ${brightness * 1.2})`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(node.label, node.x, node.y);

        // Active indicator
        if (node.active) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size + 4, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(60, 150, 220, ${0.3 + 0.2 * Math.sin(t * 6)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Throughput mini-graph (bottom-right area)
      const graphX = canvas.width - 280;
      const graphY = canvas.height - 80;
      const graphW = 240;
      const graphH = 50;

      ctx.strokeStyle = "rgba(40, 100, 180, 0.15)";
      ctx.lineWidth = 0.5;
      ctx.strokeRect(graphX, graphY, graphW, graphH);

      ctx.font = "9px monospace";
      ctx.fillStyle = "rgba(60, 140, 200, 0.3)";
      ctx.textAlign = "left";
      ctx.fillText("THROUGHPUT", graphX + 4, graphY - 4);

      ctx.beginPath();
      for (let i = 0; i < throughputData.length; i++) {
        const x = graphX + (i / throughputData.length) * graphW;
        const y = graphY + graphH - throughputData[i] * graphH;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "rgba(50, 130, 200, 0.4)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Fill under the line
      ctx.lineTo(graphX + graphW, graphY + graphH);
      ctx.lineTo(graphX, graphY + graphH);
      ctx.closePath();
      ctx.fillStyle = "rgba(40, 100, 180, 0.05)";
      ctx.fill();

      // Log lines (left side)
      if (t - lastLogTime > 1.5 + Math.random() * 2) {
        lastLogTime = t;
        logLines.push({
          text: logMessages[Math.floor(Math.random() * logMessages.length)],
          alpha: 0.5,
          y: canvas.height - 30,
        });
        if (logLines.length > 8) logLines.shift();
      }

      for (let i = logLines.length - 1; i >= 0; i--) {
        const log = logLines[i];
        log.y -= 0.3;
        log.alpha -= 0.0008;
        if (log.alpha <= 0) {
          logLines.splice(i, 1);
          continue;
        }
        ctx.font = "10px monospace";
        ctx.fillStyle = `rgba(60, 140, 200, ${log.alpha})`;
        ctx.textAlign = "left";
        ctx.fillText(log.text, 20, log.y);
      }

      // Status indicator top-right
      ctx.font = "9px monospace";
      ctx.fillStyle = `rgba(50, 160, 120, ${0.3 + 0.15 * Math.sin(t * 2)})`;
      ctx.textAlign = "right";
      ctx.fillText("● SYSTEMS OPERATIONAL", canvas.width - 30, 30);

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
      style={{ opacity: 0.75 }}
    />
  );
};

export default DashboardBackground;
