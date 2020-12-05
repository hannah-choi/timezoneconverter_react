import React from "react";
import * as store from "../store/store";
import { connect } from "react-redux";

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

export default connect(
    () => {},
    dispatch => {
        return {
            addZone: city => dispatch(store.addZone(city)),
        };
    }
)(SuggestionItem);
