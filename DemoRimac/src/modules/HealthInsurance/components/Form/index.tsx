import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, } from 'react-native'
import React, { useMemo, useState } from 'react'
import { colors } from '../../../../tools/config'
import Input from '../../../../components/atoms/Input'
import typesDocuments from '../../../../mock/typesDocument'
import SelectInput from '../../../../components/molecules/SelectInput'
import CheckBox from '../../../../components/atoms/CheckBox'
import Link from '../../../../components/atoms/Link'
import CustomButton from '../../../../components/atoms/Button'
import useLoading from '../../../../tools/hooks/useLoading'

type Props = {}

interface IForm
{
  typeDocument: null | string,
  documentNumber: null | string,
  cellPhone: null | string
  acceptPrivate: boolean
  acceptCommercial: boolean
}

const Form = (props: Props) =>
{

  const { onShow, onHide } = useLoading()
  const [form, setForm] = useState<IForm>({
    typeDocument: null,
    documentNumber: null,
    cellPhone: null,
    acceptPrivate: false,
    acceptCommercial: false
  })

  const disabledButton = useMemo(() =>
  {
    return form.typeDocument == null || form.documentNumber == null || form.cellPhone == null || form.acceptPrivate === false
  }, [form])

  const keyboardTypeOptions = useMemo(() =>
  {
    return form.typeDocument ? typesDocuments.find(x => x.value === form.typeDocument)?.keyboardType : undefined
  }, [form.typeDocument])

  const onSendInformation = () => {
    onShow()
    setTimeout(() => {
      onHide()
    }, 3000)
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.title}>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría, 100% online.</Text>
        <View style={styles.containerForm}>
          <SelectInput
            dataDropwDown={typesDocuments}
            labelInput='Nro. de documento'
            valueInput={form.documentNumber}
            valueDropDown={form.typeDocument}
            keyboardType={keyboardTypeOptions}
            onChangeDropDown={(value) =>
            {
              setForm({
                ...form,
                typeDocument: value
              })
            }}
            onChangeInput={(value) =>
            {
              setForm({
                ...form,
                documentNumber: value
              })
            }}
          />
          <Input label='Celular' keyboardType='numeric' onChangeText={value =>
          {
            setForm({
              ...form,
              cellPhone: value
            })
          }} />
          <View style={styles.sectionCheckbox}>
            <CheckBox
              isChecked={form.acceptPrivate}
              onToggle={() =>
              {
                setForm({
                  ...form,
                  acceptPrivate: !form.acceptPrivate
                })
              }}
            />
            <Text style={styles.textCheckbox}>Acepto la Política de Privacidad</Text>
          </View>
          <View style={styles.sectionCheckbox}>

            <CheckBox
              isChecked={form.acceptCommercial}
              onToggle={() =>
              {
                setForm({
                  ...form,
                  acceptCommercial: !form.acceptCommercial
                })
              }}
            />
            <Text style={styles.textCheckbox}>Acepto la Política Comunicaciones Comerciales</Text>
          </View>
          <Link text={'Aplican Términos y Condiciones.'} onPress={() => { }} />

          <View style={{
            marginTop: 20,
            marginBottom: 50
          }}>
            <CustomButton type='submit' onPress={onSendInformation} disabled={disabledButton}>
              <Text style={styles.textButton}>Cotiza aquí</Text>
            </CustomButton>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    color: colors.gray100,
  },
  containerForm: {
    flexDirection: "column",
    gap: 20,
    marginVertical: 30
  },
  sectionCheckbox: {
    flexDirection: "row",
    gap: 10
  },
  textCheckbox: {
    color: '#0A051E'
  },
  textButton: {
    color: 'white',
    fontSize: 18
  }
})

export default Form