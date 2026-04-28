(() => {
    const dead = document.getElementById('dead');
    const lost = document.getElementById('lost');
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const modalClose = document.getElementById('modal-close');

    const getHole = index => document.getElementById(`hole${index}`);

    const showResult = (message) => {
        modalText.textContent = message;
        modal.style.display = 'flex';
    };

    modalClose.onclick = () => {
        modal.style.display = 'none';
        dead.textContent = 0;
        lost.textContent = 0;
    };

    for (let i = 1; i <= 9; i++) {
        getHole(i).onclick = function () {
            if (this.className.includes('hole_has-mole')) {
                dead.textContent = +dead.textContent + 1;
            } else {
                lost.textContent = +lost.textContent + 1;
            }

            if (dead.textContent == 10) {
                showResult('Победа!');
            } else if (lost.textContent == 5) {
                showResult('Вы проиграли!');
            }
        };
    }
})();