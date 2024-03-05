import styles from './Main.module.scss'
import Dates from "../../Elements/Dates/Dates";
import Circle from "../../Elements/CIrcle/Circle";
import Pagination from "../../Elements/Pagination/Pagination";
import React, {useState} from "react";
import getDataById from "../../../data/data";
import Slider from "../../Elements/Slider/Slider";

interface CircleState {
    rotation: number;
    activeDot: number;
    data: {
        id: number;
        fromDate: number;
        toDate: number;
        fields: { year: string, fact: string }[];
    } | null;
}

export interface Props {
    circleState: CircleState;
    setCircleState: React.Dispatch<React.SetStateAction<CircleState>>;
}

const Main = () => {
    const [circleState, setCircleState] = useState({
        rotation: 0,
        activeDot: 1,
        data : getDataById(1)
    });


    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Исторические<br/> даты</h1>
            <Circle circleState={circleState} setCircleState={setCircleState}/>
            <Dates circleState={circleState} setCircleState={setCircleState}/>
            <Pagination circleState={circleState} setCircleState={setCircleState}/>
            <Slider circleState={circleState} setCircleState={setCircleState}/>
        </div>
    );
};

export default Main;