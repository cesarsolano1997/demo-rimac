import {  IListPlan } from "../../../services/Plans/models";
import { IGetUser } from "../../../services/Users/model";

export interface IListPlanContext extends IListPlan {
    selected: boolean
}


export interface IStateReducer {
    plans: IListPlanContext[]
    planSelected: IListPlanContext |  null
    user: IGetUser | null
}