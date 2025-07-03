import { actionSheetDefaultProps } from "@progress/kendo-react-layout";
import { createContext, useContext, useEffect, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
    user:null,
    isConnected:false
};

const actionTypes = {
    LOGIN : 'LOGIN',
    LOGOUT : 'LOGOUT'
}

function authReducer(state, action){
    switch(action.type){
        case actionTypes.LOGIN:
            sessionStorage.setItem('USER', JSON.stringify(action.payload));
            return {user: action.payload, isConnected:true};
        case actionTypes.LOGOUT:
            sessionStorage.removeItem('USER');
            return {user: null, isConnected:false};
        default:
            return state;
    }
}


export function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = (user) => dispatch({type: actionTypes.LOGIN, payload: user});

    const logout = () => dispatch({type: actionTypes.LOGOUT});

    useEffect(() => {
        const user = sessionStorage.getItem('USER');
        if(user){
            dispatch({type: actionTypes.LOGIN, payload: JSON.parse(user)});
        }
    }, []);

    return (
    <AuthContext.Provider value={{user:state.user, isConnected:state.isConnected, login, logout}}>
        { children }
    </AuthContext.Provider>)
}

export function useAuth(){
    return useContext(AuthContext);
}

