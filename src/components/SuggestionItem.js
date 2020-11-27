import React from "react";

function SuggestionItem({ data, addZone, setInputValue }) {
    return (
        <li
            className="suggestionItem"
            onClick={function () {
                addZone(data);
                setInputValue("");
            }}
        >
            <span className="listTimezone">{data}</span>
        </li>
    );
}

export default SuggestionItem;
