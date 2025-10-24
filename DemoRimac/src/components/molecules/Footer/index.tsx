import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { colors } from '../../../tools/config'
import Line from '../../atoms/Line'
import images from '../../../assets/images'



const Footer = () =>
{

    const now = new Date()
    const year = now.getFullYear()
    return (
        <View style={styles.container}>
            <Image 
                source={images.logoWhite}
                style={{
                    width: 138,
                    height: 20,
                    alignSelf : "center",
                    marginBottom : 15
                }}
            />
            <Line color={colors.gray80} />
            <Text style={styles.text}>© {year} RIMAC Seguros y Reaseguros.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray100,
        width: '100%',
        height: 152,
        paddingHorizontal: 25,
        paddingVertical: 30,
        justifyContent: "center",
    },
    text: {
        color: 'white',
        fontWeight: '400',
        textAlign : "center",
        marginTop: 20
    }
})

export default Footer