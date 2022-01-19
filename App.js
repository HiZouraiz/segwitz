import React from "react";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { TransitionPresets } from 'react-navigation-stack';
import bottomTabBarScreen from "./components/bottomTabBarScreen";
import welcomeScreen from "./screens/auth/welcomeScreen";
import loginScreen from "./screens/auth/loginScreen";
import bookingScreen from "./screens/pages/booking";
import messageScreen from "./screens/pages/message";
import newsScreen from "./screens/pages/news";
import accountScreen from "./screens/pages/account";
import onboardingScreen from "./screens/onboarding/onboardingScreen";

const switchNavigator = createSwitchNavigator({
  Onboarding: onboardingScreen,
  placeFlow: createSharedElementStackNavigator(
    {
      Welcome: welcomeScreen,
      LoginScreen: loginScreen,
      BookingScreen: bookingScreen,
      NewsScreen: newsScreen,
      MessageScreen: messageScreen,
      AccountScreen: accountScreen,
      BottomTabBar: bottomTabBarScreen,
    },
    {
      initialRouteName: 'BottomTabBar',
    }
  ),
},
  {
    initialRouteName: 'Onboarding',
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
    },
    transitionSpec: {
      duration: 400,
    },
  });

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <App />
  );
};
