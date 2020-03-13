import React from 'react';
import { StyleSheet, View, Button, Text, TextInput, Image, Alert } from 'react-native';
import Styles from '../../Styles';
import TitleBar from '../../Components/TitleBar';
import StyledButton from '../../Components/StyledButton';

export default class Settings extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Settings',
        drawerIcon: ({ tintColor }) => (<Image source={require('../../Assets/Images/Settings.png')} />)
    };

    constructor(props, state) {
        super(props, state);
        this.state = { };
    }

    onPressConfirmDialog = () => {
        
    }

    render() {
        return (
            <View>
                <TitleBar title="Settings" onPress={() => { this.props.navigation.navigate('DrawerOpen'); }} />

                <View style={Styles.paddedContainer}>
                    <Text style={Styles.label}>Server Name/IP</Text>
                    <TextInput style={Styles.input}
                        placeholder="127.0.0.1"
                        onChangeText={(displayName) => this.setState({displayName})} />

                    <StyledButton onPress={this.onPressSave} 
                        text="Update" 
                        backgroundColor="#607d8b" 
                        color="#FFFFFF" 
                        clickColor="#344a54" />
                </View>
            </View>
        );
    }
  
}