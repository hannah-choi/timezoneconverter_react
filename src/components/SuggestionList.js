import React, { useState } from "react";
import SuggestionItem from "./SuggestionItem";
import moment from "moment-timezone";

function SuggestionList({ matchArray, value, addZone, setSearchInput }) {
    let list = "";

    if (matchArray && matchArray.length > 0) {
        list = matchArray.map((data, i) => {
            const regex = new RegExp(value, "gi");
            return <SuggestionItem data={data} key={i} addZone={addZone} />;
        });
    }

    return <>{list}</>;
}

export default SuggestionList;
