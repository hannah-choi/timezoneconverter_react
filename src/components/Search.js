import React, { useState } from 'react';

function Search(){

    const timezoneDb = Object.keys(moment.tz._zones).map(data=> data.replace('_','/')).map(data=> data.replace('_',' '))
    console.log(timezoneDb)

    const [inputValue, setInputValue] = useState("");

    const inputChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <div className="search">
           <input type="text" name="searchInput" className="searchInput" value = {inputValue} onChange = {inputChange} />
           <input type="submit" name="submit" value="search" />
           <ul className = "suggestionList">
           </ul>
        </div>
    )

}

export default Search
