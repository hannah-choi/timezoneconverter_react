import React, { useState } from "react";
import moment from "moment-timezone";
import SuggestionList from "./SuggestionList";

function Search({ addZone }) {
    const [matchArray, setMatchArray] = useState([]);

    const timezoneDb = Object.keys(moment.tz._zones)
        .map(data => data.replace("_", "/"))
        .map(data => data.replace("_", " "));

    const [inputValue, setInputValue] = useState("");

    const inputChange = e => {
        setInputValue(e.target.value);
        if (e.target.value.length > 0) {
            findMatches(e.target.value);
        }
    };

    const findMatches = typedWord => {
        const regex = new RegExp(typedWord, "gi");
        setMatchArray(
            timezoneDb.filter(timezone => timezone.match(regex)).slice(0, 10)
        );
    };

    return (
        <div className="search">
            <input
                type="text"
                name="searchInput"
                className="searchInput"
                value={inputValue}
                onChange={inputChange}
                autoComplete="off"
            />
            <input type="submit" name="submit" value="search" />
            {inputValue && (
                <ul className="suggestionList">
                    <SuggestionList
                        matchArray={matchArray}
                        addZone={addZone}
                        value={inputValue}
                    />
                </ul>
            )}
        </div>
    );
}

export default Search;
