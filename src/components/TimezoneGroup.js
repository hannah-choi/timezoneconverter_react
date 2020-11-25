import React from "react";
import Timezone from "./Timezone";
import Hour from "./Hour";
import moment from "moment-timezone";

function TimezoneGroup({ zoneName }) {
    let defaultOffset = 0;

    const getGMT = zoneName => {
        return moment.tz(zoneName).utcOffset() / 60;
    };

    const setDefault = (zoneName = moment.tz.guess()) => {
        defaultOffset = moment.tz(zoneName).utcOffset() / 60;
    };

    setDefault();

    const getOffset = zoneName => {
        let displayOffset = defaultOffset - getGMT(zoneName);
        let difference =
            displayOffset < 1
                ? `${displayOffset}`.replace("-", "+")
                : "-" + displayOffset;
        return difference;
    };

    return (
        zoneName && (
            <>
                <Timezone zoneName={zoneName} offset={getOffset()} />
                <Hour zoneName={zoneName} offset={getOffset()} gmt={getGMT()} />
            </>
        )
    );
}

export default TimezoneGroup;
