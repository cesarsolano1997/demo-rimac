import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import images from '../../../assets/images'
import { colors } from '../../../tools/config'

const CheckBox = ({ isChecked, onToggle }: { isChecked: boolean, onToggle: () => void }) => {
  return (
    <TouchableOpacity onPress={onToggle} style={styles.checkboxContainer} testID='CustomCheckBoxId'>
      <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
        {isChecked && <Image source={images.checkWhite} style={{ width: 9, height: 9}} />}
      </View>
    </TouchableOpacity>
  )
}

export default CheckBox

const styles = StyleSheet.create({
  checkboxContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#A0A0A0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkboxChecked: {
    backgroundColor: colors.gray100,
    borderColor: colors.gray100
  }
})
