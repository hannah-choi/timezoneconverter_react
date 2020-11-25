import React from "react";

function SuggestionItem({ data, addZone, value }) {
    let index = data.indexOf(value);

    return (
        <li
            className="suggestionItem"
            data-zone={data}
            onClick={() => {
                addZone(data);
            }}
        >
            <span className="listTimezone">
                {data.slice(0, index)}
                <span className="highlight">{value}</span>
                {data.slice(index + value.length, data.length)}
            </span>
        </li>
    );
}

export default SuggestionItem;
