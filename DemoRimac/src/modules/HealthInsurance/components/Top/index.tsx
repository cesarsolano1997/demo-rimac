import { View, Text, StyleSheet, Image } from 'react-native'
import React, { FC } from 'react'
import images from '../../../../assets/images'
import Tag from '../../../../components/atoms/Tag'


const Top : FC = () =>
{
    return (
        <View style={styles.container}>
            <View style={styles.sectionLeft}>
                <Tag type='promo'>
                    <Text style={styles.tagText}>Seguro Salud Flexible</Text>
                </Tag>
                <Text style={styles.title}>Creado para ti y tu familia</Text>
            </View>
            <Image
                source={images.bannerHealthInsurance}
                style={styles.imageBanner}
                resizeMode='contain'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    tagText: {
        fontSize: 12,
        fontWeight: '700',
        lineHeight: 16
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
        
    },
    sectionLeft: {
        width: '60%',
    },
    sectionRight: {
        width: '30%'
    },
    imageBanner: {
        width: 136,
        height: 160,
        borderRadius: 20
    },
    title: {
        fontSize: 28,
        lineHeight: 36,
        fontWeight: '700',
        width: '80%',
        marginTop: 15
    }
})

export default Top