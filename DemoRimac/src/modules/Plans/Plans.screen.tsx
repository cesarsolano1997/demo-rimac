import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Template from '../../components/organisms/Template'
import withProgressBar from '../../tools/hoc/step/withProgressBar'
import Step from './components/Step/Step'
import PlansProvider from './context/Plans.provider'

type Props = {}




const StepWithProgress = withProgressBar(Step)
const Plans = (props: Props) =>
{
  return (
    <Template>
      <PlansProvider>

        <StepWithProgress numStep={2} />
      </PlansProvider>

    </Template>
  )
}



export default Plans