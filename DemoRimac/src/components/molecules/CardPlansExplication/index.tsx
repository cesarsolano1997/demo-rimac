import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { FC } from 'react'
import Line from '../../atoms/Line'
import { colors } from '../../../tools/config'
import CustomButton from '../../atoms/Button'

type Props = {
    title: string
    amountPlan: number
    descriptions: string[]
    onPress: () => void
}

const CardPlansExplication: FC<Props> = ({ title, amountPlan, descriptions,onPress }) =>
{
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View>
                <Text style={styles.textLabelAmount}>COSTO DEL PLAN</Text>
                <Text style={styles.textAmount}>${amountPlan} al mes</Text>
            </View>
            <Line color={'#ccc'} />
            <View style={{ marginBottom: 40, gap: 20}}>
                {
                    descriptions.map((d, index) => (
                        <View key={`key-${index}`} style={{ flexDirection: 'row', gap: 5 }}>
                            <View style={styles.circle} />
                            <View>

                                <Text >{d}</Text>
                            </View>
                        </View>
                    ))
                }
            </View>
            <CustomButton onPress={onPress} type='submitRed'>
                <Text style={{ fontSize: 16, color: 'white' }}>Seleccionar Plan</Text>
            </CustomButton>
        </View>
    )
}
const dimensionWidth = Dimensions.get('screen')
const styles = StyleSheet.create({
    container: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 24,
        width: dimensionWidth.width / 1.5,
        height: 400,
        marginRight: 50,
        marginBottom: 30,
        backgroundColor: 'white',
        paddingHorizontal: 25,
        paddingVertical: 10
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 30,
        textAlign: 'center'
    },
    textLabelAmount: {
        color: colors.neutralsN600,
        fontWeight: '600',
        marginBottom: 5
    },
    textAmount: {
        color: colors.neutralsN700,
        fontWeight: '600'
    },
    circle: {
        width: 7,
        height: 7,
        borderRadius: 50,
        backgroundColor: 'black',
        marginTop: 5
    }
})

export default CardPlansExplication