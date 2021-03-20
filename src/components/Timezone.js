import React from "react";
import moment from "moment-timezone";
import zones from "./zones";
import * as store from "../module/city";
import { connect } from "react-redux";

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
        //return zoneName.split("/").pop().replace("_", " ");
    };

    const getNow = () => {
        return moment.tz(zoneName).format("HH:mm");
    };

    const getToday = () => {
        return moment.tz(zoneName).format("ddd, DD MMM");
    };

    const getCountry = () => {
        return zones.find(zone => zone.zone === zoneName).country;
        //return moment.tz(zoneName).format("z");
    };

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
