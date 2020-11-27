import React, { useState } from "react";
import SuggestionItem from "./SuggestionItem";

function SuggestionList({ addZone, matchArray, value, setInputValue }) {
    let list = "";

    console.log(matchArray);

    if (matchArray && matchArray.length > 0) {
        list = matchArray.map((data, i) => {
            const regex = new RegExp(value, "gi");
            // let timezoneName = data.replace(
            //     regex,
            //     `<span className="highlight">${props.value}</span>`
            // );
            return (
                <SuggestionItem
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
