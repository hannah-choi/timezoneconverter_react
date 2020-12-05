import React, { useState, useMemo } from "react";
import moment from "moment-timezone";
import Search from "./components/Search";
import TimezoneGroup from "./components/TimezoneGroup";
import { connect } from "react-redux";

function App({ city }) {
    const [zoneName, setZoneName] = useState(city);
    const [inputValue, setInputValue] = useState("");
    const [defaultZone, setDefaultZone] = useState(moment.tz.guess());

    const defaultOffset = moment.tz(defaultZone).utcOffset() / 60;

    const deleteZone = index => {
        let newArray = Array.from(zoneName);
        newArray.splice(index, 1);
        setZoneName(newArray);
    };

    const zoneList = () => {
        return zoneName.map((data, i) => (
            <TimezoneGroup
                zoneName={data}
                key={i}
                deleteZone={deleteZone}
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
            <Search inputValue={inputValue} setInputValue={setInputValue} />
            {list}
        </div>
    );
}

export default connect(
    state => {
        return { city: state.city };
    },
    dispatch => {
        return {};
    }
)(App);
