import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import Detail from './screens/Detail';
import EventScreen from './screens/EventScreen';
import RegisterScreen from './screens/RegisterScreen';
import DetailScreen from './screens/DetailScreen';
import DetailChurch from './screens/DetailChurch';
import ChurchListScreen from './screens/ChurchListScreen';
import EventListScreen from './screens/EventListScreen';
import { Platform } from 'react-native';
import getSlideFromRightTransitionConfig from './utils/react-navigation-from-right-transition'

const screens = {
    Home: HomeScreen,
    Detail,
    Event: EventScreen,
    Register: RegisterScreen,
    DetailMore: DetailScreen,
    Church: DetailChurch,
    ChurchList: ChurchListScreen,
    EventList: EventListScreen,
};

const AppStack = Platform.OS === 'android'? createStackNavigator(screens, {
        transitionConfig: getSlideFromRightTransitionConfig
    }) 
    : createStackNavigator(screens);

export default AppStack;