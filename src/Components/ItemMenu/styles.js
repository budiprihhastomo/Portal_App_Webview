import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const Styles = StyleSheet.create({
  ListMenu: {
    margin: 10,
  },
  ItemMenu: {
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 5,
    height: 120,
    width: width * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MenuLogo: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginBottom: 5,
  },
  TextMenu: {
    fontSize: 12,
    textAlign: 'center',
  },
  NewMenu: {
    width: 30,
    height: 30,
    position: 'absolute',
    zIndex: 1,
    left: 1,
    top: 1,
  }
});

export default Styles;
