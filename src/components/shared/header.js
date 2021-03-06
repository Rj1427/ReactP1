import React, { useEffect } from 'react';
import { useState } from 'react';
import '../../style.css';


const Header = () => {
    // const calculateTimeLeft = () => {
    //     const difference = +new Date("2020-06-01") - +new Date();
    //     let timeLeft = {};

    //     if (difference > 0) {
    //       timeLeft = {
    //         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    //         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    //         minutes: Math.floor((difference / 1000 / 60) % 60),
    //         seconds: Math.floor((difference / 1000) % 60)
    //       };
    //     }

    //     return timeLeft;
    //   };

    //   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    //   useEffect(() => {
    //     setTimeout(() => {
    //       setTimeLeft(calculateTimeLeft());
    //     }, 1000);
    //   });

    //   const timerComponents = [];

    //   Object.keys(timeLeft).forEach(interval => {
    //     if (!timeLeft[interval]) {
    //       return;
    //     }

    //     timerComponents.push(
    //       <span>
    //         {timeLeft[interval]} {interval}{" "}
    //       </span>
    //     );
    //   });

    //   return (
    //     <div className="header" style={{ color: "white" }}>
    //       {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    //     </div>
    //   );


    const [timeLeft, setTimeLeft] = useState(50);

    useEffect(() => {
        // exit early when we reach 0
        if (!timeLeft) return;

        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
    }, [timeLeft]);

    return (
        <div>
            <h1 style={{ color: "white" }}>{timeLeft}</h1>
        </div>
    );
};

export default Header;