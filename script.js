document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'https://images.wallpaperscraft.com/image/single/lake_mountain_tree_36589_2650x1600.jpg',
        'https://www.zastavki.com/pictures/originals/2014/Nature___Seasons___Spring_Cold_river_in_spring_067776_.jpg',
        'https://www.sunhome.ru/i/wallpapers/59/bengalskie-tigri-oboi.orig.jpg',
        'https://ae01.alicdn.com/kf/HTB1psxNgHGYBuNjy0Foq6AiBFXaC/Laeacco-Mountain-River-Trees-Waterfall-Scenic-Photography-Backgrounds-Customized-Photographic-Backdrops-For-Photo-Studio.jpg'
    ];

    const sliderImage = document.getElementById('sliderImage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('dotsContainer');

    let currentIndex = 0;

    function updateImage() {
        sliderImage.src = images[currentIndex];
        updateDots();
    }

    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function createDots() {
        images.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateImage();
            });
            dotsContainer.appendChild(dot);
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });

    createDots();
    updateImage();
});
