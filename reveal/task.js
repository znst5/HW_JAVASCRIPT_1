const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal_active');
        } else {
            entry.target.classList.remove('reveal_active');
        }
    });
}, {
    root: null,
    threshold: 0.1
});

const reveals = document.querySelectorAll('.reveal');
reveals.forEach(el => observer.observe(el));