import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Video } from 'expo-av';
import React from 'react';
export default function App() {

  const video = React.useRef(null);
  const secondVideo = React.useRef(null)
  const [status, setStatus ]= React.useState({});
  const [statusSecondVideo, setStatusVideo] = React.useState({});

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Video 
        ref={video}
        style={styles.video}
        source={{uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      <View style={styles.buttons}>
        <Button title='play from 5s' onPress={()=>video.current.playFromPositionAsync(50000)} />
        <Button title={status.isLooping ? "set to not loop" : "set to loop "} onPress={()=>video.current.setIsLoopingAsync(!status.isLooping)} />
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
      <Video 
        ref={secondVideo}
        style={styles.video}
        source={{uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatusVideo}
      />
      <View style={styles.buttons}>
        <Button title='play from 5s' onPress={()=>secondVideo.current.playFromPositionAsync(50000)} />
        <Button title={statusSecondVideo.isLooping ? "set to not loop" : "set to loop "} onPress={()=>secondVideo.current.setIsLoopingAsync(!status.isLooping)} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video :{
    flex:1,
    alignSelf: 'stretch'
  },
  buttons:{
    margin: 16
  }
});
