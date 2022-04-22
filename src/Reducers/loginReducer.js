import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGIN
} from "../Actions/actions";

const login_reducer = (state, action) => {
    if (action.type === LOGIN){
        return{...state, login_loading: true};

    }

    if(action.type === LOGIN_SUCCESS) {
        return{...state, login_loading:false,
        login_response: action.payload,}
        
    }

    if(action.type === LOGIN_ERROR) {
        return{
            ...state,
            login_loading:false,
            login_error: true,
        }
    }
    throw new Error(`No Matching ${action.type} -> Action Type`);
}

export default login_reducer;