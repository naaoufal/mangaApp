import {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

const maxWidth = Dimensions.get('screen').width;
const maxHiegth = Dimensions.get('screen').height;

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="search input" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: maxHiegth / 14,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: maxWidth / 1.1,
    backgroundColor: '#fff',
    borderRadius: 6,
    height: maxHiegth / 20,
  },
});

export default SearchInput;
