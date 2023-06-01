/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import DrawerNavigtion from './src/components/DrawerNavigation';
import HomeScreen from './src/screens/HomeScreen';
import StatusBarComponent from './src/components/StatusBar';
import SearchInput from './src/components/SearchInput';
import FilterContainer from './src/components/FilterContainer';
import FooterScreen from './src/screens/FooterScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ContentScreen from './src/screens/ContentScreen';
import {SCREENS} from './utils/constants';
import DrawerComponent from './src/components/DrawerNavigation';
import {createDrawerNavigator} from '@react-navigation/drawer';
import GlobalContentScreen from './src/screens/GlobalContentScreen';
import BottomBarComponent from './src/components/BottomBarComponent';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREENS.HOME_SCREEN}
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'tomato'},
        }}>
        <Stack.Screen
          name={SCREENS.HOME_SCREEN}
          component={HomeScreen}
          options={{title: 'My Library'}}
        />
        {/* <Stack.Screen name="SignInScreen" component={SignInScreen} /> */}
        {/* <Stack.Screen name="SignUpScreen" component={SignUpScreen} /> */}
        <Stack.Screen
          name={SCREENS.CONTENET_SCREEN}
          component={ContentScreen}
          options={{title: 'Back'}}
        />
        <Stack.Screen
          name={SCREENS.GLOBAL_CONTENT_SCREEN}
          component={GlobalContentScreen}
        />
      </Stack.Navigator>
      {/* <Drawer.Navigator initialRouteName={SCREENS.HOME_SCREEN}>
        <Drawer.Screen name={SCREENS.HOME_SCREEN} component={HomeScreen} />
      </Drawer.Navigator> */}
      {/* <BottomBarComponent /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
