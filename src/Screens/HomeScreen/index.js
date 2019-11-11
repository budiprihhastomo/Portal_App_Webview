import React from 'react';
import {Image, FlatList, SafeAreaView} from 'react-native';
import {Content, View, Text} from 'native-base';
import RunningText from 'react-native-text-ticker';
import Styles from './styles';

// Import : Component
import ItemMenu from '../../Components/ItemMenu/index';
import Slider from '../../Components/Slider/index';

const DATA_LIST_MENU = [
  {
    title: 'Reset Password AD',
    logo: require('../../Assets/Icons/ECM.png'),
    new: true,
  },
  {title: 'E-Mail', logo: require('../../Assets/Icons/administration.jpg')},
  {
    title: 'Knowledge Management',
    logo: require('../../Assets/Icons/resetad.png'),
  },
  {
    title: 'SBS Operation Excellent',
    logo: require('../../Assets/Icons/sox.png'),
    new: true,
  },
  {title: 'Service Desk TI', logo: require('../../Assets/Icons/heskti.jpg')},
  {
    title: 'Travel & Management (Ramco)',
    logo: require('../../Assets/Icons/grey.png'),
    new: true,
  },
  {title: 'Elipse-SBS', logo: require('../../Assets/Icons/grey.png')},
  {title: 'Elipse-SBS', logo: require('../../Assets/Icons/grey.png')},
];

const HomeScreen = props => {
  return (
    <Content style={Styles.Content}>
      <View style={Styles.Wrapper}>
        <View style={Styles.Header}>
          <Slider />
        </View>
        <View style={Styles.Logo}>
          <Image
            source={require('../../Assets/Icons/arsip.png')}
            style={Styles.LogoImage}
          />
        </View>
        <View style={Styles.ContentMenu}>
          <RunningText
            style={{fontSize: 20}}
            shouldAnimateTreshold={50}
            duration={5000}
            animationType="scroll"
            marqueeDelay={3000}>
            Selamat Datang di Aplikasi Web Portal
          </RunningText>
          <Text style={Styles.HeadTitle}>Daftar Menu</Text>
          <SafeAreaView style={{flex: 1}}>
            <FlatList
              contentContainerStyle={Styles.ContentFlatList}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              data={DATA_LIST_MENU}
              renderItem={({item}) => (
                <ItemMenu
                  title={item.title}
                  logo={item.logo}
                  isNew={item.new && true}
                />
              )}
              keyExtractor={item => item.title}
            />
          </SafeAreaView>
        </View>
      </View>
      <View style={Styles.Footer}>
        <Text style={Styles.FooterText}>2019 &copy; Webportal_helpdesk</Text>
      </View>
    </Content>
  );
};

export default HomeScreen;
