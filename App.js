import React, { Component } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import Bananas from './Components/Bananas';
import LotsOfGreetings from './Components/LotsOfGreetings';
import BlinkWrap from './Components/BlinkWrap';
import LotsOfStyles from './Components/LotsOfStyles';
import FixedDimension from './Components/FixedDimension';
import FlexDimension from './Components/FlexDimension';
import FlexDirection from './Components/FlexBox/FlexDirection';
import JustifyContent from './Components/FlexBox/JustifyContent';
import AlignItems from './Components/FlexBox/AlignItems';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <ScrollView>
        <View style={ {marginTop: 50, marginBottom: 20} }>
          <Text style={ {marginBottom: 2} }>Hello World!</Text>
          <Text>This is the main App and Components are below.</Text>
        </View>
        <Bananas />
        <LotsOfGreetings />
        <BlinkWrap />
        <LotsOfStyles />
        <Text>Here's Fixed Dimensions:</Text>
        <FixedDimension />
        <Text>Here's Flex Dimensions:</Text>
        <FlexDimension />
        <Text>Here's layout with FlexBox:</Text>
        <FlexDirection />
        <JustifyContent />
        <AlignItems />
        <Text>Handling text input:</Text>
      </ScrollView>
    );
  }
}
