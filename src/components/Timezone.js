import React, { useEffect } from "react";
import moment from "moment-timezone";
import zones from "./zones";
import ReactTooltip from "react-tooltip";
import { ReactComponent as DeleteIcon } from "./svg/cancel.svg";
import { ReactComponent as MakeHomeIcon } from "./svg/home.svg";
import { ReactComponent as HomeIcon } from "./svg/placeholder.svg";

function Timezone({
    zoneName,
    offset,
    time,
    deleteZone,
    index,
    changeDefaultZone,
}) {
    useEffect(() => {
        ReactTooltip.rebuild();
    }, []);

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
                    {+offset === 0 ? (
                        <>
                            <HomeIcon
                                alt="hometime zone"
                                className="homeicon icon"
                                style={{ width: `14px` }}
                                data-tip
                                data-for="place"
                            />
                            <ReactTooltip
                                id="place"
                                place="top"
                                effect="solid"
                                backgroundColor="#743CDE"
                            >
                                Home
                            </ReactTooltip>
                        </>
                    ) : +offset >= 1 ? (
                        "+" + offset
                    ) : (
                        offset
                    )}
                    <span className="makeHome">
                        {+offset === 0 ? (
                            ""
                        ) : (
                            <div>
                                <MakeHomeIcon
                                    data-tip
                                    data-for="house"
                                    className="makeHome icon"
                                    style={{ width: `13px`, height: `14px` }}
                                    onClick={() => changeDefaultZone(zoneName)}
                                />
                                <ReactTooltip
                                    id="house"
                                    place="top"
                                    effect="solid"
                                    backgroundColor="#743CDE"
                                >
                                    Change Default timezone
                                </ReactTooltip>
                            </div>
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
                    <DeleteIcon
                        className="remove icon"
                        data-tip
                        data-for="remove"
                        data-city={zoneName}
                        style={{ width: `10px`, height: `10px` }}
                        onClick={() => {
                            deleteZone(index);
                        }}
                    />
                    <ReactTooltip
                        id="remove"
                        place="top"
                        effect="solid"
                        backgroundColor="#743CDE"
                    >
                        Delete
                    </ReactTooltip>
                </div>
            </div>
        </div>
    );
}

export default Timezone;
