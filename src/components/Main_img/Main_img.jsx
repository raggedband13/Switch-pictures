import classes from './Main_img.module.css';

function Main_img( {src} ) {
    return (
        <img className={classes.main_img} src={src} />
    )
}

export default Main_img;