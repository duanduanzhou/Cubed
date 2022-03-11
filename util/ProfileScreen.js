import React, { useState } from 'react';
import {TouchableOpacity,View,Dimensions,TextInput,Image, StyleSheet, SafeAreaView, ScrollView, StatusBar, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel'
import {
  ListItem,
  Avatar,
  Icon,
  Badge,
  ListItemProps,
  Button,
  Switch,
  colors,
  Divider,
  Overlay,
  Input
} from 'react-native-elements';


const IMAGES = {
    image1: require('./images/1.png'),
    image2: require('./images/2.png'),
    image3: require('./images/3.png'),
    image4: require('./images/4.png'),
    image5: require('./images/5.png'),
    add_item: require('./images/add.png'),
    cube: require('./images/gube.png'),
    filter: require('./images/filter.png'),
    profile: require('./images/progile.png'),
    overlay: require('./images/unnamed.png'),
    arrow: require('./images/right.png'),
    profilePic: require('./images/propic.png'),
    settings: require('./images/settings.png')
  };

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

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={styles.overlay}>
          <Text style={styles.textOverlayTitle}>Create a new workspace</Text>
          <View>
            <Text style={styles.textOverlaySubtitle}>Workspace title</Text>
            <Input
              placeholder='New Workspace'
            />
          </View>

          <Button
            title="Create"
            onPress={toggleOverlay}
          />
        </Overlay>
      </View>
  );
}

const LogoutOverlay = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View styles={styles.logoutOverlay}>
      <TouchableOpacity style={styles.logout} onPress={toggleOverlay}>
          <Icon name="power-settings-new" color={"white"} containerStyle={{marginRight: 5}}/>
          <Text style={styles.logoutText}>
            Logout
          </Text>
      </TouchableOpacity>

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={styles.overlay}>
          <View style={{alignSelf:"center"}}>
            <Text style={styles.textOverlaySubtitle}>Are you sure you want to logout?</Text>
          </View>

          <View style={styles.options}>
            <TouchableOpacity style={styles.optionButton} onPress={toggleOverlay}>
              <Text style={styles.optionText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={()=>{navigation.navigate('Login')}}>
              <Text style={styles.optionText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </Overlay>
      </View>
  );
}

const ProfileItem = ({title, icon}) => {

  const leftIcon = icon ? <Icon name={icon}/> : <></>

  return (
      <View style={styles.item}>
        {leftIcon}
        <Text style={styles.horizontalText}>
            {title}
        </Text>
        <Icon name={"chevron-right"}/>
      </View>
  );
}


const ProfileScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.topBar}>
      <ScrollView style={styles.container}>
        <View style={styles.profileContainer}>
            <Image source={IMAGES.profilePic} style={styles.profile}/>
            <Text>Change profile picture</Text>
        </View>
        <View style={styles.innerContainer}>
          <ProfileItem title={"Email Account"}/>
        </View>
        <View style={styles.innerContainer}>
          <ProfileItem title={"Username"}/>
        </View>
        <View style={styles.innerContainer}>
          <ProfileItem title={"Settings"} icon={"settings"}/>
          <ProfileItem title={"Downloads"} icon={"get-app"}/>
          <ProfileItem title={"Collaborators"} icon={"people"}/>
          <ProfileItem title={"Tutorial"} icon={"error-outline"}/>
        </View>
        <LogoutOverlay navigation={navigation}/>
      </ScrollView>

      <View style={styles.action}>
        <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('DocumentSelect')}}>
          <Image
            style={styles.buttonLogo}
            source={IMAGES.cube}/>
          <Text style={styles.buttontext}>Workspaces</Text>
        </TouchableOpacity>


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
  logoutOverlay: {
    flex: 1
  },
  action: {
    flex: 0.1,
    paddingBottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
    marginBottom: -30,

    //eight:40,
  },
  options: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  optionText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  optionButton: {
    flex: 1,
    marginTop: 20,
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
  overlay: {
    borderRadius: 28,
    padding: 20,
    backgroundColor: 0x2c2c2cff
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
  buttonLogo: {
    width: 30,
    height: 30,
    marginHorizontal:50,
    resizeMode: 'contain'
  },
  buttontext: {
    fontSize: 8,
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center"
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
  item: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  screen: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  logout: {
    width: 233,
    height: 58,

    backgroundColor: '#c4c4c4',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
  logoutText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 24,

  },
  container: {
    flex: 1,
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  topBar: {
    flexDirection: 'column',
    flex: 2,
    paddingTop: StatusBar.currentHeight,
  },
  innerContainer: {
    justifyContent: "space-between",
    backgroundColor: "#eef7fe",
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  circle: {
    borderRadius: 100,
    backgroundColor: "#234512"
  },
  profileContainer: {
    alignItems: 'center',
  },
  profile: {
    alignSelf: 'center',
    height: 200,
    width: 200,
    borderRadius: 10000,
    marginBottom: 3,
  },
  subHeader: {
    backgroundColor : "#2089dc",
    color : "white",
    textAlign : "center",
    paddingVertical : 5,
    marginBottom : 10
  },
  horizontal: {
    marginBottom: 10,
  },
  horizontalText: {
    fontSize: 17,
    marginVertical: 10,
    marginRight: 'auto',
    marginLeft: 3
  },
  vertical: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default ProfileScreen;
