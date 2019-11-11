import React from 'react';
import {Image, ImageBackground} from 'react-native';
import {Content, View, Text} from 'native-base';
import Styles from './styles';

const SplashScreen = ({navigation}) => {
  setTimeout(() => navigation.replace('Home'), 2000)
  return (
    <View style={Styles.Content}>
      <ImageBackground
        source={require('../../Assets/Images/splash_screen.jpeg')}
        style={Styles.Background}
      />
      <Image
        source={require('../../Assets/Icons/ppkp.png')}
        style={Styles.Logo}
      />
    </View>
  );
};

export default SplashScreen;
