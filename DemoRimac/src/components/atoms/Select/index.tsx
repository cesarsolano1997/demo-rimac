import { StyleSheet, StyleProp, ViewStyle } from 'react-native'
import React, { FC } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { colors } from '../../../tools/config';


type Props =   {
    data: Item[]
    value: string | null
    placeHolder?: string
    onChange: (value: string ) => void
     style?: StyleProp<ViewStyle>
}

interface Item { label: string, value: string }

const Select: FC<Props> = ({ data, value,placeHolder,style, onChange }) =>
{
  
    return (
        <Dropdown
            labelField="label"
            valueField="value"
            data={data}
            placeholder={placeHolder ?? 'Seleccionar'}
            onChange={(item: Item) => onChange(item.value)}
            value={value}
            style={{...styles.dropDown, ...style}}
        />

    )
}

const styles = StyleSheet.create({
    dropDown: {
        borderColor: colors.gray60,
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: 56,
    }
})

export default Select