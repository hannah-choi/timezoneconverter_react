import React, { useState } from "react";
import Search from "./components/Search";
import TimezoneGroup from "./components/TimezoneGroup";
import moment from "moment-timezone";

function App() {
    const [cityName, setCityName] = useState([]);
    const [defaultZone, setDefaultZone] = useState(moment.tz.guess());

    const defaultOffset = moment.tz(defaultZone).utcOffset() / 60;

    const addZone = data => {
        const zoneName = data.replace(" ", "_");
        const zoneNameString = zoneName
            .split("/")
            .map(data => data[0].toUpperCase() + data.substr(1).toLowerCase())
            .join("/");
        setCityName([...cityName, zoneNameString]);
    };

    const deleteZone = index => {
        const newArray = Array.from(cityName);
        newArray.splice(index, 1);
        setCityName(newArray);
    };

    return (
        <div className="wrapper">
            <h2>TIMEZONE CONVERTER</h2>
            <Search addZone={addZone} />
            {cityName.map((data, i) => (
                <TimezoneGroup
                    city={data}
                    key={i}
                    index={i}
                    deleteZone={deleteZone}
                    defaultOffset={defaultOffset}
                    setDefaultZone={setDefaultZone}
                />
            ))}
        </div>
    );
}

export default App;
