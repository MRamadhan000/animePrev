const slider = document.querySelector('.slider');
const list = document.querySelector('.list');
const thumbnail = document.querySelector('.thumbnail');

const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');

nextButton.addEventListener('click', ()=>{
    initSlider('next');
})

prevButton.addEventListener('click', ()=>{
    initSlider('prev');
    
})

function initSlider(type){
    const sliderItems = list.querySelectorAll('.item');
    const thumbnailItems = thumbnail.querySelectorAll('.item');

    if (type == 'next') {
        list.appendChild(sliderItems[0]);    
        thumbnail.appendChild(thumbnailItems[0]);    
        slider.classList.add('next');
    }else{
        const lastIndex = sliderItems.length - 1;
        list.prepend(sliderItems[lastIndex]);
        thumbnail.prepend(thumbnailItems[lastIndex]);
        slider.classList.add('prev');
    }

    // Hapus class animasi setelah 2 detik
    setTimeout(() => {
        slider.classList.remove('next', 'prev');
    }, 2000);
}