import React, { useState } from 'react';
import moment from 'moment-timezone';

function SuggestionList({matchArray, value}){

    let list = ''

    console.log(matchArray)
    console.log(value)

    if(matchArray && matchArray.length > 0){
        list = matchArray.map((data,i) => {
            const regex = new RegExp(value, 'gi')
            let timezoneName = data.replace(regex, <span className="highlight">{value}</span>)
            return 
                (<li className= "suggestionItem" data-zone="{data}" key = "{i}">
                <span className="listTimezone">{timezoneName}</span></li>)
            })
        }
    
    

    return (
        <>
        {list}
        </>

    )

}

export default SuggestionList