import { useState } from "react";
import photo_1 from '../../assets/unsplash_1.png';
import photo_2 from '../../assets/unsplash_2.png';
import photo_3 from '../../assets/unsplash_3.png';
import Button from "../Button/Button";
import Slide from "./Slide";
import { v4 as uuid } from 'uuid';
import classNames from 'classnames';
import styles from './slider.module.css';

export default function Slider() {
    let [index, setIndex] = useState(0);
    let [buttonState, setDisabled] = useState({previous: true, next: false});
    const images = [
        {src: photo_1, key: uuid()},
        {src: photo_2, key: uuid()},
        {src: photo_3, key: uuid()}
    ];
    
    return (
        <div className={styles['slider-container']}>
            <div 
                style={{transform:`translateX(-${index * 100}%)`}}
                className={styles.slider}>
                {images.map(({src, key}) => 
                    <div className={styles["slide-container"]} key={key}>
                        <Slide image={src}/>
                    </div>)}
            </div>
            <div className='button-container'>
                <Button label='<' disabled={buttonState.previous} onClick={() => {
                    if (buttonState.next) setDisabled(prev => ({...prev, next: false}));
                    setIndex(index => {
                        const newIndex = index - 1;
                        if (newIndex <= 0) setDisabled(prev =>({...prev, previous: true}));
                        return newIndex;
                    })
                }}/>
                <>
                    {images.map(({_src, key}, i) => 
                        <Button key={`${key}-paginator`} className={classNames(styles.paginator, {[styles.active]: i === index})}
                            label={(i + 1).toString()} 
                        />)}
                </>
                <Button label='>' disabled={buttonState.next} onClick={() => {
                    setIndex(index => {
                        const newIndex = index + 1;
                        if (newIndex >= images.length - 1) setDisabled(prev =>({...prev, next: true}));
                        return newIndex;
                    });
                    if (buttonState.previous) setDisabled(prev => ({...prev, previous: false}));
                }}/>
            </div>
        </div>
    )
}