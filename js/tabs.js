document.addEventListener('DOMContentLoaded', function() {
    const tabsBtns = document.querySelectorAll('.tabs__btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabsBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Убираем активный класс у всех кнопок
            tabsBtns.forEach(btn => btn.classList.remove('tabs__btn--active'));
            
            // Добавляем активный класс текущей кнопке
            this.classList.add('tabs__btn--active');
            
            // Получаем id вкладки из data-атрибута
            const tabId = this.getAttribute('data-tab');
            
            // Скрываем все панели
            tabPanes.forEach(pane => pane.classList.remove('tab-pane--active'));
            
            // Показываем нужную панель
            document.getElementById(tabId).classList.add('tab-pane--active');
        });
    });
});