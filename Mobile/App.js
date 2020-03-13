import React from 'react';
import { AppLoading, Font, Asset } from 'expo';
import { Text, Image } from 'react-native';
import Splash from './App/Layouts/Splash';
import RootStack from './App/Routes';
import { StackNavigator } from 'react-navigation';

console.disableYellowBox = true;

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      isReady: false,
    }
    Text.defaultProps.style = { fontFamily: 'Roboto_thin' };
  }
  
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto_thin': require('./App/Assets/Fonts/Roboto-Thin.ttf'),
      'Roboto_bold': require('./App/Assets/Fonts/Roboto-Bold.ttf'),
      'Roboto_medium': require('./App/Assets/Fonts/Roboto-Medium.ttf')
    });

    const imageAssets = cacheImages([
      require('./App/Assets/Images/NavigationBackground.png'),
      require('./App/Assets/Images/Logo.png'),
      require('./App/Assets/Images/Icon.png')
    ]);

    await Promise.all([...imageAssets])
      .then(() => {
        this.setState({isReady: true});
      });
  }
  
  render() {
    if (!this.state.isReady) { return <Splash />; }
    return <RootStack />;
  }
}