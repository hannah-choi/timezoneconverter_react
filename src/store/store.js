import { createStore } from "redux";
import moment from "moment-timezone";
import { createAction } from "redux-actions";

const ADD_ZONE = "ADD_ZONE";
export const addZone = createAction(ADD_ZONE);

const DELETE_ZONE = "DELETE_ZONE";
export const deleteZone = createAction(DELETE_ZONE);

const initState = {
    zoneName: [moment.tz.guess()],
    input: "",
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_ZONE:
            return {
                zoneName: [...state.zoneName, action.payload],
                input: "",
            };
        case DELETE_ZONE:
            let newArray = Array.from(state.zoneName);
            newArray.splice(action.payload, 1);
            return {
                zoneName: newArray,
                input: "",
            };
        default:
            return state;
    }
};

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
