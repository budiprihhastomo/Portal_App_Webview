import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  Content: {
    flex: 1,
  },
  Wrapper: {
    flex: 1,
  },
  Header: {
    flex: 1,
    elevation: 20,
    overflow: 'hidden',
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
  },
  Logo: {
    height: 100,
    width: 100,
    borderRadius: 50,
    overflow: 'hidden',
    elevation: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: 200,
  },
  LogoImage: {
    width: 80,
    height: 80,
  },
  ContentMenu: {
    flex: 1,
    marginTop: 60,
    padding: 20,
  },
  HeadTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  ContentFlatList: {
    flex: 1,
    alignItems: 'center',
  },
  Footer: {
    height: 45,
    backgroundColor: '#e67e22',
    justifyContent: 'center',
    alignItems: 'center',
  },
  FooterText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Styles;
