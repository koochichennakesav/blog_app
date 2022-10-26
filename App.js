import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screen/IndexScreen';
import { Provider } from './src/context/BlogContext';
import CreateScreen from './src/screen/CreateScreen';
import ShowScreen from './src/screen/ShowScreen';
import EditScreen from './src/screen/EditScreen';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Create: CreateScreen,
    Show: ShowScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
    }
  });
const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
}