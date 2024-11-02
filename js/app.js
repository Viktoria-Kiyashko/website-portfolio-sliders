document.addEventListener('DOMContentLoaded', () => {
    // Инициализация слайдеров
   
    document.querySelectorAll('.slider').forEach((n, i) => {
        window[`slider${i + 1}`] = new Swiper(n, {
            freeMode: true,
            centeredSlides: true,
            direction: 'vertical',
            mousewheel: true,
            slidesPerView: 1.75,
            slidesOffsetBefore: -125
        });
    });

    
bindSwipers(slider1, slider2, slider3, slider4)

    // Обработчик клика для открытия изображения на весь экран
    document.querySelectorAll('.slider__item').forEach(item => {
        item.addEventListener('click', event => {
            // Создание элемента для полноэкранного изображения
            const fullscreenImg = document.createElement('div');
            fullscreenImg.classList.add('fullscreen');

            const img = document.createElement('img');
            img.src = item.querySelector('.slider__img').style.backgroundImage.slice(5, -2); // Получаем URL изображения
            fullscreenImg.appendChild(img);

            document.body.appendChild(fullscreenImg);

            // Закрытие изображения по клику
            fullscreenImg.addEventListener('click', () => {
                document.body.removeChild(fullscreenImg);
            });
        });
    });
});




bindSwipers(slider1, slider2, slider3, slider4)