import {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const STYLES = ['default', 'dark-content', 'light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;

const StatusBarComponent = () => {
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);

  return (
    <StatusBar
      animated={true}
      backgroundColor="tomato"
      barStyle={statusBarStyle}
      // showHideTransition={statusBarTransition}
      // hidden={hidden}
    />
  );
};

const styles = StyleSheet.create({
  statusBarStyle: {
    // height: 200,
  },
});

export default StatusBarComponent;
