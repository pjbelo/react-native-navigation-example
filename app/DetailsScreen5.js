// In App.js in a new project

import React from 'react';
import { Button, Image, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class DetailsScreen5 extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: 'Details5',
      headerRight: (
        <Button           
        onPress={() => navigation.navigate('MyModal')}
        title="Info"
        color="#fff" 
        />
      ),
    };
  };


  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.header_style}>Details Screen 5</Text>
        <Text>Click Info to see a Modal</Text>


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
