import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Title from '../components/ui/title';
import { useState, useEffect } from "react";
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from "@/components/ui/PrimaryButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import GuessLogItem from '../components/game/GuessLogItem';



function generateRandomNumber(min,max,exclude){
    const rndNum = Math.floor(Math.random()*(max-min)) + min;

    if (rndNum===exclude){
        return generateRandomNumber(min,max,exclude);
    }
    else{
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}){
    const initialGuess = generateRandomNumber(1,100,userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(()=>{
        if (currentGuess===userNumber){
            onGameOver(guessRounds.length);
        }
    },[currentGuess,userNumber,onGameOver])

    useEffect(()=>{
        minBoundary = 1;
        maxBoundary = 100;
    },[])

    function nextGuessHandlerFunction(direction){

        if ((direction==='lower' && currentGuess < userNumber) || (direction==='upper' && currentGuess > userNumber)){
            Alert.alert("Don't lie!","You know this is wrong...", [{text:'Sorry', style:"cancel"}]);
            return;
        }

        if (direction==='lower'){
            maxBoundary = currentGuess
        }
        else{
            minBoundary = currentGuess+1
        }
        const newRndNumber = generateRandomNumber(minBoundary,maxBoundary,-1)
        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds => [newRndNumber,...prevGuessRounds])
    }

    const guessRoundsListLength = guessRounds.length;

    return( 
    <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
            <Text>Higher or Lower?</Text>
            <View>
            <PrimaryButton onPress={nextGuessHandlerFunction.bind(this,"lower")}>
            <MaterialCommunityIcons name="minus-thick" size={24} color="white" />
            </PrimaryButton>
            <PrimaryButton onPress={nextGuessHandlerFunction.bind(this,"upper")}>
            <MaterialCommunityIcons name="plus-thick" size={24} color="white" />
            </PrimaryButton>
            </View>
            <View>
                <FlatList data={guessRounds} renderItem={(itemData)=> <GuessLogItem roundNumber={guessRoundsListLength-itemData.index} guess={itemData.item} />} keyExtractor={(item)=>item}/>
            </View>
        </View>
    </View> 
    );
}

export default GameScreen


const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:24
    },
    listContainer:{
        flex:1,
        padding:16
    }
})