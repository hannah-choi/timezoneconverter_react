import React from "react";
import moment from "moment-timezone";

function Hour({ city, offset, gmt }) {
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

    // getClass(i) {
    //     return `${i === 0 ? "date" : ""} ${i === this.getNow() ? "today" : ""}`;
    // }

    const getDate = i => {
        return i === 0 ? (gmt < 0 ? getTomorrow() : getToday()) : i;
    };

    // const remove = () => {
    //     div.remove();
    // };

    const getHours = () => {
        let hours = [];
        let number = offset < 0 ? 24 + offset : offset;
        for (let i = number; i < 24; i++) {
            hours.push(
                <span class={`selectable ${getClass(i)}`}>
                    {i === 0 ? getToday() : i}
                </span>
            );
        }
        for (let i = 0; i < number; i++) {
            hours.push(
                <span class={`selectable ${getClass(i)}`}>{getDate(i)}</span>
            );
        }
        return hours;
    };

    // const getDs(timeUpdate) {
    //     new DragSelect({
    //         selectables: div.querySelectorAll(.selectable),
    //         callback: () => {
    //             let selected = div.querySelectorAll(".ds-selected");
    //             let time = null;
    //             const returnZero = function (number) {
    //                 if (number.classList.contains("date")) {
    //                     return "00";
    //                 }
    //                 return number.textContent;
    //             };

    //             if (selected.length === 0) {
    //                 time = getCurrentTime();
    //             } else if (selected.length === 1) {
    //                 time = returnZero(selected[0]) + ":00";
    //             } else {
    //                 time =
    //                     returnZero(selected[0]) +
    //                     ":00 - " +
    //                     returnZero(selected[selected.length - 1]) +
    //                     ":00";
    //             }
    //             timeUpdate(time);
    //         },
    //     });
    // }

    return (
        <div className="hoursList">
            <div className="hoursComp">
                <div class="day">{getHours()}</div>
            </div>
        </div>
    );
}

export default Hour;
