import { IGetUser } from "../../../services/Users/model"
import { IListPlanContext } from "./interface"

type T_SET_PLANS = {
    type: "SET_PLANS",
    payload: IListPlanContext[]
}

type T_SET_PLAN_SELECTED = {
    type: "SET_PLAN_SELECTED",
    payload: IListPlanContext
}

type T_SET_USER = {
    type: "SET_USER",
    payload: IGetUser
}

export type PlansActions = T_SET_PLANS | T_SET_PLAN_SELECTED | T_SET_USER