import React from 'react';
import { Button, Image, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen'
import SettingsScreen from './SettingsScreen'
import DetailsScreen1 from './DetailsScreen1'
import DetailsScreen2 from './DetailsScreen2'
import DetailsScreen3 from './DetailsScreen3'
import DetailsScreen4 from './DetailsScreen4'
import DetailsScreen5 from './DetailsScreen5'
import ModalScreen from './ModalScreen'

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details1: DetailsScreen1,
    Details2: DetailsScreen2,
    Details3: DetailsScreen3,
  },
  {
    initialRouteName: 'Home',
    /* Sharing common navigationOptions across screens */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f451',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
    Details4: DetailsScreen4,
    Details5: DetailsScreen5,
  },
  {
    initialRouteName: 'Settings',
    /* Sharing common navigationOptions across screens */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f451',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);


const RootStack = createStackNavigator(
  {
    MySettings: {
      screen: SettingsStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);


const BottomMenu = createBottomTabNavigator(
  {
    HomeTab: HomeStack,
    SettingsTab: RootStack,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'HomeTab') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'SettingsTab') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default class MyNavigation extends React.Component {
  render() {
    return (
          <BottomMenu/>
    );
  }
}
  
