import { createRouter } from '@expo/ex-navigation';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './DetailScreen';

export default createRouter(() => ({
  home: () => HomeScreen,
  details: () => DetailScreen
}));
