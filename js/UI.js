document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.project-layout-section');

    if (sections.length > 0) { 
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); 
                }
            });
        }, {
            threshold: 0.5 
        });

        sections.forEach(section => { 
            observer.observe(section);
        });
    }
});