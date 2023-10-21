import React, { useRef, useEffect } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { useFonts, Boogaloo_400Regular } from '@expo-google-fonts/boogaloo';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Video } from 'expo-av';
import { useFocusEffect } from '@react-navigation/native';

export default function Home() {
  const videoRef = React.useRef(null);

  useFocusEffect(
    React.useCallback(() => {
      if (videoRef.current) {
        videoRef.current.playAsync();
      }
      return () => {
        if (videoRef.current) {
          videoRef.current.pauseAsync();
        }
      };
    }, [])
  );

  let [fontsLoaded, fontError] = useFonts({
    Boogaloo_400Regular,
    Poppins_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={require('../assets/home/yuyuEnding.mp4')}
        style={styles.backgroundVideo}
        rate={1}
        shouldPlay={true}
        isLooping={true}
        volume={10}
        muted={true}
        resizeMode="cover"
      />

      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>
          {' '}
          Yoshihiro Togashi:{'\n'}O criador de Yu Yu Hakusho e HunterxHunter{' '}
        </Text>
      </View>


        <Image
          source={require('../assets/home/Yoshihiro-togashi.png')}
          style={styles.principal}
        />

        <Image
          source={require('../assets/home/gonHome.png')}
          style={styles.gonHome}
        />

       <Image
          source={require('../assets/home/yusukehome.png')}
          style={styles.yusukeHome}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
  },
  containerTitulo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginLeft: 15,
    marginRight: 10,
    marginBottom: 20,
    backgroundColor: 'rgba(35, 150, 48, 0.8)',
    borderRadius: 45,
    elevation: 3,
    zIndex: 1,
    width: 360
  },
  titulo: {
    padding: 10,
    color: 'Black',
    fontSize: 20,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
  },
  principal: {
    marginTop: 150,
    marginLeft: 95,
    width: 200,
    height: 300,
    borderRadius: 220,
    zIndex: 1,
  },
   gonHome: {
    marginLeft: 185,
    marginTop: -205,
    width: 230,
    height: 375,
    zIndex: 3
  },
   yusukeHome: {
    marginLeft: -75,
    marginTop: -285,
    width: 300,
    height: 300,
    zIndex: 2
  },
});