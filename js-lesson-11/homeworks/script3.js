window.addEventListener("DOMContentLoaded", () => {
    const random = (min, max) => {
        const rand = min + Math.random() * (max - min + 1);
        return Math.floor(rand);
    }
    const floatWindow = document.querySelector('.floatwindow');
    floatWindow.style.left = `${random(0, 90)}%`;
    floatWindow.style.top = `${random(0, 90)}%`;
    
    floatWindow.addEventListener('mouseenter', () => {
        floatWindow.style.left = `${random(0, 90)}%`;
        floatWindow.style.top = `${random(0, 90)}%`;
    });
    floatWindow.addEventListener('click', () => {
        alert('Тебе повезло! Сегодня скидка от ЗСУ!');
    });
})