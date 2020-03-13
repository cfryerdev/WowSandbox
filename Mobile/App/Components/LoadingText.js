import React from 'react';
import { StyleSheet, TouchableHighlight, View, Text, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        paddingLeft: 10,
        fontSize: 20
    }
});

export default class LoadingText extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../Assets/Images/LoadingIcon.png')} />
                <Text style={styles.text}>Loading...</Text>
            </View>
        );
    }
  
}