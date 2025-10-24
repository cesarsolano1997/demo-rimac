import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
    HealthInsuranceScreen: undefined;
    PlansScreen: undefined;
};


export type HealthInsuranceScreenProps = NativeStackScreenProps<RootStackParamList, 'HealthInsuranceScreen'>;