import { createFeatureSelector } from "@ngrx/store";
import { AppState } from "../../store/app.state";

export const AUTH_STATE_NAME = 'auth';

const getAuthState = createFeatureSelector<AppState>(AUTH_STATE_NAME);

