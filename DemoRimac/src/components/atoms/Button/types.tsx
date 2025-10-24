import { ViewStyle } from "react-native";
import { colors } from "../../../tools/config";

interface Styles {
    default: ViewStyle;
    submit: ViewStyle;
    submitRed: ViewStyle
}

const styleDefault : ViewStyle = {
    flexDirection: "row",
    justifyContent: 'center',
    alignContent: "center",
    alignItems: "center"
}

export const stylesButton: Styles = {
    default : {
         borderRadius: 4,
         ...styleDefault
    },
    submit : {
        ...styleDefault,
        borderRadius: 40,
        backgroundColor: colors.gray100,
        height: 56
    },
    submitRed : {
        ...styleDefault,
        borderRadius: 40,
        backgroundColor: '#FF1C44',
        height: 56
    }
}

export const stylesButtonDisabled: Styles = {
    default : {
         borderRadius: 4,
         ...styleDefault
    },
    submit : {
        ...styleDefault,
        borderRadius: 40,
        backgroundColor: 'rgb(3 ,5, 15,0.5)',
        height: 56
    },
    submitRed: {
         ...styleDefault,
        borderRadius: 40,
        backgroundColor: '#FF1C44',
        height: 56
    }
}