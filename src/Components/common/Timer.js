import React, { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';

function Timer({ expiryTimestamp, onTimeExpire, isSubmit }) {
    const { seconds, minutes, start } = useTimer({ expiryTimestamp, onExpire: () => onTimeExpire() });

    useEffect(() => {
        start();
    }, []);

    function formatNumberToTwoDigits(n) {
        return n > 9 ? n : "0" + n;
    }
    // if (){

    // }

    return (<h6 ><span>{formatNumberToTwoDigits(minutes)}</span>  :  <span>{formatNumberToTwoDigits(seconds)}</span></h6>);
}

export default Timer;