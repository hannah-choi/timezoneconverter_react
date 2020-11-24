import React, { useState } from "react";
import Search from "./components/Search";
import TimezoneGroup from "./components/TimezoneGroup";
import moment from "moment-timezone";

function App() {
    const [zoneName, setZoneName] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const addZone = data => {
        const cityName = data.replace(" ", "_");
        // let newArray = zoneName;
        const stringZoneName = cityName
            .split("/")
            .map(data => data[0].toUpperCase() + data.substr(1).toLowerCase())
            .join("/");
        setZoneName([...zoneName, stringZoneName]);
        setInputValue("");
    };

    const deleteZone = index => {
        let newArray = Array.from(zoneName);
        newArray.splice(index, 1);
        setZoneName(newArray);
    };

    return (
        <div className="wrapper">
            <h2>TIMEZONE CONVERTER</h2>
            <Search
                addZone={addZone}
                inputValue={inputValue}
                setInputValue={setInputValue}
            />
            {zoneName.map((data, i) => (
                <TimezoneGroup
                    zoneName={data}
                    key={i}
                    deleteZone={deleteZone}
                    index={i}
                />
            ))}
        </div>
    );
}

export default App;
