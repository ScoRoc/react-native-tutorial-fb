import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import Bananas from './Components/Bananas';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
        <View style={ {marginTop: 50, marginBottom: 20} }>
          <Text style={ {marginBottom: 2} }>Hello World!</Text>
          <Text>This is the main App and Components are below.</Text>
        </View>
        <Bananas />
      </View>
    );
  }
}
