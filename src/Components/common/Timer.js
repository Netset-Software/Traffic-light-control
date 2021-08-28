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

    function greencolor(minuts, seconds){
        if ( ((minuts*60) + seconds) <= 3 ){
            return false
        }
        else if (((minuts*60) + seconds) <= 30){
            return true;
        }
        return false;
        // return (((minuts*60) + seconds) <= 30 || ((minuts*60) + seconds) <= 5 ) ? true : false
    }

    function yellocolor(minuts, seconds){
        return (((minuts*60) + seconds) <= 33 || ((minuts*60) + seconds) <= 3 ) ? true : false
    }

    // function redcolor(minuts, seconds){
    //     return (((minuts*60) + seconds) <= ) ? true : false
    // }

    return (
    <div>
    {/* <div style={{width:'30px', height: '30px', backgroundColor: 'black', borderRadius: '30px'}}> */}
        {/* <div style={{width:'20px', height: '20px',backgroundColor: (greencolor(minutes, seconds) ? 'green' : (yellocolor(minutes, seconds) ? 'yellow' : 'red')), borderRadius: '20px'}}></div> */}
        {/* <span style={{backgroundColor: (greencolor(minutes, seconds) ? 'green' : (yellocolor(minutes, seconds) ? 'yellow' : 'red'))}}></span>
        <span style={{backgroundColor: (greencolor(minutes, seconds) ? 'green' : (yellocolor(minutes, seconds) ? 'yellow' : 'red'))}}></span> */}
    {/* </div> */}
    
    <h6 style={{backgroundColor: (greencolor(minutes, seconds) ? 'green' : (yellocolor(minutes, seconds) ? 'yellow' : 'red')), width: '63px', padding: '5px', borderRadius: '15px', color: 'white'}}><span id="pause-timer" onClick={pause}>{(minutes * 60) + seconds}</span><span id="minutes">{formatNumberToTwoDigits(minutes)}</span>  :  <span id="seconds">{formatNumberToTwoDigits(seconds)}</span></h6>
    </div>
    );
}

export default Timer;