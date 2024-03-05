import styles from "./Circle.module.scss";
import React, {useEffect, useRef} from "react";
import { Props } from "../../Layots/Main/Main"
import getDataById, {data} from "../../../data/data";

const Circle: React.FC<Props> = ({ circleState, setCircleState }) => {

    const handleDotClick = (index: number) => {
        const newData = getDataById(index + 1);
        setCircleState({
            ...circleState,
            rotation: index * -60,
            activeDot: index + 1,
            data: newData
        });
    };


    return (
        <div className={styles.wrapper} style={{transform: `rotate(${circleState.rotation}deg)`}}>
            {data.map((item, index) => {
                const angle = -(360 / data.length) * index + 60;
                const angleInRadians = angle * (Math.PI / 180);
                const x = Math.cos(angleInRadians) * 265;
                const y = Math.sin(angleInRadians) * 265;

                return (
                    <div
                        key={index}
                        className={styles.dot}
                        onClick={() => handleDotClick(index)}
                        style={{
                            top: `calc(50% - ${y}px)`,
                            left: `calc(50% + ${x}px)`,
                            transform: `rotate(${circleState.rotation * -1}deg)`
                        }}
                    >
                        <div className={`${styles.number} ${circleState.activeDot === (index+1) ? styles.active : ''}`}>
                            {index + 1} <span>{item.theme}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Circle;