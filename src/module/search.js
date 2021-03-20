import { createAction } from "redux-actions";

const CHANGE_INPUT = "CHANGE_INPUT";

const initState = {
    input: "",
};

export const changeInput = createAction(CHANGE_INPUT);

export default (state = initState, action) => {
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.payload,
            };
        default:
            return state;
    }
};
