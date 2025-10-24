import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Easing, Text, Image, Dimensions } from 'react-native';
import images from '../../../assets/images';

const DOT_SIZE = 10;
const DOT_COLOR = '#fff';
const DURATION = 800;
const DELAY_INCREMENT = 200;

const AnimatedDot: React.FC<{ delay: number }> = ({ delay }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.delay(delay),
        Animated.timing(animatedValue, {
          toValue: 1, 
          duration: DURATION,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: DURATION,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [animatedValue, delay]);

  const dotStyle = {
    transform: [{ 
      scale: animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.8, 1.2],
      })
    }],
    opacity: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 1.0],
    }),
  };

  return (
    <Animated.View style={[styles.dot, dotStyle]} />
  );
};

const LoadingDots: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image 
          source={images.logo}
          style={{
            width: 100,
          }}
          resizeMode='contain'
        />
      </View>
      <View style={styles.dotsContainer}>
        <AnimatedDot delay={0} />
        <AnimatedDot delay={DELAY_INCREMENT} />
        <AnimatedDot delay={DELAY_INCREMENT * 2} />
      </View>
      
    </View>
  );
};

const dimensions = Dimensions.get("screen")
const styles = StyleSheet.create({
  container: {
    width: dimensions.width,
    height: dimensions.height,
    backgroundColor: 'rgba(0,0,0,0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    position: 'absolute',
    zIndex: 1
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: DOT_COLOR,
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: DOT_COLOR,
    marginHorizontal: 8, 
  },
});

export default LoadingDots;