const links = document.querySelectorAll('.nav-item');
links.forEach(link => {
    link.addEventListener('click', () => {
        const activeElement = document.querySelector('.active-page');
        activeElement.classList.remove('active-page');
        link.classList.add('active-page');
    });
});