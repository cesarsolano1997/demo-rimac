import { IStateReducer } from "./interface";
import { PlansActions } from "./types";

export const initialData: IStateReducer = {
    plans: [],
    planSelected: null,
    user: null
};


export const plansReducer = (
    state: IStateReducer,
    action: PlansActions
): IStateReducer =>
{
    switch (action.type)
    {
        case "SET_PLANS":{
            return {
                ...state,
                plans: action.payload
            }
        }
        case "SET_PLAN_SELECTED":
            return {
                ...state,
                planSelected: action.payload
            }
        case "SET_USER":
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }

}