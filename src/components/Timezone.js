import React from "react";
import moment from "moment-timezone";

function Timezone({ zoneName, offset, time }) {
    const getCity = () => {
        return zoneName.split("/").pop().replace("_", " ");
    };

    const getNow = () => {
        return moment.tz(zoneName).format("HH:mm");
    };

    const getToday = () => {
        return moment.tz(zoneName).format("ddd, DD MMM");
    };

    const getCountry = () => {
        let countryName = moment.tz.zone(zoneName).countries();
        if (countryName.length > 1) {
            return countryName[1];
        }
        return countryName;
    };

    const getAbbr = () => {
        return moment.tz(zoneName).format("z");
    };

    const getOffset = () => {
        return moment.tz(zoneName).format("Z").split(":").shift();
    };

    // const remove = () => {
    //     this.div.remove()
    // }

    // const timeUpdate = (time) => {
    //     time = time
    //     this.div.querySelector('.time').innerHTML = time
    // }

    return (
        <div className="timezoneList">
            <div className="timezoneComp">
                <div className="home">
                    {offset !== 0 ? (
                        offset
                    ) : (
                        <img src="images/placeholder.svg" />
                    )}
                    <span className="makeHome">
                        {offset == 0 ? (
                            ""
                        ) : (
                            <img
                                className="makeHome"
                                data-city={zoneName}
                                src="images/home.svg"
                            />
                        )}
                    </span>
                </div>
                <div className="timezone">
                    <div className="timezone1">
                        <span className="cityName homeCity">{getCity()}</span>
                        <span className="time homeTime">
                            {time === "" ? getNow() : time}
                        </span>
                    </div>
                    <div className="timezone2">
                        <span className="countryName homeCode">
                            {getCountry()}
                        </span>
                        <span className="abbrZone">{getAbbr()}</span>
                        <span className="date homeDate">{getToday()}</span>
                    </div>
                </div>
                <div className="modify">
                    <img
                        className="remove"
                        data-city={zoneName}
                        src="images/cancel.svg"
                        width="10px"
                    />
                </div>
            </div>
        </div>
    );
}

export default Timezone;
