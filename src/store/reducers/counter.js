import { ADD, DECREASE, INCREMENT, SUB } from "../action";

const initialState = {
    counter: 1,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        case ADD:
            return {
                ...state,
                counter: state.counter + action.value
            };
        case SUB:
            return {
                ...state,
                counter: state.counter - action.value
            };
        default:
            return state;
    }
}

export default reducer;