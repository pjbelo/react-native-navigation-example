// In App.js in a new project

import React from 'react';
import { Button, Image, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.header_style}>React Native Navigation Examples</Text>
        <Text>using react-navigation package</Text>
        <Text>- - -</Text>
        <Text>This App is based on tutorials from:</Text>
        <Text>https://reactnavigation.org/</Text>
        <Text>- - -</Text>
        <Text style={styles.header_style}>Home Screen</Text>
        <Button
          title="Go to Details1"
          onPress={() => this.props.navigation.navigate('Details1')}
        />
        <Button
          title="Go to Details2"
          onPress={() => {
            /* 1. Navigate to the Details2 route with params */
            this.props.navigation.navigate('Details2', {
              titleParam: 'Title2',
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
        <Button
          title="Go to Details3"
          onPress={() => this.props.navigation.navigate('Details3')}
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
