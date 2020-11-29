import React, { useState } from "react";
import Timezone from "./Timezone";
import Hour from "./Hour";
import moment from "moment-timezone";

function TimezoneGroup({
    city,
    deleteZone,
    index,
    defaultOffset,
    setDefaultZone,
}) {
    const [time, setTime] = useState("");

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
                <Timezone
                    city={city}
                    offset={getOffset(city)}
                    gmt={getGMT(city)}
                    time={time}
                    deleteZone={deleteZone}
                    index={index}
                    setDefaultZone={setDefaultZone}
                />
                <Hour
                    city={city}
                    offset={getOffset(city)}
                    gmt={getGMT(city)}
                    setTime={setTime}
                />
            </>
        )
    );
}

export default TimezoneGroup;
