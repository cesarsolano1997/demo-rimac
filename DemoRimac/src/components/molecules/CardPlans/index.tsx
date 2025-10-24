import { View, Text, StyleSheet, Image, ImageSourcePropType, TouchableOpacity, ViewStyle } from 'react-native'
import React, { FC } from 'react'
import { colors } from '../../../tools/config'
import images from '../../../assets/images'

type Props = {
    title: string
    description: string
    image: ImageSourcePropType
    selected: boolean
    onPress: () => void
}

const CardPlans: FC<Props> = ({ title, description, image, selected, onPress }) =>
{
    return (
        <TouchableOpacity style={[selected ? styles.containerSelected : styles.container]} onPress={onPress}>

            {
                selected ?
                    <View style={{
                        ...defaultStylesCircle,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: colors.ss300,
                    }}>

                        <Image source={images.checkWhite} style={styles.image} />
                    </View>
                    : <View style={styles.circle} />
            }

            <View style={styles.containerTitle}>
                <Image
                    source={image}
                    style={{
                        width: 32,
                        height: 32
                    }}
                />
                <Text style={styles.title}>{title}</Text>
            </View>
            <Text style={styles.subTitle}>{description}</Text>
        </TouchableOpacity>
    )
}

const defaultStylesContainer: ViewStyle = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 24,
    minHeight: 160,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    marginHorizontal: 4
}

const defaultStylesCircle: ViewStyle = {
    width: 24,
    height: 24,
    borderRadius: 50,
    alignSelf: 'flex-end'
}

const styles = StyleSheet.create({
    container: {
        ...defaultStylesContainer
    },
    containerSelected: {
        borderColor: colors.neutralsN700,
        borderWidth: 3,
        ...defaultStylesContainer
    },
    containerTitle: {
        flexDirection: 'row',
        gap: 10,
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: '700'
    },
    subTitle: {
        fontWeight: 400,
        lineHeight: 20,
        textAlign: 'justify'
    },
    circle: {
        ...defaultStylesCircle,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: colors.neutralsN500,
    },
    image: {
        width: 10,
        height: 10,
    }
})

export default CardPlans