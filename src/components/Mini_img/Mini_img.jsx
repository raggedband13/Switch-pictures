import './Mini_img.css'

function Mini_img( {src, onImg, isActive} ) {

    

    return (
        <img className={'galery_img_mini ' + (isActive == src ? 'active' : '')} onClick={ () => onImg(src) } src={src} />
    )
}

export default Mini_img;