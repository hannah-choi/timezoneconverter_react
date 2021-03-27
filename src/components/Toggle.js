import React from "react";
import { ReactComponent as Sun } from "./svg/sun.svg";
import { ReactComponent as Moon } from "./svg/moon.svg";

const Toggle = ({ theme, toggleTheme }) => {
    const isLight = theme === "dark";
    return (
        <div className="toggleDiv">
            <Sun className="icon" style={{ width: `20px`, height: `20px` }} />
            <input
                className="switch-checkbox"
                id={`switch-new`}
                type="checkbox"
                onChange={toggleTheme}
            />
            <label className="switch-label" htmlFor={`switch-new`}>
                <span className={`switch-button`} />
            </label>
            <Moon className="icon" style={{ width: `15px`, height: `15px` }} />
        </div>
    );
};

export default Toggle;
