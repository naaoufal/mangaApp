import {useState} from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const DATA = [
  {id: 1, name: 'most populaires'},
  {id: 2, name: 'top rated'},
  {id: 3, name: 'most reading'},
  {id: 4, name: 'most populaires'},
  {id: 4, name: 'most populaires'},
  {id: 4, name: 'most populaires'},
];

const maxWidth = Dimensions.get('screen').width;
const maxHiegth = Dimensions.get('screen').height;

const FilterContainer = () => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.subContainer}>
            <Text style={styles.txtTitle}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: maxHiegth / 14,
    // backgroundColor: 'gray',
    paddingHorizontal: 12,
    marginTop: 6,
  },
  subContainer: {
    // marginRight: 10,
    backgroundColor: 'tomato',
    marginTop: 6,
    marginBottom: 6,
    marginRight: 6,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    // left: 10,
  },
  txtTitle: {
    color: '#fff',
    fontSize: 14,
  },
});

export default FilterContainer;
