import React, { useState } from 'react';
import moment from 'moment-timezone';
import SuggestionItem from './SuggestionItem';

function SuggestionList({matchArray, value, addZone}){

    let list = ''

    // const selectItem = ({target}) => {
    //     target.value
    // }


    if(matchArray && matchArray.length > 0){
        list = matchArray.map((data,i) => {
            const regex = new RegExp(value, 'gi')
            //let timezoneName = data.replace(regex, <span className="highlight">{value}</span>)
            return <SuggestionItem data = {data} key = {i} addZone = {addZone}/>
    
        })
    }

    return (
        <ul className = "suggestionList">
        {list}
        </ul>
    )

}

export default SuggestionList