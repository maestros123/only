import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Props} from "../../Layots/Main/Main";
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './swiper.scss'
import 'swiper/css/pagination';
import styles from './Slider.module.scss'


const Slider: React.FC<Props> = ({ circleState, setCircleState }) => {
    const objectRef = useRef(null);

    useEffect(() => {
        const object = objectRef.current;

       gsap.from(object, {
            opacity: 0,
            duration: 1,
            delay: 0.5,
            ease: 'power1.out'
        });
    }, [circleState]);

    return (
        <div className={`${styles.container} fade-in-object`} ref={objectRef}>
            <Swiper
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[ Navigation, Pagination]}
                className={styles.swiper}

                breakpoints={{
                    351: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    2000: {
                        slidesPerView:3,
                        spaceBetween:80
                    }
                }}
            >
                {circleState.data?.fields.map((item, id) => (
                    <SwiperSlide className={styles.slide} key={id}>
                        <h3 className={styles.title}>{item.year}</h3>
                        <p className={styles.text}>{item.fact}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;