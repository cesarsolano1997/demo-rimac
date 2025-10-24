import { KeyboardTypeOptions, StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import Input from '../../atoms/Input'
import Select from '../../atoms/Select'
import { colors } from '../../../tools/config'

interface Props
{
  dataDropwDown: Array<{ label: string, value: string }>
  valueDropDown: string | null
  onChangeDropDown: (value: string | null) => void
  valueInput: string | null
  onChangeInput: (value: string ) => void
  labelInput: string
  keyboardType?: KeyboardTypeOptions
}

const SelectInput: FC<Props> = ({
  dataDropwDown,
  onChangeDropDown,
  onChangeInput,
  valueDropDown,
  valueInput,
  labelInput,
  keyboardType
}) =>
{
  return (
    <View style={styles.container}>
      <Select
        data={dataDropwDown}
        value={valueDropDown}
        style={styles.dropwDown}
        onChange={onChangeDropDown}
      />
      <Input label={labelInput} containerStyle={styles.input} onChangeText={onChangeInput} value={valueInput ?? undefined} keyboardType={keyboardType ?? 'default'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: '100%',
  },
  dropwDown : {
    width: '30%',
   borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  input: {
    width: '70%',
    borderColor: colors.gray60,
    borderWidth: 1,
    borderStyle: 'solid',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 56
  }
})

export default SelectInput