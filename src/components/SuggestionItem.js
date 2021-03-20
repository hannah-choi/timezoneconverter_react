import React from "react";
import zones from "./zones";
import * as searchAction from "../module/search";
import * as cityActions from "../module/city";
import { connect } from "react-redux";

function SuggestionItem({ data, addZone, value, changeInput }) {
    let index = data.toLowerCase().indexOf(value.toLowerCase());

    return (
        <li
            className="suggestionItem"
            data-zone={data}
            onClick={() => {
                addZone(zones.find(zone => zone.fullName === data).zone);
                changeInput();
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

export default connect(null, dispatch => {
    return {
        addZone: city => dispatch(cityActions.addZone(city)),
        changeInput: () => dispatch(searchAction.changeInput("")),
    };
})(SuggestionItem);
