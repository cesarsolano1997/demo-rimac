import { View, StyleSheet } from 'react-native'
import React, { FC } from 'react'

interface Props {
  color: string
}

const Line :FC<Props>= ({ color }) => {
  return (
    <View style={[styles.lineaDivisoria, { backgroundColor: color}]} />
  )
}

const styles = StyleSheet.create({
  lineaDivisoria: {
    height: 1, 
    marginVertical: 10, 
  },
});

export default Line