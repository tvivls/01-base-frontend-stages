export default function activePage(link) {
    const activeElement = document.querySelector('.active-page');
    activeElement.classList.remove('active-page');
    link.classList.add('active-page');
};