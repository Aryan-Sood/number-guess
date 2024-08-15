import PrimaryButton from "@/components/ui/PrimaryButton";
import Title from "@/components/ui/title";
import Colors from "@/constants/Colors";
import { Image, StyleSheet, Text, View } from "react-native";

function GameOver({roundsNumber, userNumber, onStartNewGame}){
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/images/success.png')}/>
            </View>
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text  style={styles.highlight}>{userNumber}</Text></Text>
            <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
        </View>
    );
}


export default GameOver;

const styles = StyleSheet.create({
    imageContainer:{
        borderRadius:150,
        height:300,
        width:300,
        borderWidth:3,
        borderColor:Colors.primary800,
        overflow:"hidden",
        margin:36
    },
    image:{
        width:"100%",
        height:"100%"
    },
    rootContainer:{
        flex:1,
        padding:24,
        justifyContent:"center",
        alignItems:"center"
    },
    summaryText:{
        fontFamily:'open-sans',
        fontSize:24,
        textAlign:"center",
        marginBottom:24
    },
    highlight:{
        fontFamily:'open-sans-bold',
        color:Colors.primary500
    }
})