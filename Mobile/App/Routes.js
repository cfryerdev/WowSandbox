import React from 'react';
import { Text, View } from 'react-native';
import { DrawerItems, DrawerNavigator } from 'react-navigation';
import DrawerHeader from './Components/DrawerHeader';

import Login from './Layouts/Login';
import Dashboard from './Layouts/Dashboard';
import Profile from './Layouts/Profile';
import Settings from './Layouts/Settings';

const DrawerContent = (props) => (
    <View style={{ width: 250 }}>
        <DrawerHeader />
        <DrawerItems {...props} />
    </View>
);

const RootStack = DrawerNavigator({
    Login: {
        screen: Login
    },
    Dashboard: {
        screen: Dashboard
    },
    Profile: {
        screen: Profile
    },
    Settings: {
        screen: Settings
    }
}, {
    drawerWidth: 250,
    initialRouteName:'Login',
    contentComponent: DrawerContent,
});

export default RootStack;