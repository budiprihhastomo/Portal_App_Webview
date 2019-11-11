import React from 'react';
import {Image} from 'react-native';
import {View} from 'native-base';
import Swiper from 'react-native-swiper';
import Styles from './styles';

const DATA_LIST_SLIDER = [
  {
    url:
      'https://radarlampung.co.id/wp-content/uploads/2019/02/Ilustrasi-PNS-1-1.jpeg',
  },
  {
    url:
      'https://cdn-asset.jawapos.com/wp-content/uploads/2019/01/kepala-daerah-terlalu-hati-hati-thr-pns-di-ratusan-pemda-belum-cair_m_219054-640x421.jpeg',
  },
  {
    url:
      'https://cdn2.tstatic.net/jambi/foto/bank/images/al-haris_20181015_083518.jpg',
  },
];

const Slider = props => (
  <Swiper
    style={Styles.Slider}
    showsButtons={false}
    autoplayTimeout={2.5}
    autoplay>
    {DATA_LIST_SLIDER.map((item, idx) => (
        <View key={idx}>
          <Image source={{uri: item.url}} style={Styles.ImageSlider} />
        </View>
    ))}
  </Swiper>
);

export default Slider;
