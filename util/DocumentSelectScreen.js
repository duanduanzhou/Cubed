import React, { useState } from 'react';
import {TouchableOpacity,View,Dimensions,TextInput,Image,StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Carousel from 'react-native-snap-carousel'

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 128,
  height: 128
};

const { width } = Dimensions.get('window');
const SPACING = 10;
const THUMB_SIZE = 80;

const IMAGES = {
  image1: require('./images/1.png'),
  image2: require('./images/2.png'),
  image3: require('./images/3.png'),
  image4: require('./images/4.png'),
  image5: require('./images/5.png'),
  add_item: require('./images/add.png'),
  cube: require('./images/cube.png'),
  filter: require('./images/filter.png'),
  profile: require('./images/profile.png'),
};


const DocumentSelectScreen = ({ navigation }) => {
  const [images, setImages] = useState([
  { id: '1', image: IMAGES.image1 },
  { id: '2', image: IMAGES.image2 },
  { id: '3', image: IMAGES.image3 },
  { id: '4', image: IMAGES.image4 },
  { id: '5', image: IMAGES.image5 }
  ]);
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <TextInput
      style={styles.input}
      placeholder="Search Your WorkSpace"
      />
      <Text style={styles.textsmall1}>Recent</Text>
      <ScrollView horizontal={true} style={styles.scrollView}>
        <Image style={styles.tinyLogo} source={IMAGES.image1} />
        <Image style={styles.tinyLogo} source={IMAGES.image2} />
        <Image style={styles.tinyLogo} source={IMAGES.image3} />
      </ScrollView>
      <View style={styles.action}>
      <Text style={styles.textsmall2}>All WorkSpace</Text>
      <TouchableOpacity style={styles.Button} >
        <Image
          style={styles.buttonLogoSmall}
          source={IMAGES.filter}/>
      </TouchableOpacity>
      </View>
       <ScrollView horizontal={true} style={styles.scrollView}>
        <Image style={styles.tinyLogo} source={IMAGES.image1} />
        <Image style={styles.tinyLogo} source={IMAGES.image2} />
      </ScrollView>
       <ScrollView horizontal={true} style={styles.scrollView}>
        <Image style={styles.tinyLogo} source={IMAGES.image4} />
        <Image style={styles.tinyLogo} source={IMAGES.image5} />
      </ScrollView>


    </ScrollView>
      <View style={styles.action}>
        <TouchableOpacity style={styles.Button} >
          <Image
            style={styles.buttonLogo}
            source={IMAGES.cube}/>
          <Text style={styles.buttontext}>WorkSpace</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Button} onPress={()=>{alert("you clicked me")}} >
          <Image
            style={styles.buttonLogoLarge}
            source={IMAGES.add_item}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Button} onPress={()=>{alert("you clicked me")}} >
          <Image
            style={styles.buttonLogo}
            source={IMAGES.profile}/>
          <Text style={styles.buttontext}>Profile</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingTop: StatusBar.currentHeight,
  },
  action: {
    flex: 0.5,
    paddingBottom: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30
  },
  scrollView: {
    //backgroundColor: 'pink',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 42,
    marginHorizontal: 20,
  },
  textsmall1: {
    fontSize: 28,
    marginHorizontal: 30,
  },
  textsmall2: {
    fontSize: 28,
  },
  input: {
    height: 40,
    width: 330,
    borderColor: 'gray',
    backgroundColor: 'rgba(52, 52, 52, 0.1)',

    borderWidth: 1,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  tinyLogo: {
     width: 175,
     height: 175,
     resizeMode: 'contain'
   },
   buttonLogo: {
      width: 60,
      height: 60,
      resizeMode: 'contain'
    },
    buttonLogoLarge: {
       width: 90,
       height: 90,
       resizeMode: 'contain'
     },
     buttonLogoSmall: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
      },
   buttontext: {
     fontSize: 12,
     fontWeight: "bold",
     alignItems: "center",
     textAlign: "center"
   },
});
export default DocumentSelectScreen;
