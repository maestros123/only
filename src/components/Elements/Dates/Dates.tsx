import React, {useEffect, useRef} from "react";
import styles from './Dates.module.scss'
import {Props} from "../../Layots/Main/Main";
import gsap from 'gsap';

const Dates: React.FC<Props> = ({ circleState }) => {
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const leftElement = leftRef.current;
        const rightElement = rightRef.current;


        if (!leftElement || !rightElement) return;

        gsap.registerEffect({
            name: "counter",
            extendTimeline: true,
            defaults: {
                end: 0,
                duration: 1,
                ease: "power1.inOut",
                increment: 1,
            },
            effect: (targets:any, config: {
                end: number,
                duration: number,
                ease: string,
                increment: number,
            }) => {
                let tl = gsap.timeline();
                let num = parseInt(targets[0].innerText); // Parse the innerText as integer
                targets[0].innerText = num;

                tl.to(targets, {
                    duration: config.duration,
                    innerText: config.end,
                    modifiers: {
                        innerText: function(value) {
                            return gsap.utils.snap(config.increment, value);
                        },
                    },
                    ease: config.ease,
                });

                return tl;
            },
        });

        let tl = gsap.timeline()

        tl.counter(leftElement, {end:circleState.data?.fromDate, ease:"linear"}, "-=0.5")
        tl.counter(rightElement, {end:circleState.data?.toDate, ease:"linear"}, "-=0.5")


    }, [circleState]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div ref={leftRef} className={styles.left}>1950</div>
                <div ref={rightRef} className={styles.right}>1950</div>
            </div>
        </div>
    );
};

export default Dates;