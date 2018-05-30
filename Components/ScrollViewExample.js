import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';

export default class ScrollViewExample extends Component {
  render() {
    return (
      <ScrollView pagingEnabled={true} maximumZoomScale={15} minimumZoomScale={1}>
         <Text style={{fontSize:96}}>Scroll me plz</Text>
         <Text style={{fontSize:96}}>If you like</Text>
         <Text style={{fontSize:96}}>Scrolling down</Text>
         <Text style={{fontSize:96}}>What's the best</Text>
         <Text style={{fontSize:96}}>Framework around?</Text>
         <Text style={{fontSize:80}}>React Native</Text>
       </ScrollView>
    );
  }
}
