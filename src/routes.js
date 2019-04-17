import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainScreen from '~/pages/Main';

const AppNavigator = createStackNavigator(
  {
    Home: MainScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#3EC28F',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const Routes = createAppContainer(AppNavigator);

export default Routes;
