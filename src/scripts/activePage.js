export default function activePage(link, routes) {
    const activeElement = document.querySelector('.active-page');
    activeElement.classList.remove('active-page');
    routes.forEach(route => {
        if (link.href.endsWith(route.name)) {
            if (route.isActiveRoute(window.location.pathname)) {
                link.classList.add('active-page');
            }
        }
    });
};