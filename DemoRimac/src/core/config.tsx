import { NativeStackNavigationOptions } from "@react-navigation/native-stack"
import CustomHeader from "./components/CustomHeader"

const configScreen : NativeStackNavigationOptions = {
     header: props =>  <CustomHeader {...props}/>
}


export default configScreen