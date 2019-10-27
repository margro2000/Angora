import React, { Component } from "react";

import styles from "./style";
import {TouchableOpacity, Image, Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Button} from 'react-native';

const appId = "1047121222092614"
var file = ""

export default class LoginScreen extends Component {

  constructor(props) {

    super(props)

	global.file = '../assets/images/res1.jpg';

    this.state = {

      TextInputValueHolder: ''

    }

  }

  GetValueFunction = () =>{
    const { TextInputValueHolder } = this.state ;
    //console.log(this.state);
	if (TextInputValueHolder== '605902') {
		global.file = '../assets/images/res2.jpg'
		console.log(TextInputValueHolder)
		console.log(global.file);
	}
	else if (TextInputValueHolder== '036683') {
		console.log("Hi");
	}
	else if (TextInputValueHolder== '123215') {
		console.log("Hi");
	}
	else if (TextInputValueHolder== '253255') {
		console.log("Hi");
	}
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
		  <View style={styles.logoContainer}>
		  <Image style={styles.logo} source={require('../assets/images/Logo.png')}/>
		  </View>
          <View style={styles.enterCode}>
            <TextInput placeholder="Enter six-digit code" placeholderColor="#c4c3cb" style={styles.codeInput} onChangeText={TextInputValueHolder => this.setState({TextInputValueHolder})} />
            </View>
            <Button
              buttonStyle={styles.searchButton}
              title="Get Resume"
              onPress={this.GetValueFunction}
            />
            {/* <Button
              buttonStyle={styles.scanQRButton}
              title="SCAN QR CODE"
            /> */}

			<TouchableOpacity>
			<Text style ={styles.QRScan}> SCAN QR CODE</Text>
			</TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
