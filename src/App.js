import React, { useState } from "react";
import Search from "./components/Search";
import TimezoneGroup from "./components/TimezoneGroup";

function App() {
    const [cityName, setCityName] = useState([]);

    const addZone = data => {
        const zoneName = data.replace(" ", "_");
        const zoneNameString = zoneName
            .split("/")
            .map(data => data[0].toUpperCase() + data.substr(1).toLowerCase())
            .join("/");
        setCityName([...cityName, zoneNameString]);
    };

    return (
        <div className="wrapper">
            <h2>TIMEZONE CONVERTER</h2>
            <Search addZone={addZone} />
            {cityName.map((data, i) => (
                <TimezoneGroup city={data} key={i} />
            ))}
        </div>
    );
}

export default App;
