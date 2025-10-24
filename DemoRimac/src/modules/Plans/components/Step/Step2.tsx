import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import Line from '../../../../components/atoms/Line'
import { colors } from '../../../../tools/config'
import usePlanContext from '../../context/Plans.contex'



const windowWidth = Dimensions.get("screen").width
const Step2 = () =>
{
  const { planSelected, user } = usePlanContext()

  return (
    <View style={{ width: windowWidth }}>
      <Text style={styles.title}>Resumen del seguro</Text>
      <View style={styles.card} >
        <View >
          <Text style={{ fontWeight: '600'}}>PRECIOS CALCULADOS PARA:</Text>
          <Text style={{ fontSize: 18, fontWeight: '600', marginVertical: 5}}>{`${user?.name} ${user?.lastName}`}</Text>
        </View>
        <Line color='#ccc' />
        <View style={styles.section}>
          <Text style={styles.label}>Responsable de pago</Text>
          <Text>DNI: 11111111</Text>
          <Text>Celular: 96238182</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Plan elegido</Text>
          <Text>{planSelected?.name}</Text>
          <Text>Costo del plan: ${planSelected?.price} al mes</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center'
  },
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 24,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 25,
    marginHorizontal: 1,
    width: '92%',
    marginTop: 40
  },
  section: {
    gap: 4,
    marginBottom: 10
  },
  label: {
    color: colors.neutralsN700,
    fontSize: 14,
    fontWeight: '700'
  }
})

export default Step2