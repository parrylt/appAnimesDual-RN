import React, { useState, useRef } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  Button,
} from 'react-native';
import { useFonts, Boogaloo_400Regular } from '@expo-google-fonts/boogaloo';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Video } from 'expo-av';
import { useFocusEffect } from '@react-navigation/native';

export default function Hxh() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      if (videoRef.current && !isPlaying) {
        videoRef.current.playAsync();
        setIsPlaying(true);
      }
      return () => {
        if (videoRef.current && isPlaying) {
          videoRef.current.stopAsync();
          setIsPlaying(false);
        }
      };
    }, [isPlaying]
  ));

  const vemVideo = async () => {
    if (isPlaying) {
      await videoRef.current.stopAsync();
    } else {
      await videoRef.current.playAsync();
    }

    setIsPlaying(!isPlaying);
  };

  let [fontsLoaded, fontError] = useFonts({
    Boogaloo_400Regular,
    Poppins_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/hxh/backHxh.jpg')}
        style={styles.backgroundImage}
      />

      <View style={styles.containerLogo}>
        <Image
          source={require('../assets/hxh/hxhLogo.png')}
          style={styles.icone}
        />
      </View>

      <ScrollView>
        <View style={styles.containerImagemPrincipal}>
          <Image
            source={require('../assets/hxh/hxh1.png')}
            style={styles.principal}
          />
        </View>

        <View style={styles.containerTexto}>
          <Text style={styles.sinopse}>
            {'    '}Hunter x Hunter" é uma série de anime e mangá que segue as
            aventuras de Gon Freecss, um jovem corajoso e determinado que aspira
            a se tornar um Hunter. Os Hunters são indivíduos licenciados com
            habilidades excepcionais e autoridade especial em várias áreas,
            desde caçadores de tesouros até caçadores de criminosos e criaturas
            misteriosas. Gon descobre que seu pai, Ging Freecss, um lendário
            Hunter, o abandonou quando ele era apenas um bebê para seguir seus
            próprios sonhos como caçador. Determinado a seguir os passos de seu
            pai e encontrar respostas sobre seu paradeiro, Gon decide se tornar
            um Hunter. Ele faz amizade com outros aspirantes a Hunter, incluindo
            Killua Zoldyck, Kurapika e Leorio Paradinight. Juntos, eles
            enfrentam desafios incríveis, incluindo a prova de Hunter, que testa
            sua força, inteligência e habilidades de sobrevivência.{'    '}
          </Text>
        </View>

        <View style={styles.containerTitulo}>
          <Text style={styles.tituloAnime}> Personagens </Text>
        </View>

        <View style={styles.containerPerso}>
          <View style={styles.containerInfo}>
            <View style={styles.containerNomePerso}>
              <Text style={styles.tituloPerso}>Gon Freecss</Text>
            </View>
            <View style={styles.containerIdade}>
              <Text style={styles.txtIdade}>Idade: 12 anos</Text>
            </View>
            <View style={styles.containerPoder}>
              <Text style={styles.txtPoder}>Poder: Janken</Text>
            </View>
          </View>

          <Image
            source={require('../assets/hxh/gon.png')}
            style={styles.imgPerso}
          />
        </View>

        <View style={styles.containerPerso2}>
          <View style={styles.containerInfo2}>
            <View style={styles.containerNomePerso2}>
              <Text style={styles.tituloPerso2}>Killua Zoldyck</Text>
            </View>
            <View style={styles.containerIdade2}>
              <Text style={styles.txtIdade2}>Idade: 12 anos</Text>
            </View>
            <View style={styles.containerPoder2}>
              <Text style={styles.txtPoder2}>Poder: Eletricidade</Text>
            </View>
          </View>

          <Image
            source={require('../assets/hxh/Killua.png')}
            style={styles.imgPerso2}
          />
        </View>

        <View style={styles.containerPerso3}>
          <View style={styles.containerInfo3}>
            <View style={styles.containerNomePerso3}>
              <Text style={styles.tituloPerso3}>Kurapika</Text>
            </View>
            <View style={styles.containerIdade3}>
              <Text style={styles.txtIdade3}>Idade: 17 anos</Text>
            </View>
            <View style={styles.containerPoder3}>
              <Text style={styles.txtPoder3}>Poder: Corrente</Text>
            </View>
          </View>

          <Image
            source={require('../assets/hxh/kurapika.png')}
            style={styles.imgPerso3}
          />
        </View>

        <View style={styles.containerPerso4}>
          <View style={styles.containerInfo4}>
            <View style={styles.containerNomePerso4}>
              <Text style={styles.tituloPerso4}>Leorio Paradinight</Text>
            </View>
            <View style={styles.containerIdade4}>
              <Text style={styles.txtIdade4}>Idade: 19 anos</Text>
            </View>
            <View style={styles.containerPoder4}>
              <Text style={styles.txtPoder4}>Poder: Projeção</Text>
            </View>
          </View>

          <Image
            source={require('../assets/hxh/leorio.png')}
            style={styles.imgPerso4}
          />
        </View>

        <View style={styles.containerTitulo}>
          <Text style={styles.tituloAnime}>
            A Primeira Abertura{'\n'}DEPARTURE
          </Text>
        </View>

        <View style={styles.containerVideo} resizeMode="cover">
          <Video
            ref={videoRef}
            source={require('../assets/hxh/hxhOpening.mp4')}
            style={{
              flex: 1,
              width: 390,
              height: 250,
              marginLeft: 20,
              marginRight: 20,
              marginBottom: 10,
            }}
            resizeMode="contain"
          />
          <Button
            title={isPlaying ? 'Pausar' : 'Reproduzir'}
            onPress={vemVideo}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: -11,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },

  containerTitulo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginLeft: 25,
    marginRight: 10,
    marginBottom: 20,
    backgroundColor: 'rgba(35, 150, 48, 0.8)',
    borderRadius: 45,
    elevation: 0,
    zIndex: 1,
  },
  icone: {
    marginTop: 20,
    marginLeft: 50,
    marginBottom: 2,
    width: 300,
    height: 130,
  },
  containerImagemPrincipal: {
    flex: 1,
    backgroundColor: 'rgba(35, 150, 48, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 25,
    paddingLeft: 10,
    paddingRight: 10,
    width: 360,
  },
  principal: {
    margin: 10,
    marginLeft: 50,
    marginRight: 50,
    resizeMode: 'cover',
    width: 350,
    height: 200,
  },
  containerTexto: {
    flex: 1,
    backgroundColor: 'rgba(35, 150, 48, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 25,
    marginBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 18,
    width: 360,
  },
  sinopse: {
    textAlign: 'justify',
    lineHeight: 22,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
    padding: 10,
    marginBottom: 20,
  },
  tituloAnime: {
    marginTop: 8,
    marginBottom: 15,
    paddingTop: 10,
    color: 'Black',
    fontSize: 42,
    fontFamily: 'Boogaloo_400Regular',
  },
  containerPerso: {
    flex: 1,
    backgroundColor: 'rgba(35, 150, 48, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
    marginLeft: 25,
    marginBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 18,
    width: 360,
    zIndex: 2,
  },
  containerInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    marginLeft: 10,
    marginRight: 150,
    marginBottom: -150,
    borderRadius: 45,
    elevation: 0,
    zIndex: 5,
  },
  containerNomePerso: {
    alignItems: 'center',
    backgroundColor: 'rgba(35, 150, 48, 1)',
    justifyContent: 'center',
    width: 160,
    borderRadius: 45,
    elevation: 0,
    zIndex: 5,
  },
  tituloPerso: {
    borderRadius: 45,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 235,
    fontSize: 20.5,
    fontFamily: 'Poppins_400Regular',
    paddingTop: 10,
    color: 'Black',
    width: 360,
    height: 50,
  },
  containerIdade: {
    alignItems: 'center',
    backgroundColor: 'rgba(35, 150, 48, 1)',
    justifyContent: 'center',
    width: 180,
    borderRadius: 45,
    marginTop: 35,
    elevation: 0,
    zIndex: 5,
  },
  txtIdade: {
    borderRadius: 45,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 210,
    fontSize: 20.5,
    fontFamily: 'Poppins_400Regular',
    paddingTop: 10,
    color: 'Black',
    width: 360,
    height: 50,
  },
  containerPoder: {
    alignItems: 'center',
    backgroundColor: 'rgba(35, 150, 48, 1)',
    justifyContent: 'center',
    width: 180,
    borderRadius: 45,
    marginTop: 35,
    elevation: 0,
    zIndex: 5,
  },
  txtPoder: {
    borderRadius: 45,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 210,
    fontSize: 20.5,
    fontFamily: 'Poppins_400Regular',
    paddingTop: 10,
    color: 'Black',
    width: 360,
    height: 50,
  },
  imgPerso: {
    margin: 20,
    marginLeft: 240,
    marginTop: -140,
    resizeMode: 'cover',
    width: 130,
    height: 350,
  },
  containerPerso2: {
    flex: 1,
    backgroundColor: 'rgba(35, 150, 48, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 15,
    marginBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 18,
    width: 360,
    zIndex: 2,
  },
  containerInfo2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    marginRight: 10,
    marginLeft: 150,
    marginBottom: -150,
    borderRadius: 45,
    elevation: 0,
    zIndex: 5,
  },
  containerNomePerso2: {
    alignItems: 'center',
    backgroundColor: 'blue',
    justifyContent: 'center',
    width: 180,
    borderRadius: 45,
    elevation: 0,
    zIndex: 5,
  },
  tituloPerso2: {
    borderRadius: 45,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 215,
    fontSize: 20.5,
    fontFamily: 'Poppins_400Regular',
    paddingTop: 10,
    color: 'Black',
    width: 360,
    height: 50,
  },
  containerIdade2: {
    alignItems: 'center',
    backgroundColor: 'blue',
    justifyContent: 'center',
    width: 185,
    borderRadius: 45,
    marginTop: 35,
    elevation: 0,
    zIndex: 5,
  },
  txtIdade2: {
    borderRadius: 45,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 220,
    fontSize: 20.5,
    fontFamily: 'Poppins_400Regular',
    paddingTop: 10,
    color: 'Black',
    width: 360,
    height: 50,
  },
  containerPoder2: {
    alignItems: 'center',
    backgroundColor: 'blue',
    justifyContent: 'center',
    width: 230,
    borderRadius: 45,
    marginTop: 35,
    elevation: 0,
    zIndex: 5,
  },
  txtPoder2: {
    borderRadius: 45,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 170,
    fontSize: 20.5,
    fontFamily: 'Poppins_400Regular',
    paddingTop: 10,
    color: 'Black',
    width: 360,
    height: 50,
  },
  imgPerso2: {
    margin: 20,
    marginRight: 240,
    marginTop: -140,
    resizeMode: 'cover',
    width: 170,
    height: 420,
  },
  containerPerso3: {
    flex: 1,
    backgroundColor: 'rgba(35, 150, 48, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 25,
    marginBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 18,
    width: 360,
    zIndex: 2,
  },
  containerInfo3: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    marginLeft: 10,
    marginRight: 150,
    marginBottom: -150,
    borderRadius: 45,
    elevation: 0,
    zIndex: 5,
  },
  containerNomePerso3: {
    alignItems: 'center',
    backgroundColor: 'rgba(241, 0, 0, 0.98)',
    justifyContent: 'center',
    width: 140,
    borderRadius: 45,
    elevation: 0,
    zIndex: 5,
  },
  tituloPerso3: {
    borderRadius: 45,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 265,
    fontSize: 20.5,
    fontFamily: 'Poppins_400Regular',
    paddingTop: 10,
    color: 'Black',
    width: 360,
    height: 50,
  },
  containerIdade3: {
    alignItems: 'center',
    backgroundColor: 'rgba(241, 0, 0, 0.98)',
    justifyContent: 'center',
    width: 180,
    borderRadius: 45,
    marginTop: 35,
    elevation: 0,
    zIndex: 5,
  },
  txtIdade3: {
    borderRadius: 45,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 215,
    fontSize: 20.5,
    fontFamily: 'Poppins_400Regular',
    paddingTop: 10,
    color: 'Black',
    width: 360,
    height: 50,
  },
  containerPoder3: {
    alignItems: 'center',
    backgroundColor: 'rgba(241, 0, 0, 0.98)',
    justifyContent: 'center',
    width: 195,
    borderRadius: 45,
    marginTop: 35,
    marginLeft: 5,
    elevation: 0,
    zIndex: 5,
  },
  txtPoder3: {
    borderRadius: 45,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 200,
    fontSize: 20.5,
    fontFamily: 'Poppins_400Regular',
    paddingTop: 10,
    color: 'Black',
    width: 360,
    height: 50,
  },
  imgPerso3: {
    margin: 20,
    marginLeft: 210,
    marginTop: -140,
    resizeMode: 'cover',
    width: 180,
    height: 450,
  },
  containerPerso4: {
    flex: 1,
    backgroundColor: 'rgba(35, 150, 48, 0.0)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 15,
    marginBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 18,
    width: 360,
    zIndex: 2,
  },
  containerInfo4: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    marginRight: 10,
    marginLeft: 150,
    marginBottom: -150,
    borderRadius: 45,
    elevation: 0,
    zIndex: 5,
  },
  containerNomePerso4: {
    alignItems: 'center',
    backgroundColor: 'black',
    justifyContent: 'center',
    width: 230,
    borderRadius: 45,
    elevation: 0,
    zIndex: 5,
  },
  tituloPerso4: {
    borderRadius: 45,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 170,
    fontSize: 20.5,
    fontFamily: 'Poppins_400Regular',
    paddingTop: 10,
    color: 'white',
    width: 360,
    height: 50,
  },
  containerIdade4: {
    alignItems: 'center',
    backgroundColor: 'black',
    justifyContent: 'center',
    width: 180,
    borderRadius: 45,
    marginTop: 35,
    elevation: 0,
    zIndex: 5,
  },
  txtIdade4: {
    borderRadius: 45,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 215,
    fontSize: 20.5,
    fontFamily: 'Poppins_400Regular',
    paddingTop: 10,
    color: 'white',
    width: 360,
    height: 50,
  },
  containerPoder4: {
    alignItems: 'center',
    backgroundColor: 'black',
    justifyContent: 'center',
    width: 205,
    borderRadius: 45,
    marginTop: 35,
    marginLeft: 5,
    elevation: 0,
    zIndex: 5,
  },
  txtPoder4: {
    borderRadius: 45,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 190,
    fontSize: 20.5,
    fontFamily: 'Poppins_400Regular',
    paddingTop: 10,
    color: 'white',
    width: 360,
    height: 50,
  },
  imgPerso4: {
    margin: 20,
    marginRight: 240,
    marginTop: -140,
    resizeMode: 'cover',
    width: 220,
    height: 350,
  },
  containerVideo: {
    flex: 1,
    backgroundColor: 'rgba(35, 150, 48, 0.0)',
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    marginLeft: 8,
    marginBottom: 30,
    padding: 20,
  },
});
