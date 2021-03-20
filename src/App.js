import React from "react";
import Search from "./components/Search";
import TimezoneGroup from "./components/TimezoneGroup";
import { connect } from "react-redux";

function App({ zoneName }) {
    const zoneList = () => {
        return zoneName.map((data, i) => (
            <TimezoneGroup zoneName={data} key={i} index={i} />
        ));
    };

    return (
        <div className="wrapper">
            <h2>TIMEZONE CONVERTER</h2>
            <Search />
            {zoneList()}
        </div>
    );
}

export default connect(state => {
    return { zoneName: state.city.zoneName };
})(App);
