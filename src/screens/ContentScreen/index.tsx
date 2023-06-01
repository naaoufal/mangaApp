import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const CHAPTERS = [
  {id: 1, name: 'Chapter 1', desc: 'test'},
  {id: 2, name: 'Chapter 2', desc: 'test'},
  {id: 3, name: 'Chapter 3', desc: 'test'},
  {id: 4, name: 'Chapter 4', desc: 'test'},
  {id: 5, name: 'Chapter 5', desc: 'test'},
  {id: 6, name: 'Chapter 6', desc: 'test'},
  {id: 7, name: 'Chapter 7', desc: 'test'},
  {id: 8, name: 'Chapter 8', desc: 'test'},
  {id: 9, name: 'Chapter 9', desc: 'test'},
  {id: 10, name: 'Chapter 10', desc: 'test'},
  {id: 11, name: 'Chapter 11', desc: 'test'},
  {id: 12, name: 'Chapter 12', desc: 'test'},
];

const TAGS = [
  {id: 1, name: 'Action', desc: 'test'},
  {id: 2, name: 'Romance', desc: 'test'},
  {id: 3, name: 'Aventure', desc: 'test'},
  {id: 4, name: 'Fantazy', desc: 'test'},
  {id: 5, name: 'Honor', desc: 'test'},
  {id: 6, name: 'War', desc: 'test'},
  {id: 7, name: 'Martial Arts', desc: 'test'},
];

const maxWidth = Dimensions.get('screen').width;
const maxHiegth = Dimensions.get('screen').height;

const ContentScreen = (props: any) => {
  console.log('this is props', props?.route?.params?.item);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Image
            style={styles.logoImage}
            source={require('../../assets/images/image-manga.jpg')}
            resizeMode="cover"
          />
          <View style={styles.textField}>
            <Text style={styles.mangaName}>
              {props?.route?.params?.item?.name}
            </Text>
            <Text style={styles.textDesc}>
              {props?.route?.params?.item?.desc}
            </Text>
          </View>
        </View>
        {/* tags field : */}
        <View style={styles.tagsContainer}>
          {/* <Text>tags field</Text> */}
          <FlatList
            style={{
              flex: 1,
            }}
            data={TAGS}
            horizontal
            renderItem={({item}) => (
              <View style={styles.tagsSubContainer}>
                <Text style={styles.textTags}>{item?.name}</Text>
              </View>
            )}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/* next field : */}
        <View style={styles.secondSubContainer}>
          <Text style={styles.textChapter}>All Chapters :</Text>
          <View style={styles.chapterField}>
            {CHAPTERS &&
              CHAPTERS?.map((element: any) => (
                <TouchableOpacity style={styles.chapterElement}>
                  <Text>{element?.name}</Text>
                </TouchableOpacity>
              ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'tomato',
    marginTop: 20,
    paddingHorizontal: 12,
  },
  tagsSubContainer: {
    backgroundColor: 'tomato',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 4,
    paddingTop: 4,
    borderRadius: 12,
    marginRight: 10,
  },
  textTags: {
    color: '#fff',
    fontSize: 14,
  },
  chapterField: {
    marginTop: 10,
    marginBottom: 20,
  },
  chapterElement: {
    backgroundColor: 'gray',
    marginTop: 10,
    padding: 2,
    borderRadius: 4,
    // marginLeft: 10,
  },
  tagsContainer: {
    marginTop: 20,
  },
  subContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-',
  },
  logoImage: {
    width: maxWidth / 3,
    height: maxHiegth / 3.5,
    borderRadius: 6,
  },
  mangaName: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textDesc: {
    fontSize: 14,
    color: 'gray',
    fontWeight: '800',
  },
  textField: {
    marginLeft: 18,
    marginRight: 10,
    width: maxWidth / 1.8,
    // paddingLeft: 10,
    // backgroundColor: 'red',
    justifyContent: 'space-evenly',
  },
  secondSubContainer: {
    marginTop: 20,
  },
  textChapter: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default ContentScreen;
