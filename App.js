import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import Detail from './screens/Detail';
import EventScreen from './screens/EventScreen';
import RegisterScreen from './screens/RegisterScreen';
import DetailScreen from './screens/DetailScreen';
import DetailChurch from './screens/DetailChurch';
import ChurchListScreen from './screens/ChurchListScreen';

const MainNavigator = createStackNavigator({
  Home: HomeScreen,
  Detail,
  Event: EventScreen,
  Register: RegisterScreen,
  DetailMore: DetailScreen,
  Church: DetailChurch,
  ChurchList: ChurchListScreen
});


const App = createAppContainer(MainNavigator);

export default App;