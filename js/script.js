// Variable global para el audio
let bgMusic = new Audio('https://assets.mixkit.co/sfx/preview/2960/2960-preview.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.35;

document.addEventListener('DOMContentLoaded', () => {
    createStars();
    generatePhotos();
    generateVideos();
    generateReasons();
    showSection(0);
    initNewGame();
});

// ===================== MÚSICA (CORREGIDA) =====================
function toggleMusic() {
    if (bgMusic.paused) {
        bgMusic.play().catch(e => {
            console.log("El navegador requiere interacción para reproducir música");
        });
    } else {
        bgMusic.pause();
    }
}

// ===================== ESTRELLAS =====================
function createStars() {
    const container = document.getElementById('stars');
    for (let i = 0; i < 400; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = (Math.random() * 3.5 + 1) + 'px';
        star.style.height = star.style.width;
        star.style.background = 'white';
        star.style.borderRadius = '50%';
        star.style.opacity = Math.random() * 0.8 + 0.3;
        container.appendChild(star);
    }
}

// ===================== FOTOS =====================
function generatePhotos() {
    const gallery = document.getElementById('photo-gallery');
    if (!gallery) return;
    for (let i = 1; i <= 10; i++) {
        const div = document.createElement('div');
        div.className = 'photo-card';
        div.innerHTML = `<img src="imagenes/imagen${i}.jpeg" onerror="this.src='https://picsum.photos/id/${100+i}/300/260'">`;
        gallery.appendChild(div);
    }
}

// ===================== VIDEOS (CORREGIDOS) =====================
function generateVideos() {
    const container = document.getElementById('video-container');
    if (!container) return;
    container.innerHTML = '<h2>Nuestros Videos Especiales 🎥</h2>';
    for (let i = 1; i <= 3; i++) {
        const div = document.createElement('div');
        div.className = 'video-wrapper';
        // 'muted' es obligatorio para que funcione el autoplay
        div.innerHTML = `
            <h3>Video ${i}</h3>
            <video autoplay loop muted playsinline width="100%" style="border-radius:15px; max-width:820px;">
                <source src="imagenes/video${i}.mp4" type="video/mp4">
            </video>
        `;
        container.appendChild(div);
    }
}

// ===================== JUEGO Y RAZONES =====================
function generateReasons() {
    const list = document.getElementById('reasons-list');
    if (!list) return;
    for (let i = 1; i <= 100; i++) {
        const li = document.createElement('li');
        li.textContent = `Razón #${i}: Eres la persona más especial del mundo 💕`;
        list.appendChild(li);
    }
}

let canvas, ctx, score = 0, items = [], gameRunning = false;

function initNewGame() {
    canvas = document.getElementById('gameCanvas');
    if (canvas) {
        ctx = canvas.getContext('2d');
        canvas.addEventListener('click', handleTap);
    }
}

function handleTap(e) {
    if (!gameRunning) return;
    const rect = canvas.getBoundingClientRect();
    const tapX = e.clientX - rect.left;
    const tapY = e.clientY - rect.top;
    for (let i = items.length - 1; i >= 0; i--) {
        if (Math.abs(items[i].x - tapX) < 50 && Math.abs(items[i].y - tapY) < 50) {
            score += 20;
            document.getElementById('score').textContent = score;
            items.splice(i, 1);
            break;
        }
    }
}

function startGame() {
    score = 0;
    items = [];
    gameRunning = true;
    setInterval(() => {
        if (gameRunning) items.push({x: Math.random() * 700 + 50, y: -50, speed: 3});
    }, 1000);
    requestAnimationFrame(gameLoop);
}

function gameLoop() {
    if (!gameRunning) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    items.forEach((item, index) => {
        item.y += item.speed;
        ctx.font = '40px Arial';
        ctx.fillText('🍗', item.x, item.y);
        if (item.y > 420) items.splice(index, 1);
    });
    requestAnimationFrame(gameLoop);
}

function showSection(n) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    const section = document.getElementById(`section-${n}`);
    if (section) section.classList.add('active');
}