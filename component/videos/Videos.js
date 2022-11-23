import { Video } from 'expo-av';
import React from 'react'
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';




export default function Videos() {
    const video = React.useRef(null);
    const secondVideo = React.useRef(null)
    const [status, setStatus ]= React.useState({});
    const [statusSecondVideo, setStatusVideo] = React.useState({});
  return (
    <View>
        <ScrollView>
      <Text>Videos</Text>
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
      {/* <Video 
        ref={secondVideo}
        style={styles.video}
        source={{uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatusVideo}
      />
      <View style={styles.buttons}>
        <Button title='play from 5s' onPress={()=>secondVideo.current.playFromPositionAsync(50000)} />
        <Button title={statusSecondVideo.isLooping ? "set to not loop" : "set to loop "} onPress={()=>secondVideo.current.setIsLoopingAsync(!status.isLooping)} />
      </View> */}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    video :{
      flex:1,
      height:200,
      alignSelf: 'stretch'
    },
    buttons:{
      margin: 16
    }
  });
  