import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Videos from './component/videos/Videos';
import Youtubes from './component/Youtube/Youtubes';
export default function App() {



  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <ScrollView>
        {/* normal video  */}
      <Videos></Videos>
      
      {/* youtube video  */}

      <Youtubes></Youtubes>
      </ScrollView>
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
