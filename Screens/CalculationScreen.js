import React, { Component } from 'react';
import { View, Text } from 'react-native';

class CalculationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {{backgroundColor:"#000", flex:1, justifyContent:"center", alignItems:'center'}}>
        <Text style = {{color:"#fff"}}> CalculationScreen </Text>
      </View>
    );
  }
}

export default CalculationScreen;
