import React from "react";
import moment from "moment-timezone";
import zones from "./zones";

function Timezone({
    zoneName,
    offset,
    time,
    deleteZone,
    index,
    changeDefaultZone,
}) {
    const getCity = () => {
        return zones.find(zone => zone.zone === zoneName).city;
    };

    const getNow = () => {
        return moment.tz(zoneName).format("HH:mm");
    };

    const getToday = () => {
        return moment.tz(zoneName).format("ddd, DD MMM");
    };

    const getCountry = () => {
        const country = zones.find(zone => zone.zone === zoneName).country;
        const countryName =
            country.length <= 22 ? country : country.slice(0, 23) + "...";
        return countryName;
    };

    return (
        <div className="timezoneList">
            <div className="timezoneComp">
                <div className="home">
                    {offset == 0 ? (
                        <img src="images/placeholder.svg" />
                    ) : offset > 1 ? (
                        "+" + offset
                    ) : (
                        offset
                    )}
                    <span className="makeHome">
                        {offset == 0 ? (
                            ""
                        ) : (
                            <img
                                alt="homeicon"
                                className="makeHome"
                                src="images/home.svg"
                                onClick={() => changeDefaultZone(zoneName)}
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
                        <span className="date homeDate">{getToday()}</span>
                    </div>
                </div>
                <div className="modify">
                    <img
                        alt="remove"
                        className="remove"
                        data-city={zoneName}
                        src="images/cancel.svg"
                        width="10px"
                        onClick={() => {
                            deleteZone(index);
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Timezone;
