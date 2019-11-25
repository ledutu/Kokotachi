import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeScreen from './screens/HomeScreen';
import Detail from './screens/Detail';
import EventScreen from './screens/EventScreen';
import DetailScreen from './screens/DetailScreen';
import DetailChurch from './screens/DetailChurch';
import ChurchListScreen from './screens/ChurchListScreen';
import EventListScreen from './screens/EventListScreen';
import { Platform } from 'react-native';
import getSlideFromRightTransitionConfig from './utils/react-navigation-from-right-transition';
import { width } from './utils/constants';
import AppDrawerContent from './components/AppDrawerContent';
import SignInScreen from './screens/SignInScreen';
import Profile from './screens/Profile';
import SignUpScreen from './screens/SignUpScreen';


const DrawerConfig = {
    drawerWidth: width * 0.7,
    contentComponent: AppDrawerContent,
    navigationOptions: {
        header: null,
    }
};

const AppDrawer = createDrawerNavigator({
    Top: HomeScreen,
}, DrawerConfig);

const screens = {
    Home: AppDrawer,
    Detail,
    Event: EventScreen,
    DetailMore: DetailScreen,
    Church: DetailChurch,
    ChurchList: ChurchListScreen,
    EventList: EventListScreen,
    SignIn: SignInScreen,
    Profile: Profile,
    SignUp: SignUpScreen,
};

const AppStack = Platform.OS === 'android'? createStackNavigator(screens, {
        transitionConfig: getSlideFromRightTransitionConfig
    }) 
    : createStackNavigator(screens);

export default AppStack;