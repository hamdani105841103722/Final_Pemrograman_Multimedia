document.addEventListener('DOMContentLoaded', function() {

    // Animasi Fade-in saat elemen masuk ke layar
    const sections = document.querySelectorAll('.content-section');

    const observerOptions = {
        root: null, // default: viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% dari elemen harus terlihat
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Hentikan observasi setelah animasi
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

});