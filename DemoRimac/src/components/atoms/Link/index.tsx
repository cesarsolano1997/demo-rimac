import {  Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { colors } from '../../../tools/config'

type Props = {
    text: string
    onPress: () => void
}

const Link: FC<Props> = ({ text, onPress }) =>
{
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        color: colors.gray100,
        fontWeight: '600',
        textDecorationLine: "underline"
    }
})

export default Link