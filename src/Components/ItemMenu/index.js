import React from 'react';
import {Image} from 'react-native';
import {View, Text} from 'native-base';
import Ripple from 'react-native-material-ripple';
import Styles from './styles';

const ItemMenu = props => (
  <View style={Styles.ListMenu}>
    <Ripple style={Styles.ItemMenu} rippleColor="#e67e22">
      {
        props.isNew ? <Image source={require('../../Assets/Icons/new.gif')} style={Styles.NewMenu} /> : null
      }
      <Image source={props.logo} style={Styles.MenuLogo} />
      <Text style={Styles.TextMenu}>{props.title}</Text>
    </Ripple>
  </View>
);

export default ItemMenu;
