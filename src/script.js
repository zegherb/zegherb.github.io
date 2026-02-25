// Animasi sederhana saat scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.container');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 150) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Inisialisasi opacity untuk animasi
document.querySelectorAll('.container').forEach(s => {
    s.style.opacity = '0';
    s.style.transform = 'translateY(50px)';
    s.style.transition = 'all 0.8s ease-out';
});