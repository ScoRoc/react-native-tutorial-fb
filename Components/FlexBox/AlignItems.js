import React, { Component } from 'react';
import { View } from 'react-native';

export default class JustifyContent extends Component {
  render() {
    return (
      <View style={ {flex: 1,
        flexDirection: 'row',
        height: 300,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 25,
        borderWidth: 1,
        borderColor: 'black'
      } }>
        <View style={ {width: 50, height: 50, backgroundColor: 'powderblue'} } />
        <View style={ {width: 50, height: 50, backgroundColor: 'skyblue'} } />
        <View style={ {width: 50, height: 50, backgroundColor: 'steelblue'} } />
      </View>
    );
  }
}
