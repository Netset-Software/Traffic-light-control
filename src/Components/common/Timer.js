import React, { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';

function Timer({ expiryTimestamp, onTimeExpire }) {
    const { seconds, minutes, start } = useTimer({ expiryTimestamp, onExpire: () => onTimeExpire() });

    useEffect(() => {
        start();
    }, []);

    function formatNumberToTwoDigits(n) {
        return n > 9 ? n : "0" + n;
    }

    return (<h6 ><span>{formatNumberToTwoDigits(minutes)}</span>  :  <span>{formatNumberToTwoDigits(seconds)}</span></h6>);
}

export default Timer;