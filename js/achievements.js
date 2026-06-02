const popup = document.getElementById('popup');
const popupImg = document.getElementById('popupImg');
const popupClose = document.getElementById('popupClose');

document.querySelectorAll('.achievement-card__img').forEach(img => {
    img.addEventListener('click', function () {
        popup.classList.add('active');
        popupImg.src = this.src;
        popupImg.alt = this.alt;
    });
});

popupClose.addEventListener('click', () => {
    popup.classList.remove('active');
});

popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.classList.remove('active');
    }
});