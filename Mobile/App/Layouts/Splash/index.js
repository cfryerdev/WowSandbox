import React from 'react';
import { StyleSheet, View, StatusBar, Text, Image } from 'react-native';

export default class Splash extends React.Component {
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
        <Image source={require('../../Assets/Images/Splash.png')} />
      </View>
    );
  }

}