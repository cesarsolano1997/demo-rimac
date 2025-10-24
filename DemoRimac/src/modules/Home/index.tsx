import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const HomeScreen = (props: Props) => {

    const navigation = useNavigation()
  return (
    <View style={{flex: 1 , justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate('HealthInsuranceScreen')
      }}>
        <Text style={styles.text}>Ir a formulario</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate('PlansScreen')
      }}>
        <Text style={styles.text}>Ir a planes</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 20,
        height: 50,
        width: '70%',
        backgroundColor: '#cecece',
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: '600'
    }
})

export default HomeScreen