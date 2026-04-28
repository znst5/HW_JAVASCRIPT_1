const counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');

cookie.onclick = () => {
    let count = parseInt(counter.textContent);
    counter.textContent = count + 1;

    cookie.style.transform = 'scale(1.5)';

    setTimeout(() => {
        cookie.style.transform = 'scale(1)';
    }, 100);
};