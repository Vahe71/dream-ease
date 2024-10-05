const sliderImages = document.querySelectorAll('.main-content .slider .preview-section img');
const sliderNav = document.querySelector('.main-content .slider .preview-section .slider-nav');
const viewSection = document.querySelector('.main-content .slider .view-section');
const sliderButtons = document.querySelectorAll('.main-content .slider .view-section button');
const toggleTableItems = document.querySelectorAll('.faq-section .toggle-table .item');

let currentImg = 0;

for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].addEventListener('click', () => {
        for (let j = 0; j < sliderImages.length; j++) {
            sliderImages[j].classList.remove('selected');
        }
        sliderImages[i].classList.add('selected');
        currentImg = i;
        console.log(currentImg);
        viewSection.style.background = `url('${sliderImages[i].src}') center / cover`;
    })
}

sliderButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('next') && currentImg < (sliderImages.length - 1)) {
            currentImg++;
        } else if (button.classList.contains('prev') && (currentImg > 0)) {
            currentImg--;
        }
        console.log(currentImg)
        for (let j = 0; j < sliderImages.length; j++) {
            sliderImages[j].classList.remove('selected');
        }
        viewSection.style.background = `url('${sliderImages[currentImg].src}') center / cover`;
        sliderImages[currentImg].classList.add('selected');
    });
});

toggleTableItems.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});



























