import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {SCREENS} from '../../../utils/constants';
import GlobalContentScreen from '../../screens/GlobalContentScreen';
import HomeScreen from '../../screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomBarComponent = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={SCREENS.HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen
        name={SCREENS.GLOBAL_CONTENT_SCREEN}
        component={GlobalContentScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomBarComponent;
