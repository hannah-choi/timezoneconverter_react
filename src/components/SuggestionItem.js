import React, { useState } from 'react';
import moment from 'moment-timezone';

function SuggestionItem({data, addZone}){
    return (
        <li className= "suggestionItem" data-zone={data} onClick = {() => {
            addZone(data)
        }}>
        <span className="listTimezone">{data}</span></li>
    )
}

export default SuggestionItem
