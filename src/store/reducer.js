import { uniqueId } from "lodash";

const initialState = {
    counter: 1,
    resultList: [{ id: 1, result: 15 }, { id: 2, result: 16 }]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                counter: state.counter + 1
            };
        case "DECREASE":
            return {
                ...state,
                counter: state.counter - 1
            };
        case "ADD":
            return {
                ...state,
                counter: state.counter + action.value
            };
        case "SUB":
            return {
                ...state,
                counter: state.counter - action.value
            };
        case "STORE_RESULT":
            return {
                ...state,
                resultList: [...state.resultList, { id: uniqueId(), result: action.counter }]
            };
        case "DELETE_RESULT":
            return {
                ...state,
                resultList: state.resultList.filter(rs=>Number(rs.id) !== Number(action.id))
            };
        default:
            return state;
    }
}

export default reducer;