// In App.js in a new project

import React from 'react';
import { Button, Image, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class SettingsScreen extends React.Component {

  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.header_style}>Settings Screen</Text>
        <Button
          title="Go to Details4"
          onPress={() => this.props.navigation.navigate('Details4')}
        />
        <Button
          title="Go to Details5"
          onPress={() => this.props.navigation.navigate('Details5')}
        />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  header_style: {
    padding: 10,
    fontSize: 18,
    height: 44,
    fontWeight: 'bold',
  },
});
