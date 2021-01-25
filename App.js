import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HistoryTimeLine } from './app/Views/Timeline';

export default class App extends React.Component {
  render() {
    return (
      <HistoryTimeLine />
    );
  }
}

const styles = StyleSheet.create({
  backGroundColor: {
    flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#D4CAA3'
  },
});
