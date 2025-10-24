import { TouchableOpacity, View, ViewProps } from 'react-native'
import React, { FC, ReactElement } from 'react'
import { stylesButton, stylesButtonDisabled } from './types'

type Props = {
    children: ReactElement
    onPress: () => void
    stylesContainer?: ViewProps
    type?: 'default' | 'submit' | 'submitRed'
    disabled?: boolean
}

const CustomButton: FC<Props> = ({ children, type, stylesContainer,disabled,onPress }) =>
{

    const styleContainer = stylesContainer ?? (stylesButton[type ?? 'default'])
    const styleContainerDisabled = stylesContainer ?? (stylesButtonDisabled[type ?? 'default'])

    return (
        <TouchableOpacity onPress={onPress} style={disabled ? styleContainerDisabled : styleContainer} disabled={disabled}>
            {children}
        </TouchableOpacity>
    )
}



export default CustomButton