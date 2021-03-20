import React from "react";
import SuggestionItem from "./SuggestionItem";

function SuggestionList({ matchArray, value, addZone }) {
    let list = "";

    if (matchArray && matchArray.length > 0) {
        list = matchArray.map((data, i) => {
            return (
                <SuggestionItem
                    data={data}
                    key={i}
                    value={value}
                    addZone={addZone}
                />
            );
        });
    }

    return <ul className="suggestionList">{list}</ul>;
}

export default SuggestionList;
