import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

// Import : Screen
import Splash from './Screens/SplashScreen/index'
import Home from './Screens/HomeScreen/index'

const Navigator = createStackNavigator(
    {
        Splash,
        Home,
    },
    {
        headerMode: 'none',
        initialRouteName: 'Splash'
    }
)

export default createAppContainer(Navigator)