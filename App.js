import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import JobScreen from './screens/JobScreen';
import HomeScreen from './screens/HomeScreen';
import ApartmentScreen from './screens/ApartmentScreen';
import CosmeticScreen from './screens/CosmeticScreen';
import EventScreen from './screens/EventScreen';
import RegisterScreen from './screens/RegisterScreen';
import DetailScreen from './screens/DetailScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Job: {screen: JobScreen},
  Apartment: {screen: ApartmentScreen},
  Cosmetic: {screen: CosmeticScreen},
  Event: {screen: EventScreen},
  Register: {screen: RegisterScreen},
  Detail: {screen: DetailScreen}
});


const App = createAppContainer(MainNavigator);

export default App;