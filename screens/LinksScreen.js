import React, { Component } from "react";

import styles from "./style";
import {Image, Keyboard, Text, View, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, Button} from 'react-native';

const appId = "1047121222092614"

export default class LoginScreen extends Component {

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
		  <View style={styles.logoContainer}>
		  <Image style={styles.logo} source={require('../assets/images/Logo.png')}/>
		  </View>
			<TextInput placeholder="Enter keywords" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />

            <Button
              buttonStyle={styles.searchButton}
              title="Search"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
