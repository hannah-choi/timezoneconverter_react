import React, { useState } from "react";
import Timezone from "./Timezone";
import Hour from "./Hour";
import moment from "moment-timezone";
import * as store from "../module/city";
import { connect } from "react-redux";

function TimezoneGroup({
    zoneName,
    deleteZone,
    index,
    defaultOffset,
    changeDefaultZone,
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
                    changeDefaultZone={changeDefaultZone}
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

export default connect(
    state => {
        return { defaultOffset: state.city.defaultOffset };
    },
    dispatch => {
        return {
            deleteZone: index => {
                dispatch(store.deleteZone(index));
            },
            changeDefaultZone: city => {
                dispatch(store.changeDefaultZone(city));
            },
        };
    }
)(TimezoneGroup);
