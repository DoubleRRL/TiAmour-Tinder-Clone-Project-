import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  PanResponder
} from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

import Icon from 'react-native-vector-icons/Ionicons'

const Users = [
  { id: "1", uri: require("./assets/1.jpg") },
  { id: "2", uri: require("./assets/2.jpg") },
  { id: "3", uri: require("./assets/3.jpg") },
  { id: "4", uri: require("./assets/4.jpg") },
  { id: "5", uri: require("./assets/5.jpg") }
];

// above, i imported images that are being looked for in the root dir (.)
// and then the assets folder, and the corresponding name we gave each key value (dictionary)
// it is a dictionary (or maybe json) that has an id that responds to a number
// and the number is grouped with another key value pair, with the uri key calling the
// require function that i assume is required to get that specified file each time the uri is called

export default class App extends React.Component {
  constructor() {
    super();
    this.position = new Animated.ValueXY();
    this.state = {
      currentIndex: 0
    };
  }
  componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {}
    });
  }

  renderUsers = () => {
    
    return Users.map((item, i) => {

      if( i < this.state.currentIndex)
      {
        return null
      }
      else if( i == this.state.currentIndex) {
        
      }
      
      return (
        <Animated.View
          {...this.PanResponder.panHandlers}
          key={item.id}
          style={[{ transform: this.position.getTranslateTransform() },

            {
              height: SCREEN_HEIGHT - 120,
              width: SCREEN_WIDTH,
              padding: 10,
              position: "absolute"
            }

          ]}>

          <Image
            style={{
              flex: 1,
              height: null,
              width: null,
              resizeMode: "cover",
              borderRadius: 20
            }}
            source={item.uri} />

        </Animated.View>
      )
    }
    else {
      return (
        <Animated.View

          key={item.id} style={[{
    
          height: SCREEN_HEIGHT - 120,
          width: SCREEN_WIDTH,
          padding: 10,
          position: "absolute" }]}>

          <Image
            style={{
              flex: 1,
              height: null,
              width: null,
              resizeMode: "cover",
              borderRadius: 20
            }}
            source={item.uri} />

        </Animated.View>
      )
    }
  }).reverse()
  

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 90 }} />

        <View style={{ flex: 1 }}>
          {this.renderUsers()}
          <View style={{ height: 70 }} />
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
