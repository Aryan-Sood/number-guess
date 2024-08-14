import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from '../screens/StartGameScreen'
import { LinearGradient } from "expo-linear-gradient";
import { useState } from 'react';
import GameScreen from '../screens/GameScreen';
import Colors from '@/constants/Colors';
import GameOver from '../screens/GameOverScreen';

export default function Index() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameisOver] = useState(true);


  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameisOver(false);
  }

  function gameOverHandler(){
    setGameisOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

  if (userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if (gameIsOver && userNumber){
    screen = <GameOver/>
  }

  return (
    <LinearGradient style = {styles.rootScreen} colors={[Colors.primary700,Colors.accent500]}>
      <ImageBackground source={require('../assets/images/background.png')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>
      <SafeAreaView style={styles.rootScreen}>
      {screen}
      </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1
  },
  backgroundImage:{
    opacity:0.15
  }
})