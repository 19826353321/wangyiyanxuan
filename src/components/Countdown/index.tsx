import React, { useState, useEffect, useRef } from 'react'
import { CountdownWrapper } from './style';

const Countdown = () => {
    // 设置倒计时时间初始值
    const [hour, setHour] = useState<number>(1);
    const [minute, setMinute] = useState<number>(1);
    const [second, setSecond] = useState<number>(5);
    const timeRef = useRef<NodeJS.Timer>();
    const [count, setCount] = useState(9);
    // 秒钟倒计时
    useEffect(() => {
        // setInterval(
        //     () => { setSecond(count => count - 1); },
        //     100);
        timeRef.current = setInterval(
            () => { setSecond(second => second - 1); },
            1000);
        setInterval(
            () => { setCount(count => count - 1); },
            100);
        return () => {
            clearInterval(timeRef.current);
        }
    }, [])
    //秒钟借位
    useEffect(() => {
        if (second < 0) {
            if (minute > 0) {
                //向分钟借位
                setSecond(59);
                setMinute(minute => minute - 1)
            }
            else {

                if (hour > 0) {
                    //向时钟借位
                    setSecond(59)
                    setMinute(59);
                    setHour(minute => minute - 1)
                }
                else {
                    //清理计时器
                    clearInterval(timeRef.current);
                }
            }
        }
    }, [second])
    // 计数器
    useEffect(() => {
        if (count < 0) {
            setCount(9)
        }
    }, [count])

    return (
        <CountdownWrapper>
            <div className='countdown-box'>
                <div className='time'>
                    {(hour || minute || (second != -1)) ?
                        (hour >= 10 ? `${hour}:` : `0${hour}:`) +
                        (minute >= 10 ? `${minute}:` : `0${minute}:`) +
                        (second >= 10 ? `${second}` : `0${second}`)
                        : "活动已经结束了"}
                </div>
                <div className='count'>
                    {count}
                </div>
            </div>

        </CountdownWrapper>

    )
}

export default Countdown
