import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const Styles = StyleSheet.create({
  Slider: {
    height: 250,
  },
  ImageSlider: {
    width: width,
    height: 250,
  },
});

export default Styles;
