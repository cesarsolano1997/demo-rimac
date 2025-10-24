import React, { useRef, type FC, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { colors } from '../../../config'
import images from '../../../../assets/images'

interface Props {
  numSteps: number
  currentStep: number
  onGoBack: () => void
}

const HEIGHT = 6
const BORDER_RADIUS = 100

const ProgressBar: FC<Props> = ({
  numSteps,
  currentStep,
  onGoBack
}) => {
  const stepValue = useSharedValue(0)
  const heightProgressContainer = useRef<number>(0)

  useEffect(() => {
    if (heightProgressContainer.current === 0) return

    const stepHeight = heightProgressContainer.current / numSteps
    const newValue = stepHeight * currentStep
    if (newValue <= heightProgressContainer.current) {
      stepValue.value = newValue
    }
  }, [currentStep,stepValue, numSteps])

  const stylesAnimated = useAnimatedStyle(() => {
    return {
      width: withTiming(stepValue.value, {
        duration: 200,
        easing: Easing.linear
      })
    }
  }, [stepValue])

  return (
    <>

      <View
        style={styles.container}
      >
        <TouchableOpacity onPress={onGoBack}>
          <Image source={images.backButton} style={{ width: 24, height: 24}}/>
        </TouchableOpacity>
         <Text style={styles.stepText}>Paso {currentStep} de {numSteps}</Text>
        <View
          style={styles.containerProgressBar}
          onLayout={evt => {
            heightProgressContainer.current = evt.nativeEvent.layout.width
            stepValue.value = heightProgressContainer.current / numSteps
          }}
        >
          <Animated.View
            style={[stylesAnimated, {
              backgroundColor: colors.b600,
              height: HEIGHT,
              borderRadius: BORDER_RADIUS
            }]}
          />
        </View>
       
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 15,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 10
  },
  containerProgressBar: {
    backgroundColor: colors.neutralsN400,
    width: '60%',
    height: HEIGHT,
    borderRadius: BORDER_RADIUS,
    marginRight: 10
  },
  stepText: {
    flex: 1,
    color: '#000',
    textTransform: "uppercase",
    fontWeight: '900'
  }
})

export default ProgressBar
