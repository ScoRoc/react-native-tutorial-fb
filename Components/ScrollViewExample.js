import React, { Component } from 'react';
import { ScrollView, StyleSheet, Image, Text } from 'react-native';

export default class ScrollViewExample extends Component {
  render() {
    return (
      <ScrollView style={styles.scroll} pagingEnabled={true} maximumZoomScale={15} minimumZoomScale={1}>
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

const styles = StyleSheet.create({
  scroll: {
    height: 300,
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 5,
    marginRight: 5
  }
})
