import React, { Component } from 'react';
import { Dimensions, View } from 'react-native';

export default class FlexDimension extends Component {
  render() {
    let {height, width} = Dimensions.get('window');
    return (
      <View style={ {height} }>
        <View style={ {flex: 1, backgroundColor: 'powderblue'} } />
        <View style={ {flex: 2, backgroundColor: 'skyblue'} } />
        <View style={ {flex: 3, backgroundColor: 'steelblue'} } />
      </View>
    );
  }
}
