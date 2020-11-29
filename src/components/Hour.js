import React, { useRef, useEffect } from "react";
import moment from "moment-timezone";
import DragSelect from "dragselect";

function Hour({ city, offset, gmt, setTime }) {
    let div = useRef();

    const getNow = () => {
        return parseInt(moment.tz(city).format("HH"));
    };

    const getCurrentTime = () => {
        return moment.tz(city).format("HH:mm");
    };

    const getToday = () => {
        return moment.tz(city).format("DD MMM");
    };

    const getTomorrow = () => {
        return moment.tz(city).add(1, "days").format("DD MMM");
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
        console.log(div);

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
    }, [div]);

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
