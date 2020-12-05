import React, { useState, useMemo } from "react";
import moment from "moment-timezone";
import Search from "./components/Search";
import TimezoneGroup from "./components/TimezoneGroup";
import { connect } from "react-redux";

function App({ zoneName }) {
    console.log(moment.tz.zone("America/Mendoza").countries());
    //const [zoneName, setZoneName] = useState(city);
    const [defaultZone, setDefaultZone] = useState(moment.tz.guess());

    const defaultOffset = moment.tz(defaultZone).utcOffset() / 60;

    const zoneList = () => {
        return zoneName.map((data, i) => (
            <TimezoneGroup
                zoneName={data}
                key={i}
                index={i}
                setDefaultZone={setDefaultZone}
                defaultOffset={defaultOffset}
            />
        ));
    };

    const list = useMemo(zoneList, [zoneName, defaultZone]);

    return (
        <div className="wrapper">
            <h2>TIMEZONE CONVERTER</h2>
            <Search />
            {list}
        </div>
    );
}

export default connect(
    state => {
        return { zoneName: state.zoneName };
    },
    dispatch => {
        return {};
    }
)(App);
