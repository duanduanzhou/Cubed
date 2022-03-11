import React, { useState } from 'react';
import {TouchableOpacity,View,Dimensions,TextInput,Image,StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Carousel from 'react-native-snap-carousel'
import { Button, Icon, Input, Overlay } from 'react-native-elements';


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
  image6: require('./images/6.png'),
  add_item: require('./images/add.png'),
  cube: require('./images/cube.png'),
  filter: require('./images/filter.png'),
  profile: require('./images/profile.png'),
  docSet: require('./images/doc.png')
};

const EditWorkspaceOverlay = ({image}) => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={toggleOverlay} >
          <Image
            style={styles.tinyLogo}
            source={image}/>
      </TouchableOpacity>

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={styles.overlay}>
        <View>
          <Image
              style={styles.docSettings}
              source={IMAGES.docSet}/>
        </View>
      </Overlay>
      </View>
  );
}

const CreateWorkspaceOverlay = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={toggleOverlay} >
          <Image
            style={styles.buttonLogoLarge}
            source={IMAGES.add_item}/>
      </TouchableOpacity>

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={styles.overlay1}>
          <Text style={styles.textOverlayTitle}>Create a new workspace</Text>
          <View>
            <Text style={styles.textOverlaySubtitle}>Workspace title</Text>
            <Input inputContainerStyle={styles.inputContainer}
              style={styles.inputOverlay}
              placeholder='New Workspace'
            />
          </View>

          <Button containerStyle={styles.createWorkspaceButton}
            title="Create"
            onPress={toggleOverlay}
          />
        </Overlay>
      </View>
  );
}


const DocumentSelectScreen = ({ navigation }) => {
  const navigationOptions = {
    title: 'Details',
  };
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
      placeholder="Search for your workspace..."
      />
      <Text style={styles.textsmall1}>Recent</Text>
      <ScrollView horizontal={true} style={styles.scrollView}>
        <EditWorkspaceOverlay image={IMAGES.image1} />
        <EditWorkspaceOverlay image={IMAGES.image2} />
        <EditWorkspaceOverlay image={IMAGES.image3} />
      </ScrollView>
      <View style={styles.action1}>
      <Text style={styles.textsmall2}>All Workspace</Text>
      <TouchableOpacity style={styles.Button} >
        <Image
          style={styles.buttonLogoSmall}
          source={IMAGES.filter}/>
      </TouchableOpacity>
      </View>
       <ScrollView horizontal={true} style={styles.scrollView}>
        <EditWorkspaceOverlay image={IMAGES.image1} />
        <EditWorkspaceOverlay image={IMAGES.image2} />
      </ScrollView>
       <ScrollView horizontal={true} style={styles.scrollView}>
        <EditWorkspaceOverlay image={IMAGES.image4} />
        <EditWorkspaceOverlay image={IMAGES.image5} />
      </ScrollView>
      <ScrollView horizontal={true} style={styles.scrollView}>
        <EditWorkspaceOverlay image={IMAGES.image6} />
        <EditWorkspaceOverlay image={IMAGES.image3} />
     </ScrollView>

    </ScrollView>
      <View style={styles.action2}>
        <TouchableOpacity style={styles.Button} >
          <Image
            style={styles.buttonLogo}
            source={IMAGES.cube}/>
          <Text style={styles.buttontext}>Workspaces</Text>
        </TouchableOpacity>

      <CreateWorkspaceOverlay/>

      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Profile')}} >
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
  inputContainer: {
    borderRadius: 10,
    backgroundColor: "#434343",
    marginTop: 10,
    paddingLeft: 5
  },
  createWorkspaceButton: {
    borderRadius: 100,
    marginHorizontal: 60,
  },
  docSettings: {
    height: 300,
    width: 400
  },
  debug: {
    backgroundColor: '#444444'
  },
  container: {
    flexDirection: 'column',
    flex: 2,
    paddingTop: StatusBar.currentHeight,
  },
  action1: {
    flex: 0.1,
    paddingBottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
    //marginBottom: -30,
    //eight:40,
  },
  action2: {
    flex: 0.1,
    paddingBottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
    marginBottom: -30,
    //eight:40,
  },
  scrollView: {
    //backgroundColor: 'pink',
    flex:4,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 42,
    marginHorizontal: 20,
  },
  textsmall1: {
    fontSize: 24,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 5,
    alignItems: "center",
    fontWeight: 'bold',
  },
  textsmall2: {
    fontSize: 24,
    marginTop: 15,
    marginBottom: 5,
    alignItems: "center",
    fontWeight: 'bold',
    marginHorizontal: -8
  },
  textOverlayTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 24,
    textAlign: 'center',
    margin: 20
  },
  textOverlaySubtitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '300',
    textAlign: 'left',
    marginLeft: 10
  },
  input: {
    height: 40,
    width: 330,
    borderColor: 'gray',
    backgroundColor: 'rgba(52, 52, 52, 0.1)',

    borderWidth: 1,
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    padding:8
  },

  inputOverlay: {
    color:'white',
  },
  tinyLogo: {
     width: 160,
     height: 160,
     resizeMode: 'contain',
     margin:7
  },
  buttonLogo: {
    width: 30,
    height: 30,
    marginHorizontal:50,
    resizeMode: 'contain'
  },
  buttonLogo2: {
    width: 25,
    height: 25,
    marginHorizontal:50,
    marginBottom:2,
    resizeMode: 'contain'
  },
  buttonLogoLarge: {
    width: 90,
    height: 90,
    marginTop: -10,
    resizeMode: 'contain'
  },
  buttonLogoSmall: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginTop: 15,
    marginHorizontal: -10,
  },
  buttontext: {
    fontSize: 8,
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center"
  },
  overlay: {
    position: 'absolute',
    top: 550,
    borderRadius: 28,
    backgroundColor: 0x2c2c2cff,
    padding: 20,
  },
  overlay1: {
    position: 'relative',
    borderRadius: 28,
    backgroundColor: 0x2c2c2cff,
    padding: 20,
  },
});
export default DocumentSelectScreen;
