// Функция для открытия попапа с работой
function openWorkPopup(src, title) {
    const popup = document.getElementById('workPopup');
    const popupImg = document.getElementById('workPopupImg');
    
    if (!popup || !popupImg) {
        console.error('Элементы попапа не найдены');
        return;
    }
    
    popupImg.src = src;
    popupImg.alt = title || 'Работа';
    popup.classList.add('active');
}

// Закрытие попапа
document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.getElementById('workPopupClose');
    const popup = document.getElementById('workPopup');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            popup.classList.remove('active');
        });
    }
    
    if (popup) {
        popup.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    }
    
    // Закрытие по ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const activePopup = document.getElementById('workPopup');
            if (activePopup && activePopup.classList.contains('active')) {
                activePopup.classList.remove('active');
            }
        }
    });
});