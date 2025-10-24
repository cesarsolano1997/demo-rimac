import { View, ViewStyle } from 'react-native'
import React, { FC, ReactElement } from 'react'

type Props = {
    children: ReactElement
    type?: TagType
    stylesContainer?: ViewStyle
}

type TagType = 'default' | 'promo'

const Tag : FC<Props> = ({ children, type, stylesContainer }) => {


  const styleContainer = stylesContainer ?? (styles[type ?? 'default'])

  return (
    <View style={styleContainer}>
      {children}
    </View>
  )
}
interface Styles {
    default: ViewStyle;
    promo: ViewStyle;
}
const styles: Styles = {
    default : {
         borderRadius: 4
    },
    promo : {
        alignSelf: 'flex-start',
        width: "auto", 
        borderRadius: 4,
        backgroundColor: "#00F4E2",
        paddingHorizontal: 8,
        paddingVertical: 2 
    }
}

export default Tag