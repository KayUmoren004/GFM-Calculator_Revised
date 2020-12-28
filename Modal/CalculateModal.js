import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

class CalculateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <Text> CalculateModal </Text>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Text>Close</Text></TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default CalculateModal;
