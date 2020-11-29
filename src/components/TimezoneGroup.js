import React, { useState } from "react";
import Timezone from "./Timezone";
import Hour from "./Hour";
import moment from "moment-timezone";

function TimezoneGroup({ city }) {
    // const setDefault = (city = moment.tz.guess()) => {
    //     let defaultTimezone = city;
    //     let defaultOffset = moment.tz(city).utcOffset() / 60;
    // };

    const [time, setTime] = useState("");

    let defaultOffset = moment.tz(city).utcOffset() / 60;

    const getGMT = city => {
        return moment.tz(city).utcOffset() / 60;
    };

    const getOffset = city => {
        let displayOffset = defaultOffset - getGMT(city);
        console.log(defaultOffset);
        console.log(displayOffset);
        return parseInt(displayOffset);
    };

    return (
        city && (
            <>
                <Timezone
                    city={city}
                    offset={getOffset(city)}
                    gmt={getGMT()}
                    time={time}
                />
                <Hour
                    city={city}
                    offset={getOffset(city)}
                    gmt={getGMT()}
                    setTime={setTime}
                />
            </>
        )
    );
}

export default TimezoneGroup;
