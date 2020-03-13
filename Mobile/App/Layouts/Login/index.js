import React from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';
import Styles from '../../Styles';
import TitleBar from '../../Components/TitleBar';
import StyledButton from '../../Components/StyledButton';

var styles = StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent:'center'
    },
    submitText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
    }
});

export default class Settings extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Login',
        drawerIcon: ({ tintColor }) => (<Image source={require('../../Assets/Images/Lock.png')} />)
    };

    constructor(props, state) {
        super(props, state);
        this.state = { 
            rememberMe: false
        };
    }

    componentDidMount() {
        this.setupGoogleSignin();
    }

    signIn = () => {
        
    }

    signOut = () => {

    }

    setupGoogleSignin = () => {
        
    }

    render() {
        return (
            <View style={{ height: '100%', backgroundColor: '#484848' }}>
                <TitleBar title="Login" onPress={() => { this.props.navigation.navigate('DrawerOpen'); }} />
                <View style={Styles.paddedContainer}>
                    <View style={styles.container}>
                        <Image resizeMode="contain"
                            style={{ maxWidth: '90%', marginTop: -30  }} 
                            source={require('../../Assets/Images/Logo.png')} />
                    </View>

                    <View style={[Styles.container, { marginTop: -30 } ]}>
                        <Text style={[Styles.label, { color: '#777' }]}>
                            Username
                        </Text>
                        <TextInput style={[Styles.input, { } ]}
                            placeholder="Username"
                            autoCapitalize="characters"
                            onChangeText={(username) => this.setState({username})} />

                        <Text style={[Styles.label, { color: '#777' }]}>
                            Password
                        </Text>
                        <TextInput style={[Styles.input, { } ]}
                            placeholder="Password"
                            secureTextEntry={true}
                            autoCapitalize="characters"
                            onChangeText={(password) => this.setState({password})} />

                        {/* <CheckBox
                            label='Remember Me'
                            checked={this.state.rememberMe}
                            onChange={(checked) => this.setState({ rememberMe: checked })}
                        /> */}

                        <StyledButton 
                            text="Sign In" 
                            backgroundColor="#375a7f" 
                            color="#e2e2e2" 
                            clickColor="#344a54" />
                    </View>


                </View>
            </View>
        );
    }
  
}