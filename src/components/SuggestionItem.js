import React from "react";
import store from "../store";

function SuggestionItem({ data, addZone, value }) {
    let index = data.indexOf(value);

    return (
        <li
            className="suggestionItem"
            data-zone={data}
            onClick={() => {
                //addZone(data);
                store.dispatch({ type: "ADDZONE", city: data });
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
