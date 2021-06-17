import React, { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';

function Timer(props) {
    var expiryTimestamp = props.expiryTimestamp
    const { seconds, minutes, start, pause } = useTimer({ expiryTimestamp, onExpire: () => props.onTimeExpire() });
    useEffect(() => {
        start();
    }, []);

    function formatNumberToTwoDigits(n) {
        return n > 9 ? n : "0" + n;
    }

    return (<h6 ><span id="pause-timer" onClick={pause}>{(minutes * 60) + seconds}</span><span id="minutes">{formatNumberToTwoDigits(minutes)}</span>  :  <span id="seconds">{formatNumberToTwoDigits(seconds)}</span></h6>);
}

export default Timer;