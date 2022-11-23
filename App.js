import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Videos from './component/videos/Videos';
export default function App() {



  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Videos></Videos>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding:5,
    marginTop:20,
  }
});
