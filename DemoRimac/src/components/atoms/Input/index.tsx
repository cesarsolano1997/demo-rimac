import { View, Text, TextInput, TextInputProps, StyleSheet , ViewStyle} from 'react-native'
import React, { FC } from 'react'
import { colors } from '../../../tools/config'

interface Props extends TextInputProps
{
    label: string
    containerStyle?: ViewStyle
}

const Input: FC<Props> = (props) =>
{
    return (
        <View style={props.containerStyle ?? styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                {...props}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        borderColor: colors.gray60,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: 56
    },
    label: {
        color: colors.gray60
    }
})

export default Input