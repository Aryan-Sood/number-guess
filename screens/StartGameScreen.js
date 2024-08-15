import { TextInput, View, StyleSheet, Alert, Text, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native"
import PrimaryButton from "../components/ui/PrimaryButton";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Colors from "@/constants/Colors";
import Title from "@/components/ui/title";

function StartGameScreen({onPickNumber}){

    const [enteredNumber, setEnteredNumber] = useState('');
    const {width, height} = useWindowDimensions();

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }

    function resetInputHandler(){
        setEnteredNumber('');
    }

    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>=100 ) {
            Alert.alert('Invalid number!', 'Chose a number between 1 and 99',[{text:'Okay', style:'destructive', onPress: resetInputHandler }]);
            return;
        }

        onPickNumber(chosenNumber);

    }

    const marginTop = height < 380 ? 30 : 100;

    return (
    <>
    <StatusBar style="inverted"/>
    <ScrollView style = {styles.screen}>
    <KeyboardAvoidingView style={styles.screen} behavior="position">
    <View style={[styles.rootContainer, {marginTop:marginTop}]}>
        <Title>Guess my Number</Title>
    <View style={styles.inputContainer}>
        <Text style={styles.instructionText}>Enter a Number</Text>
        <TextInput style = {styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}/>

        <View style = {styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
        </View>
    </View>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
    </>
    );
}


export default StartGameScreen;



const styles = StyleSheet.create({
    screen:{
        flex:1
    },
    rootContainer:{
        flex:1,
        alignItems:"center"
    },
    inputContainer:{
      justifyContent:'center',
      alignItems:'center',
      padding: 16,
      marginTop:36,
      marginHorizontal:24,
      backgroundColor:Colors.primary800,
      borderRadius:8,
      elevation:4,
      shadowColor:'black',
      shadowOffset:{width: 0, height:2},
      shadowRadius:6,
      shadowOpacity:0.5
    },
    numberInput:{
        height:50,
        width:50,
        textAlign:"center",
        
        fontSize:32,
        borderBottomColor:Colors.accent500,
        borderBottomWidth:2,
        color: Colors.accent500 ,
        marginVertical:8,
        fontWeight:'bold'
    },
    buttonsContainer:{
        flexDirection:"row",
    },
    buttonContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    instructionText:{
        fontFamily:'open-sans',
        color:Colors.accent500,
        fontSize:24
    }
  })