import React, { useRef, useEffect } from 'react';

export const ParticlesBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            x: number;
            y: number;
            directionX: number;
            directionY: number;
            size: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.directionX = (Math.random() - 0.5) * 1;
                this.directionY = (Math.random() - 0.5) * 1;
                this.size = Math.random() * 2 + 1;
            }

            update() {
                if (this.x > canvas!.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas!.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }

                // Mouse interaction
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                // Attraction radius can be larger
                const interactionRadius = mouse.isPressed ? 300 : 150;

                if (distance < interactionRadius) {
                    const angle = Math.atan2(dy, dx);
                    const force = (interactionRadius - distance) / interactionRadius;

                    if (mouse.isPressed) {
                        // Attraction
                        const attraction = force * 10; // Stronger force for attraction
                        this.x += Math.cos(angle) * attraction;
                        this.y += Math.sin(angle) * attraction;
                    } else {
                        // Repulsion
                        const repulsion = force * 5;
                        this.x -= Math.cos(angle) * repulsion;
                        this.y -= Math.sin(angle) * repulsion;
                    }
                }

                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                // Red Color for Particles
                ctx.fillStyle = '#E63946';
                ctx.fill();
            }
        }

        const mouse = {
            x: -1000,
            y: -1000,
            isPressed: false
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.x;
            mouse.y = e.y;
        };

        const handleMouseDown = () => {
            mouse.isPressed = true;
        };

        const handleMouseUp = () => {
            mouse.isPressed = false;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        const init = () => {
            particles = [];
            const numberOfParticles = (canvas.width * canvas.height) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
            }
            connect();
        };

        const connect = () => {
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x)) +
                        ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));

                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        let opacityValue = 1 - (distance / 20000);
                        ctx.strokeStyle = `rgba(230, 57, 70, ${opacityValue})`; // Red Lines
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />;
};
