import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState({ time: 0 });
    const [isActive, setIsActive] = useState(true);


    useEffect(() => {
        setInterval(
            () => tick(),
            1000
        );
    });
    const tick = () => {
        setSeconds({ ...seconds, time: seconds.time + 1 });
    }
    return (
        <div style={{ color: "white" }}>
            {/* <p title={seconds + "s"}> Name</p> */}
            {seconds.time}
        </div>
    );
};

export default Timer;