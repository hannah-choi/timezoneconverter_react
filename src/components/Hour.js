import React, { useEffect, useRef } from "react";
import moment from "moment-timezone";

function Hour({ zoneName, offset, gmt }) {
    const getNow = () => {
        return parseInt(moment.tz(zoneName).format("HH"));
    };

    const getCurrentTime = () => {
        return moment.tz(zoneName).format("HH:mm");
    };

    const getToday = () => {
        return moment.tz(zoneName).format("DD MMM");
    };

    const getTomorrow = () => {
        return moment.tz(zoneName).add(1, "days").format("DD MMM");
    };

    const getClass = i => {
        return `${i === 0 ? "date" : ""} ${i === getNow() ? "today" : ""}`;
    };

    const getDate = i => {
        return i === 0 ? (gmt < 0 ? getTomorrow() : getToday()) : i;
    };

    const getHours = () => {
        let hours = [];
        let number = offset < 0 ? 24 + offset : offset;
        for (let i = number; i < 24; i++) {
            hours.push(
                <span className={`selectable ${getClass(i)}`}>
                    {i === 0 ? getToday() : i}
                </span>
            );
        }
        for (let i = 0; i < number; i++) {
            hours.push(
                <span className={`selectable ${getClass(i)}`}>
                    {getDate(i)}
                </span>
            );
        }
        return hours;
    };

    // const remove = () =>{
    //     div.remove()
    // }

    return (
        <div className="hoursList">
            <div className="hoursComp">
                <div className="day">{getHours()}</div>
            </div>
        </div>
    );
}

export default Hour;
