import React, { useState } from 'react';
import moment from 'moment-timezone';
import SuggestionList from './SuggestionList'

function Search(props){

    const timezoneDb = Object.keys(moment.tz._zones).map(data=> data.replace('_','/')).map(data=> data.replace('_',' '))
    
    const [inputValue, setInputValue] = useState("");

    const inputChange = (e) => {
        setInputValue(e.target.value)
        if(e.target.value.length > 0){
            findMatches(e.target.value)
        }
    }

    let matchArray = []

    const findMatches = (typedWord) => {
        const regex = new RegExp(typedWord, 'gi')
        matchArray = timezoneDb.filter(timezone => timezone.match(regex)).slice(0,10)
        //console.log(matchArray)
    }
    
    return (
        <div className="search">
           <input type="text" name="searchInput" className="searchInput" value = {inputValue} onChange = {inputChange} />
           <input type="submit" name="submit" value="search" />
           <ul className = "suggestionList">
               <SuggestionList matchArray = {matchArray} value = {inputChange}/>
           </ul>
        </div>
    )

}

export default Search
