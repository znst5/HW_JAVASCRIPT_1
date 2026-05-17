const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const valueElement = dropdown.querySelector('.dropdown__value');
    const listElement = dropdown.querySelector('.dropdown__list');
    const links = dropdown.querySelectorAll('.drop__link');

    if (!valueElement || !listElement) return;

    valueElement.addEventListener('click', function(event) {
        event.preventDefault();
        listElement.classList.toggle('dropdown__list_active');
    });

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            valueElement.textContent = this.textContent.trim();
            listElement.classList.remove('dropdown__list_active');
        });
    });
});

