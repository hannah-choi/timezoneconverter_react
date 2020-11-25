import React, { useState } from "react";
import Search from "./components/Search";
import TimezoneGroup from "./components/TimezoneGroup";

function App() {
    const [searchInput, setSearchInput] = useState("");
    const [zoneName, setZoneName] = useState([]);

    const addZone = data => {
        const cityName = data.replace(" ", "_");
        const stringZoneName = cityName
            .split("/")
            .map(data => data[0].toUpperCase() + data.substr(1).toLowerCase())
            .join("/");
        setZoneName([...zoneName, stringZoneName]);
        setSearchInput("");
    };

    return (
        <div className="wrapper">
            <h2>TIMEZONE CONVERTER</h2>
            <Search addZone={addZone} />
            {zoneName.map((data, i) => (
                <TimezoneGroup
                    zoneName={data}
                    key={i}
                    setSearchInput={setSearchInput}
                />
            ))}
        </div>
    );
}

export default App;
