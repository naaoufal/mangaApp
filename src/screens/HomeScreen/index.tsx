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
import {useNavigation} from '@react-navigation/native';
import SignInScreen from '../SignInScreen';
import {SCREENS} from '../../../utils/constants';
import StatusBarComponent from '../../components/StatusBar';
import FilterContainer from '../../components/FilterContainer';
import DrawerComponent from '../../components/DrawerNavigation';
import BottomBarComponent from '../../components/BottomBarComponent';

const maxWidth = Dimensions.get('screen').width;
const maxHiegth = Dimensions.get('screen').height;

const DATA = [
  {
    id: 1,
    name: 'manga-1',
    tags: 'action, magic, honor ...',
    desc: 'Et incididunt consectetur do non ullamco in dolor ut voluptate ut Lorem exercitation Lorem. In duis et enim est ex pariatur occaecat nulla aliqua exercitation Lorem amet. Mollit ut ut non dolore aute eu amet sint aute dolore adipisicing irure. Dolor aliqua aliqua excepteur sint anim nostrud officia dolor mollit officia excepteur esse dolore culpa.',
  },
  {
    id: 2,
    name: 'manga-2',
    tags: 'action, magic, honor ...',
    desc: 'Et incididunt consectetur do non ullamco in dolor ut voluptate ut Lorem exercitation Lorem. In duis et enim est ex pariatur occaecat nulla aliqua exercitation Lorem amet. Mollit ut ut non dolore aute eu amet sint aute dolore adipisicing irure. Dolor aliqua aliqua excepteur sint anim nostrud officia dolor mollit officia excepteur esse dolore culpa.',
  },
  {
    id: 3,
    name: 'manga-3',
    tags: 'action, magic, honor ...',
    desc: 'Et incididunt consectetur do non ullamco in dolor ut voluptate ut Lorem exercitation Lorem. In duis et enim est ex pariatur occaecat nulla aliqua exercitation Lorem amet. Mollit ut ut non dolore aute eu amet sint aute dolore adipisicing irure. Dolor aliqua aliqua excepteur sint anim nostrud officia dolor mollit officia excepteur esse dolore culpa.',
  },
  {
    id: 4,
    name: 'manga-4',
    tags: 'action, magic, honor ...',
    desc: 'Et incididunt consectetur do non ullamco in dolor ut voluptate ut Lorem exercitation Lorem. In duis et enim est ex pariatur occaecat nulla aliqua exercitation Lorem amet. Mollit ut ut non dolore aute eu amet sint aute dolore adipisicing irure. Dolor aliqua aliqua excepteur sint anim nostrud officia dolor mollit officia excepteur esse dolore culpa.',
  },
  {
    id: 5,
    name: 'manga-5',
    tags: 'action, magic, honor ...',
    desc: 'Et incididunt consectetur do non ullamco in dolor ut voluptate ut Lorem exercitation Lorem. In duis et enim est ex pariatur occaecat nulla aliqua exercitation Lorem amet. Mollit ut ut non dolore aute eu amet sint aute dolore adipisicing irure. Dolor aliqua aliqua excepteur sint anim nostrud officia dolor mollit officia excepteur esse dolore culpa.',
  },
  {
    id: 6,
    name: 'manga-6',
    tags: 'action, magic, honor ...',
    desc: 'Et incididunt consectetur do non ullamco in dolor ut voluptate ut Lorem exercitation Lorem. In duis et enim est ex pariatur occaecat nulla aliqua exercitation Lorem amet. Mollit ut ut non dolore aute eu amet sint aute dolore adipisicing irure. Dolor aliqua aliqua excepteur sint anim nostrud officia dolor mollit officia excepteur esse dolore culpa.',
  },
  {
    id: 7,
    name: 'manga-7',
    tags: 'action, magic, honor ...',
    desc: 'Et incididunt consectetur do non ullamco in dolor ut voluptate ut Lorem exercitation Lorem. In duis et enim est ex pariatur occaecat nulla aliqua exercitation Lorem amet. Mollit ut ut non dolore aute eu amet sint aute dolore adipisicing irure. Dolor aliqua aliqua excepteur sint anim nostrud officia dolor mollit officia excepteur esse dolore culpa.',
  },
  {
    id: 8,
    name: 'manga-8',
    tags: 'action, magic, honor ...',
    desc: 'Et incididunt consectetur do non ullamco in dolor ut voluptate ut Lorem exercitation Lorem. In duis et enim est ex pariatur occaecat nulla aliqua exercitation Lorem amet. Mollit ut ut non dolore aute eu amet sint aute dolore adipisicing irure. Dolor aliqua aliqua excepteur sint anim nostrud officia dolor mollit officia excepteur esse dolore culpa.',
  },
];

