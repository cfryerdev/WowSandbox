import React from 'react';
import { Platform, StyleSheet, TouchableHighlight, View, Text, Image } from 'react-native';
import { Subtitle, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import Constants from '../Config/Constants';

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        height: 80,
        backgroundColor: Constants.brand.backgroundColor
    }
});

export default class TitleBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header style={styles.container}>
                <Left style={{ flex:1 }}>
                    <TouchableHighlight onPress={this.props.onPress} underlayColor='#1c578e'>
                        <Image source={require('../Assets/Images/Icon.png')} />
                    </TouchableHighlight>
                </Left>
                <Body style={{ flex:1 }}>
                    <Title style={{ alignSelf: 'center', color: '#fff' }}>{ this.props.title }</Title>
                    {  
                        this.props.subTitle && 
                        <Subtitle style={{ alignSelf: 'center'}}>{ this.props.subTitle }</Subtitle> 
                    }
                </Body>
                <Right style={{flex:1}} />
            </Header>
        );
    }
  
}