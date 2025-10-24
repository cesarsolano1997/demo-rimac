import { View, StyleSheet, ScrollView } from 'react-native'
import React, { FC, ReactElement, useRef } from 'react'
import config from '../../../tools/config'
import Footer from '../../molecules/Footer'
import ScrollContext from './ScrollContex'

type Props = {
    children: ReactElement
}

const Template: FC<Props> = ({ children }) =>
{
    const scrollRef = useRef<ScrollView>(null);


    const scrollToTop = () =>
    {
        scrollRef.current?.scrollTo({
            x: 0,
            y: 0,
            animated: true,
        });
    };

    return (
        <ScrollContext.Provider value={{ scrollToTop }}>
            <ScrollView
                ref={scrollRef}
                bounces={false}
                showsVerticalScrollIndicator={false}
            >

                <View style={styles.container}>{children}
                </View>
                <Footer />
            </ScrollView>
        </ScrollContext.Provider>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: config.stylesGlobal.paddingHorizontal,
        backgroundColor: '#FAFBFF'
    },

})

export default Template