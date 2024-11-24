document.addEventListener('DOMContentLoaded', () => {
    const carouselInner = document.querySelector('.carousel-inner');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    let currentIndex = 0;

    const cars = [
        {
            name: 'Tesla Model S',
            image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800',
            description: 'Электрический седан премиум-класса с впечатляющим запасом хода'
        },
        {
            name: 'Porsche 911',
            image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
            description: 'Легендарный спортивный автомобиль с уникальным дизайном'
        },
        {
            name: 'BMW M4',
            image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800',
            description: 'Мощное спортивное купе с отличной управляемостью'
        },
        {
            name: 'Mercedes-Benz S-Class',
            image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800',
            description: 'Роскошный седан с передовыми технологиями'
        },
        {
            name: 'Audi RS e-tron GT',
            image: 'https://images.unsplash.com/photo-1656468014942-fcdc17c45ff9?w=800',
            description: 'Электрический спортивный седан будущего'
        },
        {
            name: 'Lamborghini Huracán',
            image: 'https://images.unsplash.com/photo-1632245889029-e406faaa34cd?w=800',
            description: 'Итальянский суперкар с потрясающим дизайном'
        },
        {
            name: 'Range Rover',
            image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800',
            description: 'Премиальный внедорожник с роскошным салоном'
        },
        {
            name: 'McLaren 720S',
            image: 'https://images.unsplash.com/photo-1614026480209-cd9934144671?w=800',
            description: 'Британский суперкар с революционной аэродинамикой'
        },
        {
            name: 'Ferrari F8 Tributo',
            image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800',
            description: 'Итальянский шедевр с мощным V8 двигателем'
        },
        {
            name: 'Rolls-Royce Phantom',
            image: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=800',
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
