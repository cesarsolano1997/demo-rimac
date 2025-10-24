import { createContext, useContext } from "react";
import { IListPlanContext, IStateReducer } from "./interface"



interface GeneralDataContextType extends IStateReducer
{
    setPlanSelected: (plan: IListPlanContext) => void
}


export const PlansContext = createContext<GeneralDataContextType>({
    plans: [],
    planSelected: null,
    setPlanSelected: () => {},
    user: null
});




const usePlanContext = () => useContext(PlansContext);
export default usePlanContext;
