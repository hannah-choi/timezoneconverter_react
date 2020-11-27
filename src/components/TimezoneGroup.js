import React from "react";
import Timezone from "./Timezone";
import Hour from "./Hour";
import moment from "moment-timezone";

function TimezoneGroup({ city }) {
    // const setDefault = (city = moment.tz.guess()) => {
    //     let defaultTimezone = city;
    //     let defaultOffset = moment.tz(city).utcOffset() / 60;
    // };

    let defaultOffset = moment.tz(city).utcOffset() / 60;

    const getGMT = city => {
        return moment.tz(city).utcOffset() / 60;
    };

    const getOffset = city => {
        let displayOffset = defaultOffset - getGMT(city);
        let difference =
            displayOffset < 1
                ? `${displayOffset}`.replace("-", "+")
                : "-" + displayOffset;
        return parseInt(difference);
    };

    return (
        city && (
            <>
                <Timezone city={city} offset={getOffset()} gmt={getGMT()} />
                <Hour />
            </>
        )
    );
}

export default TimezoneGroup;
