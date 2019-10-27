import React, { Component } from "react";
import styles from "./style";
import {TouchableOpacity, Image, ScrollView, Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Button, StyleSheet, PanResponder, Animated} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SettingsScreen from '../screens/SettingsScreen';
const appId = "1047121222092614"

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
);

export default class LoginScreen extends Component {

  constructor() {
    super();
    this.state = {
      pan: new Animated.ValueXY()
    };
  }

  componentWillMount() {
    // Add a listener for the delta value change
    this._val = { x:0, y:0 }
    this.state.pan.addListener((value) => this._val = value);
    // Initialize PanResponder with move handling
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderMove: Animated.event([
        null, { dx: this.state.pan.x, dy: this.state.pan.y }
      ])
      // adjusting delta value
      //this.state.pan.setValue({ x:0, y:0})
    });
  }
  render() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    }
    return (

      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
<View style={styles.container}>
		  <View style={styles.logoContainer}>
		  <Image style={styles.logo} source={require('../assets/images/Logo.png')}/>
		  </View>
          <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.resEdit}>

          <Image
            source={
              __DEV__
                ? require('../assets/images/res1.jpg')
                : require(global.file)
            }
            style={styles.resumeImage}
          />
		  <View style={styles.icons}>
		  <Text style={styles.iconDescription}> Note Toolbar</Text>
		  <Animated.View  {...this.panResponder.panHandlers}
	style={[panStyle, styles.circle]}>
		  <Image style={styles.icon} source={require('../assets/images/pencil.png')}/>
</Animated.View>
		  <Image style={styles.icon} source={require('../assets/images/eraser.jpg')}/>
		  <Text style={styles.match}> Match: </Text>
		<Text style={styles.found}> Found: </Text>
		<Text style={styles.unsure}> Unsure: </Text>
		  </View>

		  </View>

		  <View style={styles.notesSubmit}>
		  <TextInput placeholder="Any notes?" placeholderColor="#c4c3cb" style={styles.noteTaker} />
		<TouchableOpacity>
		<Text style ={styles.submitButton}> Submit</Text>
		</TouchableOpacity>
		  </View>
          <View style={styles.resAnalysis}>
      </View>
            <View style={styles.buttonContainer}>
            <Button
              buttonStyle={styles.loginButton}
              title="Schedule for Interview"
            />
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <Button
              title="Needs Further Review"
            />
            </View>
            </ScrollView>
            <Button
			onPress={() => this.props.navigation.navigate('SettingScreen')}
              buttonStyle={styles.newRes}
              title="Scan new resume"
            />
		</View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

    );
  }
}
