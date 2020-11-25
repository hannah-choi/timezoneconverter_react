import React, { useState } from "react";
import Timezone from "./Timezone";
import Hour from "./Hour";
import moment from "moment-timezone";

function TimezoneGroup({
    zoneName,
    deleteZone,
    index,
    setDefaultZone,
    defaultOffset,
}) {
    const [time, setTime] = useState("");

    const getGMT = zoneName => {
        return moment.tz(zoneName).utcOffset() / 60;
    };

    const getOffset = zoneName => {
        let displayOffset = defaultOffset - getGMT(zoneName);
        let difference =
            displayOffset < 1
                ? `${displayOffset}`.replace("-", "+")
                : "-" + displayOffset;
        return parseInt(difference);
    };

    return (
        zoneName && (
            <>
                <Timezone
                    zoneName={zoneName}
                    offset={getOffset(zoneName)}
                    time={time}
                    deleteZone={deleteZone}
                    index={index}
                    setDefaultZone={setDefaultZone}
                />
                <Hour
                    zoneName={zoneName}
                    offset={getOffset(zoneName)}
                    gmt={getGMT()}
                    setTime={setTime}
                />
            </>
        )
    );
}

export default TimezoneGroup;
