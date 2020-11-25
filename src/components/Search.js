import React, { useState } from "react";
import moment from "moment-timezone";
import SuggestionList from "./SuggestionList";

function Search({ addZone, setSearchInput }) {
    const timezoneDb = Object.keys(moment.tz._zones)
        .map(data => data.replace("_", "/"))
        .map(data => data.replace("_", " "));

    const [inputValue, setInputValue] = useState("");
    const [matchArray, setMatchArray] = useState([]);

    const inputChange = ({ target }) => {
        setInputValue(target.value);
        if (target.value.length > 0) {
            findMatches(target.value);
        }
    };

    const findMatches = value => {
        const regex = new RegExp(value, "gi");
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
                onChange={e => inputChange(e)}
                autoComplete="off"
            />
            <input type="submit" name="submit" value="search" />
            {inputValue && (
                <ul className="suggestionList">
                    <SuggestionList
                        matchArray={matchArray}
                        value={inputChange}
                        addZone={addZone}
                        setSearchInput={setSearchInput}
                    />
                </ul>
            )}
        </div>
    );
}

export default Search;
