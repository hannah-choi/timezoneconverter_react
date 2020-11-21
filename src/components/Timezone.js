import React from 'react'

function Timezone(){

    // const render = function(){
    //     return `
    //     <div class="timezoneComp" >
    //         <div class="home">
    //         ${this.offset != 0 ? this.offset:'<img src="./../frontEnd/images/placeholder.svg">'}
    //         <span class="makeHome">${this.offset == 0 ? '':`<img class = "makeHome" data-city = ${this.currentTimezone} src="./../frontEnd/images/home.svg">`}</span>
    //         </div>
    //         <div class="timezone">
    //             <div class="timezone1">
    //                 <span class="cityName homeCity">${getCity()}</span>
    //                 <span class="time homeTime">${time === null ? this.getNow():this.time}</span>
    //             </div>
    //             <div class="timezone2">
    //                 <span class="countryName homeCode">${getCountry()}</span>
    //                 <span class="abbrZone">${getAbbr()}</span>
    //                 <span class="date homeDate">${getToday()}</span>
    //             </div>
    //         </div>
    //         <div class="modify">
    //                 <img class ="remove" data-city = ${this.currentTimezone} src="images/cancel.svg" width="10px">
    //         </div>
    //     </div>
    //         `
    // }

    return (

        <div className = "timezoneList">
        </div>

    )

}

export default Timezone