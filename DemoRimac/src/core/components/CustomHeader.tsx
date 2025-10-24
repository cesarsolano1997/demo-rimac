import { View, Text, Image, StyleSheet, Platform } from 'react-native'
import React, { FC } from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import images from '../../assets/images';
import config from '../../tools/config';

const CustomHeader: FC<NativeStackHeaderProps> = ({ }) =>
{


    
    return (
        <View style={styles.container}>
            <Image
                source={images.logo}
                style={styles.imageLogo}
                resizeMode='contain'
            />
            <View style={styles.containerContact}>
                <Image
                    source={images.cellPhone}
                    style={styles.imageCellPhone}
                    resizeMode='contain'
                />
                <Text style={styles.containerContactText}>(01) 411 6001</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? 0 : 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: config.stylesGlobal.paddingHorizontal,
        height: 100,
        backgroundColor: '#FAFBFF'
    },
    imageLogo: {
        width: 65,
        height: 32,
    },
    imageCellPhone: {
        width: 20,
        height: 20
    },
    containerContact: {
        flexDirection: "row",
        gap: 1,
        alignContent: "center",
        alignItems: "center"
    },
    containerContactText: {
        fontWeight : "bold"
    }
})

export default CustomHeader