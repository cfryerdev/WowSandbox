import React from 'react';
import { StyleSheet, View, Text, TextInput, Image, Alert } from 'react-native';
import Styles from '../../Styles';
import TitleBar from '../../Components/TitleBar';
import StyledButton from '../../Components/StyledButton';

const styles = StyleSheet.create({
    submitContainer: {
        marginTop: 50, 
        padding: 20, 
        backgroundColor: '#4caf50'
    },
    submitText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
    }
});

export default class Profile extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Profile',
        drawerIcon: ({ tintColor }) => (<Image source={require('../../Assets/Images/Profile.png')} />)
    };

    constructor(props, state) {
        super(props, state);
        this.state = { };
    }

    onPressConfirmDialog = () => {
        Alert.alert(
            'Update Information',
            'Are you sure you want to update your personal information?',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        )
    }

    render() {
        return (
            <View>
                <TitleBar title="My Profile" onPress={() => { this.props.navigation.navigate('DrawerOpen'); }} />

                <View style={Styles.paddedContainer}>
                    <Text style={Styles.label}>Account Name</Text>
                    <TextInput style={Styles.input}
                        placeholder="Account Name"
                        onChangeText={(displayName) => this.setState({displayName})} />

                    <Text style={Styles.label}>Email Address</Text>
                    <TextInput style={Styles.input}
                        placeholder="Email Address"
                        onChangeText={(email) => this.setState({email})} />

                    <StyledButton onPress={this.onPressSave} 
                        text="Update Information" 
                        backgroundColor="#607d8b" 
                        color="#FFFFFF" 
                        clickColor="#344a54" />
                </View>
                
            </View>
        );
    }
  
}