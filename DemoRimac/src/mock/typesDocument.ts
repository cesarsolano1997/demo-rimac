import { KeyboardTypeOptions } from "react-native"

interface ITypeDocument {
    label: string
    value: string
    keyboardType: KeyboardTypeOptions
}

const typesDocuments : ITypeDocument[]= [{
    label: "DNI",
    value: "DNI",
    keyboardType: 'numeric'
},{
    label: "C.E.",
    value: "CE",
    keyboardType: 'default'

}]


export default typesDocuments