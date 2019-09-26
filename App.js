import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import JobScreen from './screens/JobScreen';
import HomeScreen from './screens/HomeScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Job: {screen: JobScreen},
});


const App = createAppContainer(MainNavigator);

export default App;