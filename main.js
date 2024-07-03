const galeryImgMax = document.querySelector('.galery_img_max img');
const galeryImgSmall = document.querySelectorAll('.galery_img_small img');

galeryImgSmall.forEach( (small) => {
    small.addEventListener('click', () => {
        const smallSrc = small.getAttribute('src')
        galeryImgMax.setAttribute('src', smallSrc)

        galeryImgSmall.forEach( (small) => {
            small.classList.remove('active')
        })
        
        small.classList.add('active')
    })
})