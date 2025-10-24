import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HealthInsurance from '../modules/HealthInsurance/HealthInsurance.screen';
import { createStaticNavigation } from '@react-navigation/native';
import configScreen from './config';
import Plans from '../modules/Plans/Plans.screen';
import LoadingDots from '../components/molecules/LoadingDots';
import useLoading from '../tools/hooks/useLoading';
import HomeScreen from '../modules/Home';

const RootStack = createNativeStackNavigator({
  initialRouteName: "HomeScreen",
  screens: {
    HomeScreen: {
      screen: HomeScreen,
      options: configScreen
    },
    HealthInsuranceScreen: {
      screen: HealthInsurance,
      options: configScreen
    },
    PlansScreen: {
      screen: Plans,
      options: configScreen
    }
  },
});

const Navigation = createStaticNavigation(RootStack);

const Core: FC = () =>
{
  const { loading } = useLoading()


  return (
    <>
      <Navigation />
      {loading && <LoadingDots />}
    </>
  )
}

export default Core