const timer = document.getElementById('timer');
const modal = document.getElementById('modal');
const button = document.getElementById('push-me');

button.onclick = () => {
    modal.style.display = 'none';
};

let timeLeft = parseInt(timer.textContent);

const countdown = setInterval(() => {
    timeLeft -= 1;
    timer.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(countdown);
        modal.style.display = 'flex';
    }
}, 1000);

