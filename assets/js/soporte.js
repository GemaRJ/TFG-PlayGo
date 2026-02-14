// assets/js/soporte.js

const iniciarEspacio = () => {
    console.log("🚀 Sistema espacial PlayGo activado...");

    // 1. Forzamos que el body sea transparente para ver el canvas detrás
    document.body.style.setProperty('background', 'transparent', 'important');

    // 2. Crear el Canvas de estrellas
    const canvas = document.createElement('canvas');
    canvas.id = 'stars-canvas';
    
    Object.assign(canvas.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        zIndex: '-1', 
        background: 'radial-gradient(circle at center, #0f172a 0%, #05070a 100%)',
        pointerEvents: 'none'
    });
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    let stars = [];

    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    class Star {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * window.innerWidth;
            this.y = Math.random() * window.innerHeight;
            this.size = Math.random() * 2;
            this.speed = Math.random() * 0.5 + 0.1;
        }
        update() {
            this.y += this.speed;
            if (this.y > window.innerHeight) this.y = -10; 
        }
        draw() {
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    const initStars = () => {
        resize();
        stars = Array.from({ length: 150 }, () => new Star());
    };

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(s => { s.update(); s.draw(); });
        requestAnimationFrame(animate);
    };

    // 3. Crear Robot Volador (Z-index altísimo para Safari)
    const robot = document.createElement('div');
    robot.innerHTML = '🤖';
    Object.assign(robot.style, {
        position: 'fixed',
        fontSize: '60px',
        zIndex: '9999',
        pointerEvents: 'none',
        filter: 'drop-shadow(0 0 20px #00d2ff)',
        top: '15%',
        right: '10%',
        display: 'block'
    });
    document.body.appendChild(robot);

    let angle = 0;
    const animateRobot = () => {
        angle += 0.02;
        const x = Math.sin(angle) * 30;
        const y = Math.cos(angle) * 20;
        robot.style.transform = `translate(${x}px, ${y}px) rotate(${x/2}deg)`;
        requestAnimationFrame(animateRobot);
    };

    initStars();
    animate();
    animateRobot();
    window.addEventListener('resize', initStars);
};

// Ejecución inmediata
iniciarEspacio();