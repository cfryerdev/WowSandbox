import React from 'react';
import { StyleSheet, TouchableHighlight, View, Text, Image } from 'react-native';

const styles = StyleSheet.create({
    photo: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    container: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 12,
        fontSize: 28,
    },
    body: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        flex: 1, 
        flexDirection: 'row'
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    labelText: {
        fontSize: 20,
        paddingRight: 40
    }
});

export default class OrderRowItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Image source={require('../Assets/Images/NoProfileImage.png')} style={styles.photo} />
                    <Text style={styles.text}>{this.props.order_id} -- {this.props.product}</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.label}>Name: </Text>
                    <Text style={styles.labelText}>{ this.props.person_name }</Text>

                    <Text style={styles.label}>Ordered: </Text>
                    <Text style={styles.labelText}>{ this.props.order_date }</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.label}>Delivered: </Text>
                    <Text style={styles.labelText}>{ this.props.deliver_date }</Text>

                    <Text style={styles.label}>Amount: </Text>
                    <Text style={styles.labelText}>{ this.props.amount }</Text>
                </View>
            </View>
        );
    }
  
}