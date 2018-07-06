// In App.js in a new project

import React from 'react';
import { Button, Image, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class DetailsScreen2 extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params.titleParam ? params.titleParam : 'A Default Title',
    }
  };

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.header_style}>Details2 Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>...</Text>
        <Text>Click "Update the title" and</Text>
        <Text>see the Title changing</Text>
        <Text>...</Text>
        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({titleParam: 'Updated!'})}
        />
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