const HomeScreen = () => {
  // handle navigate :
  const navigation = useNavigation();

  // handle press :
  const handlePress = (item: any) => {
    // console.log('this is manga ID :', id);
    // navigate to screen to see data :
    navigation.navigate(SCREENS.CONTENET_SCREEN, {
      item: item,
    });
  };

  return (
    <>
      <StatusBarComponent />
      <FilterContainer />
      <ScrollView>
        {/* <DrawerComponent /> */}
        <View style={styles.container}>
          {/* <Text>this is home screen</Text> */}
          <Text style={styles.header}>Latest Free Chapters :</Text>
          <FlatList
            horizontal
            data={DATA}
            renderItem={({item}) => (
              <TouchableOpacity
                // onPress={handlePress(item)}
                style={styles.subContainer}>
                <View style={styles.fieldLatest}>
                  <Image
                    style={styles.logoImage}
                    source={require('../../assets/images/image-manga.jpg')}
                    resizeMode="cover"
                  />
                  <View style={styles.fieldtDesc}>
                    <Text style={styles.mangaName}>{item?.name}</Text>
                    <Text numberOfLines={3} style={styles.mangaName}>
                      {item?.tags}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            style={styles.flat}
            showsHorizontalScrollIndicator={false}
          />
          <View style={styles.secondContainer}>
            <Text style={styles.secondHeader}>My Manga List :</Text>
            <FlatList
              //   horizontal
              data={DATA}
              numColumns={3}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => handlePress(item)}
                  style={styles.subContainer1}>
                  <View style={styles.fieldLatest}>
                    <Image
                      style={styles.logoImage}
                      source={require('../../assets/images/image-manga.jpg')}
                      resizeMode="cover"
                    />
                    <View style={styles.fieldtDesc}>
                      <Text style={styles.mangaName}>{item?.name}</Text>
                      <Text numberOfLines={3} style={styles.mangaName}>
                        {item?.tags}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
              //   style={styles.flat}
              //   showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 12,
    // flex: 1,
  },
  flat: {
    marginTop: 10,
    // flex: 1,
  },
  header: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  subContainer: {
    width: maxWidth / 3.3,
    height: maxHiegth / 3.4,
    // backgroundColor: 'gray',
    marginRight: 10,
    flexDirection: 'column',
  },
  subContainer1: {
    width: maxWidth / 3.3,
    height: maxHiegth / 3.4,
    // backgroundColor: 'gray',
    marginRight: 10,
    marginBottom: 10,
    flexDirection: 'column',
  },
  fieldLatest: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  logoImage: {
    width: maxWidth / 3.3,
    height: maxHiegth / 3.5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    // bottom: 20,
    borderRadius: 6,
  },
  mangaName: {
    color: '#fff',
    fontSize: 14,
    marginTop: 6,
    // width: '100%',
  },
  fieldtDesc: {
    // display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // alignContent: 'flex-end',
    // margin: 4,
    position: 'absolute',
    alignContent: 'center',
    top: '30%',
    // paddingTop: 12,
    // paddingBottom: 12,
  },
  secondContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  secondHeader: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default HomeScreen;
