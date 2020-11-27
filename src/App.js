import React, { useState } from "react";
import Search from "./components/Search";
import TimezoneGroup from "./components/TimezoneGroup";

function App() {
    const [cityName, setCityName] = useState("");

    const addZone = data => {
        const cityName = data.replace(" ", "_");
        const zoneName = cityName
            .split("/")
            .map(data => data[0].toUpperCase() + data.substr(1).toLowerCase())
            .join("/");
        setCityName(zoneName);
    };

    return (
        <div className="wrapper">
            <h2>TIMEZONE CONVERTER</h2>
            <Search addZone={addZone} />
            <TimezoneGroup addZone={addZone} city={cityName} />
        </div>
    );
}

export default App;
