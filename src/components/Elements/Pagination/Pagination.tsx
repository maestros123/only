import React from "react";
import {Props} from "../../Layots/Main/Main";
import Prev from '../../../assets/prev.svg'
import Next from '../../../assets/next.svg'
import styles from './Pagination.module.scss'
import getDataById, {data} from "../../../data/data";

const Pagination: React.FC<Props> = ({ circleState, setCircleState }) => {
    function handleArrowPrev() {
        if (circleState.activeDot > 1) {
            const newData = getDataById(circleState.activeDot - 1);
            setCircleState({
                ...circleState,
                rotation: (circleState.activeDot - 2) * -60,
                activeDot: (circleState.activeDot - 2) + 1,
                data: newData
            });
        }
    }

    function handleArrowNext() {
        if (circleState.activeDot < 6 ) {
            const newData = getDataById(circleState.activeDot + 1);
            setCircleState({
                ...circleState,
                rotation: circleState.activeDot * -60,
                activeDot: circleState.activeDot + 1,
                data: newData
            });
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.numbers}>0{circleState.activeDot}/0{data.length}</div>
            <div className={styles.arrows}>
                <button onClick={handleArrowPrev} className={circleState.activeDot === 1 ? styles.disable : ''}><Prev/></button>
                <button onClick={handleArrowNext} className={`${styles.right} ${circleState.activeDot === data.length ? styles.disable : ''}`}><Next/></button>
            </div>
        </div>
    );
};

export default Pagination;