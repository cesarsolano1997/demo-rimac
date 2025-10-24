import { useEffect, useReducer } from "react";
import { initialData, plansReducer } from "./Plans.reducer";
import { PlansContext } from "./Plans.contex";
import services from '../../../services/Plans'
import servicesUsers from '../../../services/Users'
import { IListPlanContext } from "./interface";
import useLoading from "../../../tools/hooks/useLoading";

const PlansProvider: React.FC<{ children: React.ReactNode }> = ({ children }) =>
{

    const [state, dispatch] = useReducer(plansReducer, initialData);
    const { onShow, onHide } = useLoading()

    useEffect(() =>
    {
       
            (async () =>
            {
                try
                {
                     onShow()
                    const planes = await services.GetPlans()
                    dispatch({
                        type: "SET_PLANS",
                        payload: planes.list.map(x => ({ ...x, selected: false }))
                    })


                    const dataUser = await servicesUsers.GetUser()
                    dispatch({
                        type: "SET_USER",
                        payload: dataUser
                    })
                } catch (error)
                {

                } finally
                {
                    onHide()
                }
            })()

    }, [])

    const setPlanSelected = (plan: IListPlanContext) =>
    {
        dispatch({
            type: "SET_PLAN_SELECTED",
            payload: plan
        })
    }


    return <PlansContext.Provider
        value={{
            ...state,
            setPlanSelected
        }}
    >
        {children}
    </PlansContext.Provider>
}

export default PlansProvider