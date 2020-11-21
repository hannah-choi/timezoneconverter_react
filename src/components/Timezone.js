import React from 'react'

function Timezone({zoneName, offset}){

    console.log(zoneName, offset)

    const getCity = () => {
        return `${this.currentTimezone}`.split("/").pop().replace('_',' ')
    }

    const getNow = () => {
        // return moment.tz(`${this.currentTimezone}`).format('HH:mm')
    }


    const getToday = () => {
        // return moment.tz(`${this.currentTimezone}`).format('ddd, DD MMM')
    }

    const getCountry = () => {
        // let countryName = moment.tz.zone(`${this.currentTimezone}`).countries()
        // if(countryName.length > 1){ return countryName[1];}
        // return countryName;
    }

    const getAbbr = () => {
        // return moment.tz(`${this.currentTimezone}`).format("z")
    }

    const getOffset = () => {
        // return moment.tz(`${this.currentTimezone}`).format("Z").split(':').shift()
    }

    const remove = () => {
        // this.div.remove()
    }
 
    const timeUpdate = (time) => {
        // this.time = time
        // this.div.querySelector('.time').innerHTML = time
    }



    return (

        <div className = "timezoneList">
            <div class="timezoneComp" >
                {/* <div class="home">
                ${this.offset != 0 ? this.offset:'<img src="./../frontEnd/images/placeholder.svg">'}
                <span class="makeHome">${this.offset == 0 ? '':`<img class = "makeHome" data-city = ${zoneName} src="./../frontEnd/images/home.svg">`}</span>
                </div>
                <div class="timezone">
                    <div class="timezone1">
                        <span class="cityName homeCity">${getCity()}</span>
                        <span class="time homeTime">${time === null ? this.getNow():this.time}</span>
                    </div>
                    <div class="timezone2">
                        <span class="countryName homeCode">${getCountry()}</span>
                        <span class="abbrZone">${getAbbr()}</span>
                        <span class="date homeDate">${getToday()}</span>
                    </div>
                </div>
                <div class="modify">
                        <img class ="remove" data-city = ${this.currentTimezone} src="images/cancel.svg" width="10px">
                </div> */}
            </div>
        </div>

    )

}

export default Timezone