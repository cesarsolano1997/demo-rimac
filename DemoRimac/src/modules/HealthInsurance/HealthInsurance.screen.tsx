import React, { FC } from 'react'
import { HealthInsuranceScreenProps } from '../../core/navigation/types'
import Top from './components/Top'
import Line from '../../components/atoms/Line'
import Form from './components/Form'
import Template from '../../components/organisms/Template'

type Props = {
  navigation: HealthInsuranceScreenProps
}

const HealthInsurance: FC<Props> = ({ navigation }) =>
{
  return (
    <Template >
      <>
        <Top />
        <Line color='#ccc' />
        <Form />
      </>
    </Template>
  )
}



export default HealthInsurance