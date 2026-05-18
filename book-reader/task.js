const book = document.getElementById('book');
const buttons = document.querySelectorAll('.font-size');

for (let button of buttons) {
    button.onclick = function (event) {
        event.preventDefault();

        for (let btn of buttons) {
            btn.classList.remove('font-size_active');
        }
        this.classList.add('font-size_active');
        book.classList.remove('book_fs-small', 'book_fs-big');

        const size = this.getAttribute('data-size');

        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');
        }
    };
}