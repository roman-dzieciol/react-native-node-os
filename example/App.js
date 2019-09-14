/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import NodeOs from 'react-native-node-os';

export default class App extends Component {
  state = {
    status: 'starting',
    message: '--',
  };

  componentDidMount() {
    this.setState({
      status: 'native callback received',
      message: '' + NodeOs.constants.priority.PRIORITY_ABOVE_NORMAL,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>☆NodeOs example☆</Text>
        <Text style={styles.instructions}>STATUS: {this.state.status}</Text>
        <Text style={styles.welcome}>☆NATIVE CALLBACK MESSAGE☆</Text>
        <Text style={styles.instructions}>{this.state.message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
