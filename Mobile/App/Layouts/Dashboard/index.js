import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Header, Content, Body, Card, CardItem, Text, Icon, Right } from 'native-base';

import Styles from '../../Styles';
import TitleBar from '../../Components/TitleBar';

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row'
    }
});
export default class Home extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Dashboard',
        drawerIcon: ({ tintColor }) => (<Image source={require('../../Assets/Images/Home.png')} />)
    };

    constructor(props, state) {
        super(props, state);
        this.state = { };
    }

    render() {
        return (
            <View>
                <TitleBar title="Dashboard" subTitle="WoW Sandbox" onPress={() => { this.props.navigation.navigate('DrawerOpen'); }} />
                <View style={Styles.paddedContainer}>
                    
               
                    <Card >
                        <CardItem>
                            <Body>
                                <Text>You have no alerts or messages.</Text>
                            </Body>
                        </CardItem>
                        <CardItem footer danger button onPress={() => {} }>
                            <Text>Refresh</Text>
                        </CardItem>
                    </Card>

                </View>
            </View>
        );
    }
  
}