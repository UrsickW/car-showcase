document.addEventListener('DOMContentLoaded', () => {
    const carouselInner = document.querySelector('.carousel-inner');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    let currentIndex = 0;

    const cars = [
        {
            name: 'Tesla Model S',
            image: 'images/tesla.jpg',
            description: 'Электрический седан премиум-класса с впечатляющим запасом хода'
        },
        {
            name: 'Porsche 911',
            image: 'images/porsche.jpg',
            description: 'Легендарный спортивный автомобиль с уникальным дизайном'
        },
        {
            name: 'BMW M4',
            image: 'images/bmw.jpg',
            description: 'Мощное спортивное купе с отличной управляемостью'
        },
        {
            name: 'Mercedes-Benz S-Class',
            image: 'images/mercedes.jpg',
            description: 'Роскошный седан с передовыми технологиями'
        },
        {
            name: 'Audi RS e-tron GT',
            image: 'images/audi.jpg',
            description: 'Электрический спортивный седан будущего'
        },
        {
            name: 'Lamborghini Huracán',
            image: 'images/lamborghini.jpg',
            description: 'Итальянский суперкар с потрясающим дизайном'
        },
        {
            name: 'Range Rover',
            image: 'images/range-rover.jpg',
            description: 'Премиальный внедорожник с роскошным салоном'
        },
        {
            name: 'McLaren 720S',
            image: 'images/mclaren.jpg',
            description: 'Британский суперкар с революционной аэродинамикой'
        },
        {
            name: 'Ferrari F8 Tributo',
            image: 'images/ferrari.jpg',
            description: 'Итальянский шедевр с мощным V8 двигателем'
        },
        {
            name: 'Rolls-Royce Phantom',
            image: 'images/rolls-royce.jpg',
            description: 'Эталон роскоши в автомобильном мире'
        }
    ];

    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : cars.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < cars.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    // Initialize carousel with car items
    cars.forEach(car => {
        const carItem = document.createElement('div');
        carItem.classList.add('carousel-item');
        carItem.innerHTML = `
            <div class="car-content">
                <img src="${car.image}" alt="${car.name}">
                <div class="car-info">
                    <h2>${car.name}</h2>
                    <p>${car.description}</p>
                </div>
            </div>
        `;
        carouselInner.appendChild(carItem);
    });

    updateCarousel();
});
