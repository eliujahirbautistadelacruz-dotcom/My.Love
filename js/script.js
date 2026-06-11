// Carga del audio local
let bgMusic = new Audio('imagenes/audio.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.5;

// Intento de reproducción automática al primer clic en cualquier lugar
document.body.addEventListener('click', () => {
    bgMusic.play().catch(e => console.log("Esperando interacción para audio"));
}, { once: true });

function toggleMusic() {
    if (bgMusic.paused) bgMusic.play();
    else bgMusic.pause();
}

document.addEventListener('DOMContentLoaded', () => {
    createStars();
    generatePhotos();
    generateVideos();
    generateReasons();
    showSection(0);
});

function showSection(n) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    const section = document.getElementById(`section-${n}`);
    if (section) section.classList.add('active');
}

function createStars() {
    const container = document.getElementById('stars');
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = '2px'; star.style.height = '2px';
        star.style.background = 'white';
        container.appendChild(star);
    }
}

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

function generateVideos() {
    const container = document.getElementById('video-container');
    if (!container) return;
    for (let i = 1; i <= 3; i++) {
        container.innerHTML += `
            <div class="video-wrapper">
                <video autoplay loop muted playsinline width="100%">
                    <source src="imagenes/video${i}.mp4" type="video/mp4">
                </video>
            </div>`;
    }
}
function generateReasons() {
    const list = document.getElementById('reasons-list');
    // Limpiamos la lista por si acaso antes de agregar los elementos
    list.innerHTML = ''; 
    
   const razones = [
    "Tu sonrisa.",
    "Tu forma de ser.",
    "Tu inteligencia.",
    "Cómo me cuidas.",
    "Tus abrazos.",
    "Nuestros besos.",
    "Tu buen corazón.",
    "Tu paciencia conmigo.",
    "Tu apoyo constante.",
    "Tu risa única.",
    "Tus detalles lindos.",
    "Tu honestidad.",
    "Tu gran valentía.",
    "Que me tengas paciencia.",
    "Cómo me haces sentir.",
    "Tu estilo .",
    "TUS BESOOOOS.",
    "Cómo me escuchas.",
    "Tu ",
    "Tu ternura al despertar.",
    "Tu .",
    "Tu sinceridad.",
    "Cómo valoras todo.",
    "Tu nobleza.",
    "Tu FORMA DE AMARME.",
    "TE AMO .",
    "Tu .",
    "Tu SONRISA.",
    "Tu SONRISA.",
    " TE AMO.",
    "Tu actitud .",
    "Tu lealtad.",
    "Tu forma de amarme.",
    "Tu AMO.",
    "Te AMO.",
    "Cómo me entiendes.",
    "TU.",
    "Tu dedicación ala relación.",
    "Tu manera de entenderme.",
    "Tu bondad.",
    "Tu sonrisa.",
    "Tu forma de amar.",
    "Tu mirada que dice todo.",
    "Que siempre seas tú.",
    "Tus besos otravez.",
    "Tus pequeños detalles.",
    "Que seas mi compañera.",
    "Tu forma de abrazarme.",
    "Nuestros momentos juntos.",
    "Porque te amo."
];

    razones.forEach((r, i) => {
        const li = document.createElement('li');
        // Aquí cambiamos el formato a: "1. Texto"
        li.textContent = `${i + 1}. ${r}`;
        list.appendChild(li);
    });
}