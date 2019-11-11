import {StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('screen')
const Styles = StyleSheet.create({
    Content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Logo: {
        width: 150,
        height: 150,
        borderRadius: 20,
    },
    Background: {
        height: height,
        width: width,
        position: 'absolute',
        backgroundColor: '#000',
        opacity: 0.5,
        zIndex: -1,
    }
})

export default Styles