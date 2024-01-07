import { View, Text, StyleSheet } from 'react-native'
import * as React from 'react';
import { Video, ResizeMode } from 'expo-av';

const VideoScreen = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={{flex:1}}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        shouldPlay={true}
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
  )
}

export default VideoScreen

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
});