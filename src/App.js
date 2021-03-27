import React, { useState } from "react";
import Search from "./components/Search";
import TimezoneGroup from "./components/TimezoneGroup";
import { connect } from "react-redux";
import Toggle from "./components/Toggle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Theme";
import { GlobalStyles } from "./components/Global";

function App({ zoneName }) {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    const zoneList = () => {
        return zoneName.map((data, i) => (
            <TimezoneGroup zoneName={data} key={i} index={i} />
        ));
    };

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Toggle theme={theme} toggleTheme={toggleTheme} />
            <div className="wrapper">
                <h1>Timezone Converter</h1>
                <p className="sub">Search to add & Drag time to convert</p>
                <Search />
                {zoneList()}
            </div>
        </ThemeProvider>
    );
}

export default connect(state => {
    return { zoneName: state.city.zoneName };
})(App);
