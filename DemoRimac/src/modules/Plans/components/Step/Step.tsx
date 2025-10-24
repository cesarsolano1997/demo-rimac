import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native'
import React, { FC, useEffect, useRef } from 'react'
import { withProgressBarComponentProp } from '../../../../tools/hoc/step/withProgressBar'


import Step1 from './Step1'
import Step2 from './Step2'
import { useScrollToTop } from '@react-navigation/native'
import { useScrollToTopCustom } from '../../../../components/organisms/Template/ScrollContex'

const windowWidth = Dimensions.get("screen").width
const Step: FC<withProgressBarComponentProp> = ({
    onNextStep,
    step
}) =>
{
    const refFlatList = useRef<Animated.FlatList>(null)
    const { scrollToTop } = useScrollToTopCustom();

    useEffect(() =>
    {
        refFlatList.current?.scrollToIndex({
            animated: true,
            index: step - 1,
            viewPosition: 0,
            viewOffset: 0,
        })

        scrollToTop()
    }, [step])

    return (
            <Animated.FlatList
                ref={refFlatList}
                keyExtractor={item => item.key}
                data={[{
                    key: 'step-1',
                    component: <Step1 onNextStep={onNextStep}/>
                },
                {
                    key: 'step-2',
                    component: <Step2 />
                }]}
                renderItem={({ item }) =>
                {
                    return item.component
                }}
                horizontal
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                snapToInterval={windowWidth}
                nestedScrollEnabled={true}
                style={{
                    marginBottom: 40,
                }}
            />
    )
}
export default Step