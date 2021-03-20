import { createStore } from "redux";
import moment from "moment-timezone";
import zones from "../components/zones";
import { createAction } from "redux-actions";

const ADD_ZONE = "ADD_ZONE";
const DELETE_ZONE = "DELETE_ZONE";
const CHANGE_DEFAULT_ZONE = "CHANGE_DEFAULT_ZONE";

export const addZone = createAction(ADD_ZONE);
export const deleteZone = createAction(DELETE_ZONE);
export const changeDefaultZone = createAction(CHANGE_DEFAULT_ZONE);

const initState = {
    zoneName: [moment.tz.guess()],
    defaultZone: moment.tz.guess(),
    defaultOffset: moment.tz(moment.tz.guess()).utcOffset() / 60,
};

console.log(initState);

export default (state = initState, action) => {
    switch (action.type) {
        case ADD_ZONE:
            // let cityName = action.payload.replace(" ", "_");
            // cityName
            //     .split("/")
            //     .map(
            //         data => data[0].toUpperCase() + data.substr(1).toLowerCase()
            //     )
            //     .join("/");
            console.log(action.payload);
            return {
                ...state,
                zoneName: [...state.zoneName, action.payload],
            };
        case DELETE_ZONE:
            let newArray = Array.from(state.zoneName);
            newArray.splice(action.payload, 1);
            return {
                ...state,
                zoneName: newArray,
            };
        case CHANGE_DEFAULT_ZONE:
            return {
                ...state,
                defaultZone: action.payload,
                defaultOffset: moment.tz(action.payload).utcOffset() / 60,
            };
        default:
            return state;
    }
};
