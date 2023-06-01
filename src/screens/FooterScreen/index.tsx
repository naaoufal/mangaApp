import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../HomeScreen';
import SignInScreen from '../SignInScreen';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

const maxWidth = Dimensions.get('screen').width;
const maxHiegth = Dimensions.get('screen').height;

const FooterScreen = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{backgroundColor: '#694fad'}}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SignInScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    // height: maxHiegth / 16,
    // backgroundColor: 'red',
    // flex: 1,
    // justifyContent: 'flex-end',
    // top: 0,
  },
});

export default FooterScreen;
