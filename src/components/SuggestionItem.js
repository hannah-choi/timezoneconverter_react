import React from "react";

function SuggestionItem({ data, addZone }) {
    return (
        <li
            className="suggestionItem"
            onClick={function () {
                addZone(data);
            }}
        >
            <span className="listTimezone">{data}</span>
        </li>
    );
}

export default SuggestionItem;
