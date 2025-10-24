import { axiosConfig } from "../../tools/axiosConfig";
import { IGetPlans } from "./models";


export const GetPlans = async () => {
    
    try {

        const resp = await axiosConfig.get<IGetPlans>("plans.json");

        return resp.data;
    } catch (error) {
        throw new Error();
    }
}

export default { GetPlans}