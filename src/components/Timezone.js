import React from 'react'
import moment from 'moment-timezone';

function Timezone({zoneName, offset}){

    console.log(zoneName, offset)

    const getCity = () => {
        return {zoneName}.split("/").pop().replace('_',' ')
    }

    const getNow = () => {
        // return moment.tz(`${this.currentTimezone}`).format('HH:mm')
    }


    const getToday = () => {
        // return moment.tz(`${this.currentTimezone}`).format('ddd, DD MMM')
    }

    const getCountry = () => {
        let countryName = moment.tz.zone({zoneName}).countries()
        if(countryName.length > 1){ return countryName[1];}
        return countryName;
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
            <div className="timezoneComp" >
                <div className="home">
                {offset != 0 ? offset:'<img src="./../frontEnd/images/placeholder.svg" />'}
                <span className="makeHome">{offset == 0 ? '':<img className = "makeHome" data-city = {zoneName} src="./../frontEnd/images/home.svg" />}</span>
                </div>
                <div className="timezone">
                    <div className="timezone1">
                        <span className="cityName homeCity">{getCity()}</span>
                        {/* <span className="time homeTime">${time === null ? this.getNow():this.time}</span> */}
                    </div>
                    <div className="timezone2">
                        <span className="countryName homeCode">{getCountry()}</span>
                        <span className="abbrZone">{getAbbr()}</span>
                        <span className="date homeDate">{getToday()}</span>
                    </div>
                </div>
                <div className="modify">
                        <img className ="remove" data-city = {zoneName} src="images/cancel.svg" width="10px" />
                </div>
            </div>
        </div>

    )

}

export default Timezone