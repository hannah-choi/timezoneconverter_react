import React, { useEffect, useRef } from "react";
import moment from "moment-timezone";
import DragSelect from "dragselect";

function Hour({ zoneName, offset, gmt, setTime }) {
    const div = useRef();

    const getNow = () => {
        return parseInt(moment.tz(zoneName).format("HH"));
    };

    const getCurrentTime = () => {
        return moment.tz(zoneName).format("HH:mm");
    };

    const getToday = () => {
        const today = moment.tz(zoneName).format("DD MMM");
        return today.split(" ").map(item => (
            <p key={item} className="todayP">
                {item}
            </p>
        ));
    };

    const getTomorrow = () => {
        const tomorrow = moment.tz(zoneName).add(1, "days").format("DD MMM");
        return tomorrow.split(" ").map(item => (
            <p key={item} className="todayP">
                {item}
            </p>
        ));
    };

    const getClass = i => {
        return `${i === 0 ? "date" : ""} ${i === getNow() ? "today" : ""}`;
    };

    const getDate = i => {
        return i === 0 ? (gmt < 0 ? getTomorrow() : getToday()) : i;
    };

    const getHours = () => {
        let key = 0;
        let hours = [];
        let number = offset < 0 ? 24 + offset : offset;
        for (let i = number; i < 24; i++) {
            hours.push(
                <span key={key++} className={`selectable ${getClass(i)}`}>
                    {i === 0 ? getToday() : i}
                </span>
            );
        }
        for (let i = 0; i < number; i++) {
            hours.push(
                <span key={key++} className={`selectable ${getClass(i)}`}>
                    {getDate(i)}
                </span>
            );
        }
        return hours;
    };

    useEffect(() => {
        new DragSelect({
            selectables: div.current.querySelectorAll(`.selectable`),
            callback: () => {
                if (div.current === null) {
                    return;
                }
                let selected = div.current.querySelectorAll(".ds-selected");
                let time = null;
                const returnZero = function (number) {
                    if (number.classList.contains("date")) {
                        return "00";
                    }
                    return number.textContent;
                };
                if (selected.length === 0) {
                    time = getCurrentTime();
                } else if (selected.length === 1) {
                    time = returnZero(selected[0]) + ":00";
                } else {
                    time =
                        returnZero(selected[0]) +
                        ":00 - " +
                        returnZero(selected[selected.length - 1]) +
                        ":00";
                }
                setTime(time);
            },
        });
    }, [div]); // [] >> 1번만 실행이 된다.
    //[div] = div 값이 바뀔때만 useEffect내의 코드를 실행
    // 이 파라메터가 없을경우 계속 실행

    return (
        <div className="hoursList">
            <div className="hoursComp">
                <div className="day" ref={div}>
                    {getHours()}
                </div>
            </div>
        </div>
    );
}

export default Hour;
