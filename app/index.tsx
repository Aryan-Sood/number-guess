import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from '../screens/StartGameScreen'
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  return (
    <LinearGradient style = {styles.rootScreen} colors={["#4e0329","#ddb52f"]}>
      <ImageBackground source={require('../assets/images/background.png')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>
      <StartGameScreen/>
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