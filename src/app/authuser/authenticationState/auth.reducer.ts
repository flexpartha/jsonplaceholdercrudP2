import { createReducer, on } from "@ngrx/store";
import { initialState } from "./auth.state";
import { loginStart, signUpStart } from "./auth.action";

const _authUserReducer = createReducer(initialState,
    on(loginStart,(state:any, action:any)=>{
        return {
            ...state,
            authUserList: action.authuser
        }
    }),on(signUpStart, (state:any, action:any)=>{
        return {
            ...state,
            authUserList: action.authuser
        }
    })
    )

export function authUserReducer(state:any,action:any){
    return _authUserReducer(state, action);
}