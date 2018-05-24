import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Blink from './Blink';

export default class BlinkWrap extends Component {
  render() {
    return (
      <View style={ {height: 69} }>
        <Blink text='Lightsaber of doom!' />
        <Blink text='OMG this is killing my eyes' />
        <Blink text='Worst feature ever...blinking....' />
        <Blink text='My eyes are burning from this blinking crap' />
      </View>
    );
  }
}
