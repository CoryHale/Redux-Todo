import { SUBMIT_TODO } from '../actions/index';

const initialState = {
    todos: [{
        value: 'Walk the dog.',
        completed: false
    }]
};

const reducer = (state = initialState, action) => {
    console.log("reducers.js: reducer: action: ", action);
    switch (action.type) {
        case SUBMIT_TODO: {
            return {
                ...state, [action.payload]
            };
        }
        default:
            return state;
    }
};

export default reducer;