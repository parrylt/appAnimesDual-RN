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

export default function Yuyu() {
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
        source={require('../assets/yuyu/backYuyu.jpg')}
        style={styles.backgroundImage}
      />

      <View style={styles.containerLogo}>
        <Image
          source={require('../assets/yuyu/yuyuLogo.png')}
          style={styles.icone}
        />
      </View>

      <ScrollView>
        <View style={styles.containerImagemPrincipal}>
          <Image
            source={require('../assets/yuyu/yuyu1.jpeg')}
            style={styles.principal}
          />
        </View>

        <View style={styles.containerTexto}>
          <Text style={styles.sinopse}>
            {'    '}Yu Yu Hakusho segue a história de Yusuke Urameshi, um
            delinquente que, num ato incaracterístico de altruísmo, é atropelado
            por um carro e morto em uma tentativa de salvar uma criança,
            empurrando-o para fora do caminho. Seu fantasma é recebido por
            Botan, que se apresenta como a navegante do rio Sanzu, que
            transporta as almas para o submundo ou Mundo Espiritual (霊界
            Reikai), onde elas podem ser julgadas pela vida após a morte. Botan
            informa Yusuke que seu ato pegou até mesmo o submundo de surpresa e
            que ainda não havia um lugar feito para ele seja no céu ou inferno.
            Assim, Koenma, filho do governante do submundo Enma, oferece a
            Yusuke uma chance de retornar ao seu corpo através de uma série de
            testes. Yusuke sucede com a ajuda de seus amigos Keiko Yukimura e
            Kazuma Kuwabara. Depois de voltar à vida, Koenma concede a Yusuke o
            título de "Detetive Sobrenatural" (霊界探偵 Reikai Tantei, lit.
            "Detetive do mundo espiritual"), encarregando-o de investigar
            atividades sobrenaturais dentro do mundo humano (人間界 Ningen Kai).
            {'    '}
          </Text>
        </View>

        <View style={styles.containerTitulo}>
          <Text style={styles.tituloAnime}> Personagens </Text>
        </View>

        <View style={styles.containerPerso}>
          <View style={styles.containerInfo}>
            <View style={styles.containerNomePerso}>
              <Text style={styles.tituloPerso}>Yusuke Urameshi</Text>
            </View>
            <View style={styles.containerIdade}>
              <Text style={styles.txtIdade}>Idade: 14 anos</Text>
            </View>
            <View style={styles.containerPoder}>
              <Text style={styles.txtPoder}>Poder: Leigan</Text>
            </View>
          </View>

          <Image
            source={require('../assets/yuyu/urameshi.png')}
            style={styles.imgPerso}
          />
        </View>

        <View style={styles.containerPerso2}>
          <View style={styles.containerInfo2}>
            <View style={styles.containerNomePerso2}>
              <Text style={styles.tituloPerso2}>Kazuma Kuwabara</Text>
            </View>
            <View style={styles.containerIdade2}>
              <Text style={styles.txtIdade2}>Idade: 14 anos</Text>
            </View>
            <View style={styles.containerPoder2}>
              <Text style={styles.txtPoder2}>Poder: Leiken</Text>
            </View>
          </View>

          <Image
            source={require('../assets/yuyu/kuwabara.png')}
            style={styles.imgPerso2}
          />
        </View>

        <View style={styles.containerPerso3}>
          <View style={styles.containerInfo3}>
            <View style={styles.containerNomePerso3}>
              <Text style={styles.tituloPerso3}>Kurama Youko</Text>
            </View>
            <View style={styles.containerIdade3}>
              <Text style={styles.txtIdade3}>Idade: 1000 anos</Text>
            </View>
            <View style={styles.containerPoder3}>
              <Text style={styles.txtPoder3}>Poder: Chicote de Rosas</Text>
            </View>
          </View>

          <Image
            source={require('../assets/yuyu/Kurama1.png')}
            style={styles.imgPerso3}
          />
        </View>

        <View style={styles.containerPerso4}>
          <View style={styles.containerInfo4}>
            <View style={styles.containerNomePerso4}>
              <Text style={styles.tituloPerso4}>Hiei</Text>
            </View>
            <View style={styles.containerIdade4}>
              <Text style={styles.txtIdade4}>Idade: Desconhecida</Text>
            </View>
            <View style={styles.containerPoder4}>
              <Text style={styles.txtPoder4}>Poder: Jagan</Text>
            </View>
          </View>

          <Image
            source={require('../assets/yuyu/hiei.png')}
            style={styles.imgPerso4}
          />
        </View>

        <View style={styles.containerTitulo}>
          <Text style={styles.tituloAnime}>
            A Primeira Abertura{'\n'}Hohoemi no Bakudan
          </Text>
        </View>

        <View style={styles.containerVideo}>
          <Video
            ref={videoRef}
            source={require('../assets/yuyu/yuyuAbertura.mp4')}
            style={{
              width: 385,
              height: 250,
              marginLeft: 20,
              marginRight: 20,
              marginBottom: 10,
            }}
            resizeMode="cover"
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
    elevation: 3,
    zIndex: 1,
  },
  icone: {
    marginTop: 10,
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
    width: 200,
    borderRadius: 45,
    elevation: 0,
    zIndex: 5,
  },
  tituloPerso: {
    borderRadius: 45,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 180,
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
    width: 190,
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
    marginLeft: 225,
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
    width: 100,
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
    backgroundColor: 'rgba(255, 125, 0, 0.98)',
    justifyContent: 'center',
    width: 230,
    borderRadius: 45,
    elevation: 0,
    zIndex: 5,
  },
  tituloPerso2: {
    borderRadius: 45,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 160,
    fontSize: 20.5,
    fontFamily: 'Poppins_400Regular',
    paddingTop: 10,
    color: 'Black',
    width: 360,
    height: 50,
  },
  containerIdade2: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 125, 0, 0.98)',
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
    marginLeft: 215,
    fontSize: 20.5,
    fontFamily: 'Poppins_400Regular',
    paddingTop: 10,
    color: 'Black',
    width: 360,
    height: 50,
  },
  containerPoder2: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 125, 0, 0.98)',
    justifyContent: 'center',
    width: 190,
    borderRadius: 45,
    marginTop: 35,
    elevation: 0,
    zIndex: 5,
  },
  txtPoder2: {
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
  imgPerso2: {
    margin: 20,
    marginRight: 240,
    marginTop: -140,
    resizeMode: 'cover',
    width: 170,
    height: 350,
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
    backgroundColor: 'rgba(174, 0, 56, 0.98)',
    justifyContent: 'center',
    width: 200,
    borderRadius: 45,
    elevation: 0,
    zIndex: 5,
  },
  tituloPerso3: {
    borderRadius: 45,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 205,
    fontSize: 20.5,
    fontFamily: 'Poppins_400Regular',
    paddingTop: 10,
    color: 'Black',
    width: 360,
    height: 50,
  },
  containerIdade3: {
    alignItems: 'center',
    backgroundColor: 'rgba(174, 0, 56, 0.98)',
    justifyContent: 'center',
    width: 210,
    borderRadius: 45,
    marginTop: 35,
    elevation: 0,
    zIndex: 5,
  },
  txtIdade3: {
    borderRadius: 45,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 185,
    fontSize: 20.5,
    fontFamily: 'Poppins_400Regular',
    paddingTop: 10,
    color: 'Black',
    width: 360,
    height: 50,
  },
  containerPoder3: {
    alignItems: 'center',
    backgroundColor: 'rgba(174, 0, 56, 0.98)',
    justifyContent: 'center',
    width: 275,
    borderRadius: 45,
    marginTop: 35,
    marginLeft: 40,
    elevation: 0,
    zIndex: 5,
  },
  txtPoder3: {
    borderRadius: 45,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 105,
    fontSize: 20.5,
    fontFamily: 'Poppins_400Regular',
    paddingTop: 10,
    color: 'Black',
    width: 350,
    height: 50,
  },
  imgPerso3: {
    margin: 20,
    marginLeft: 240,
    marginTop: -140,
    resizeMode: 'cover',
    width: 170,
    height: 350,
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
    width: 71,
    borderRadius: 45,
    elevation: 0,
    zIndex: 5,
  },
  tituloPerso4: {
    borderRadius: 45,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 323,
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
    width: 255,
    borderRadius: 45,
    marginTop: 35,
    elevation: 0,
    zIndex: 5,
  },
  txtIdade4: {
    borderRadius: 45,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 140,
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
    width: 180,
    borderRadius: 45,
    marginTop: 35,
    marginLeft: 20,
    elevation: 0,
    zIndex: 5,
  },
  txtPoder4: {
    borderRadius: 45,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 220,
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
    width: 170,
    height: 350,
  },
  containerVideo: {
    flex: 1,
    backgroundColor: 'rgba(35, 150, 48, 0.0)',
    justifyContent: 'center',
    alignItems: 'center',
    width: 370,
    marginLeft: 20,
    marginBottom: 30,
    padding: 20,
  },
});
