// In App.js in a new project

import React from 'react';
import { Button, Image, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';


class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../spiro.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}


export default class DetailsScreen3 extends React.Component {

  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: <LogoTitle />,
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.header_style}>Details Screen 3</Text>
        <Text>Image on headerTitle</Text>
        <Text>...</Text>
        <Text>Button on headerRight</Text>
        <Text>...</Text>

        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
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
