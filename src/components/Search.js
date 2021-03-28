import React, { useState } from "react";
import zones from "./zones";
import SuggestionList from "./SuggestionList";
import { connect } from "react-redux";
import * as searchAction from "../module/search";
import { ReactComponent as SearchIcon } from "./svg/search.svg";

function Search({ addZone, inputValue, changeInput }) {
    const timezoneDB = zones.map(item => item.fullName);
    const [matchValue, setMatchValue] = useState([]);
    const inputChange = e => {
        changeInput(e.target.value);
        if (e.target.value.length > 0) {
            findMatches(e.target.value);
        }
    };

    const findMatches = typedWord => {
        const regex = new RegExp(typedWord, "gi");
        let matchArray = timezoneDB
            .filter(zone => zone.match(regex))
            .slice(0, 10);
        setMatchValue(matchArray);
    };

    return (
        <div className="search">
            <SearchIcon className="searchIcon" style={{ width: `13px` }} />
            <input
                type="text"
                name="searchInput"
                className="searchInput"
                value={inputValue}
                onChange={e => inputChange(e)}
                autoComplete="off"
            />
            <input type="submit" name="submit" value="Search" />
            {inputValue && (
                <SuggestionList
                    matchArray={matchValue}
                    value={inputValue}
                    addZone={addZone}
                />
            )}
        </div>
    );
}

export default connect(
    state => {
        return { inputValue: state.search.input };
    },
    dispatch => {
        return {
            changeInput: input => {
                dispatch(searchAction.changeInput(input));
            },
        };
    }
)(Search);
