import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from '../../screens/SignInScreen';
import SignUp from '../../screens/SignUpScreen';
import {SCREENS} from '../../../utils/constants';
import HomeScreen from '../../screens/HomeScreen';
import ContentScreen from '../../screens/ContentScreen';

const Drawer = createDrawerNavigator();

const DrawerComponent = () => {
  return (
    // <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name={SCREENS.HOME_SCREEN} component={HomeScreen} />
      <Drawer.Screen name={SCREENS.CONTENET_SCREEN} component={ContentScreen} />
    </Drawer.Navigator>
    // </NavigationContainer>
  );
};

export default DrawerComponent;
