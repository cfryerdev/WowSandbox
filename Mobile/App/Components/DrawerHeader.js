import React from 'react';
import { StyleSheet, View, ImageBackground, Text } from 'react-native';

//import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
//const user = GoogleSignin.currentUser();

let styles = StyleSheet.create({
    tray: {
        top: 126,
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    title: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 12,
        color: '#ffffff',
        fontStyle: 'italic'
    },
    backgroundImage: {
      height: 180,
      resizeMode: 'cover',
    }
});

export default class DrawerHeader extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        const image = require('../Assets/Images/NavigationBackground.png');
  
        return (
            <ImageBackground style={styles.backgroundImage} source={image}>
                <View style={styles.tray}>
                    <Text style={styles.title}>Welcome, Chris Fryer.</Text>
                    <Text style={styles.subTitle}>cfryerdev@gmail.com</Text>
                </View>
            </ImageBackground>
        );
    }
}
