import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import JobScreen from './screens/JobScreen';
import HomeScreen from './screens/HomeScreen';
import ApartmentScreen from './screens/ApartmentScreen';
import CosmeticScreen from './screens/CosmeticScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Job: {screen: JobScreen},
  Apartment: {screen: ApartmentScreen},
  Cosmetic: {screen: CosmeticScreen}
});


const App = createAppContainer(MainNavigator);

export default App;