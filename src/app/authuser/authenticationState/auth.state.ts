import { Authuser } from "../../model/auth.interface";

export interface authUserState{
    authUserList:Authuser[]
}

export const initialState: authUserState = {
    authUserList: [
        {
            id: 1,
            username: "Bret",
            password:"test123"
        }
    ]
}