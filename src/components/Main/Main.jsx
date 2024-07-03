import Mini_img from '../Mini_img/Mini_img';
import classes from './Main.module.css'
import Main_img from '../Main_img/Main_img';
import { useState } from 'react';

function Main() {



    const [imgSrc, setImgSrc] = useState('/img-1.jpg')

    return (
        <div className="container">
            <div className={classes.galery}>
                <div className={classes.galery_img_max}>
                    
                    <Main_img src={imgSrc} />
                </div>
                <div className={classes.galery_img_small}>
                    <Mini_img src='/img-1.jpg' isActive={imgSrc} onImg={setImgSrc} />
                    <Mini_img src='/img-2.jpg' isActive={imgSrc} onImg={setImgSrc} />
                    <Mini_img src='/img-3.jpg' isActive={imgSrc} onImg={setImgSrc} />
                </div>
            </div>
        </div>
    )
}

export default Main;