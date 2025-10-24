import { axiosConfig } from "../../tools/axiosConfig";
import { IGetUser } from "./model";


export const GetUser = async () => {
    
    try {

        const resp = await axiosConfig.get<IGetUser>("user.json");

        return resp.data;
    } catch (error) {
        throw new Error();
    }
}

export default { GetUser}