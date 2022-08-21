function init() {
    let map = new ymaps.Map('map', {
        center: [55.78481733732377, 37.50949715429769],
        zoom: 16
    })
}

ymaps.ready(init)

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};


let menu = document.querySelector('.burger')
let list = document.querySelector('.nav-list')


menu.addEventListener('click', () => {
    menu.classList.toggle('active')
    list.classList.toggle('active')
})