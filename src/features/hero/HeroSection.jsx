import { useEffect, useRef } from "react";

const typedItems = [
  "Fullstack Developer",
  "Frontend Developer",
  "Mobile Developer",
  "Web Developer",
];

export default function HeroSection() {
  const typedRef = useRef(null);
  const canvasRef = useRef(null);
  const indexRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);
  const timerRef = useRef(null);

  // Typed animation
  useEffect(() => {
    const el = typedRef.current;
    if (!el) return;
    const type = () => {
      const word = typedItems[indexRef.current];
      if (!deletingRef.current) {
        el.textContent = word.slice(0, charRef.current + 1);
        charRef.current++;
        if (charRef.current === word.length) {
          deletingRef.current = true;
          timerRef.current = setTimeout(type, 2000);
          return;
        }
      } else {
        el.textContent = word.slice(0, charRef.current - 1);
        charRef.current--;
        if (charRef.current === 0) {
          deletingRef.current = false;
          indexRef.current = (indexRef.current + 1) % typedItems.length;
        }
      }
      timerRef.current = setTimeout(type, deletingRef.current ? 50 : 100);
    };
    timerRef.current = setTimeout(type, 500);
    return () => clearTimeout(timerRef.current);
  }, []);

  // Particles canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const PARTICLE_COUNT = 80;
    const MAX_DIST = 140;
    const ACCENT = "5, 99, 187";

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.r = Math.random() * 2.5 + 1;
        this.opacity = Math.random() * 0.5 + 0.3;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ACCENT}, ${this.opacity})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.25;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${ACCENT}, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="hero" className="hero section hero-particles">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="container" data-aos="zoom-out">
        <div className="row justify-content-center">
          <div className="col-lg-9" style={{ maxWidth: 700 }}>
            <h2>Agung Saputra</h2>
            <p>
              I'm{" "}
              <span
                ref={typedRef}
                style={{
                  borderBottom: "2px solid var(--accent-color)",
                  letterSpacing: 1,
                }}
              >
                Fullstack Developer
              </span>
            </p>
            <div className="social-links">
              <a href="#">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
