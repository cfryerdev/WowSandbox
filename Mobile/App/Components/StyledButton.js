import React from 'react';
import { StyleSheet, TouchableHighlight, View, Text, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 20, 
        padding: 10, 
        backgroundColor: '#4caf50'
    },
    text: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
    }
});

export default class StyledButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableHighlight 
                    style={[styles.container, { backgroundColor: this.props.backgroundColor }]} 
                    onPress={this.props.onPress} 
                    underlayColor={this.props.clickColor}>
                <Text style={[styles.text, { color: this.props.color }]} >
                    {this.props.text}
                </Text>
            </TouchableHighlight>
        );
    }
  
}