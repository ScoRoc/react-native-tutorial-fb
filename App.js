import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import Bananas from './Components/Bananas';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
        <Text>Hello World!</Text>
        <Bananas />
      </View>
    );
  }
}
