import React, { useState } from "react";
import SuggestionItem from "./SuggestionItem";

function SuggestionList({ addZone, matchArray, value, setInputValue }) {
    let list = "";

    if (matchArray && matchArray.length > 0) {
        list = matchArray.map((data, i) => {
            const regex = new RegExp(value, "gi");
            return (
                <SuggestionItem
                    key={i}
                    data={data}
                    addZone={addZone}
                    setInputValue={setInputValue}
                />
            );
        });
    }

    return <>{list}</>;
}

export default SuggestionList;
