import React, { useState, type ComponentType } from 'react'
import ProgressBar from './component/ProgressBar'

interface Props {
  numStep: number
}

export interface withProgressBarComponentProp {
  step: number
  onNextStep: () => void
  onGoBack?: () => void
}

export interface withProgressBarTopComponentProp {
  onGoBack: () => boolean
}

export default function withProgressBar<P> (Component: ComponentType<withProgressBarComponentProp>) {
  return (hocProps: P & Props) => {
    const [step, setStep] = useState<number>(1)

    const onGoBack: () => boolean = () => {
      if (step > 1) {
        setStep(step - 1)
        return true
      }

      return false
    }

    const onNextStep: () => void = () => {
      if (step < hocProps.numStep) {
        setStep(step + 1)
      }
    }

    return (
            <>
              
                <ProgressBar
                    numSteps={hocProps.numStep}
                    currentStep={step}
                    onGoBack={onGoBack}
                />
                <Component
                    step={step}
                    onNextStep={onNextStep}
                    onGoBack={onGoBack}
                />
            </>
    )
  }
}
