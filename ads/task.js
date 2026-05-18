const rotators = Array.from(document.querySelectorAll('.rotator'));

rotators.forEach((rotator) => {
    const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
    let currentIndex = cases.findIndex(el => el.classList.contains('rotator__case_active'));

    const applyColor = (element) => {
        if (element.dataset.color) {
            element.style.color = element.dataset.color;
        }
    };

    if (currentIndex !== -1) {
        applyColor(cases[currentIndex]);
    }

    setInterval(() => {
        cases[currentIndex].classList.remove('rotator__case_active');
        currentIndex = (currentIndex + 1) % cases.length;

        const nextCase = cases[currentIndex];

        nextCase.classList.add('rotator__case_active');
        applyColor(nextCase);
    }, 1000);
});