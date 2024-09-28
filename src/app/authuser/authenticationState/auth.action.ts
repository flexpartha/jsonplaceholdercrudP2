import { createAction, props } from "@ngrx/store";
import { Authuser } from "../../model/auth.interface";

export const LOGIN_ACTION_START = '[Auth page] Login start';
export const SIGNUP_START = '[auth page], SignUp start';

export const loginStart = createAction(LOGIN_ACTION_START,props<{username:any,password:any}>());
export const signUpStart = createAction(SIGNUP_START,props<{authuser:Authuser}>());