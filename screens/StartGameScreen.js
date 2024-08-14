import { TextInput, View, StyleSheet, Alert } from "react-native"
import PrimaryButton from "../components/ui/PrimaryButton";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Colors from "@/constants/Colors";

function StartGameScreen({onPickNumber}){

    const [enteredNumber, setEnteredNumber] = useState('');

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


    return (
    <>
    <StatusBar style="inverted"/>
    <View style={styles.inputContainer}>

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
    </>
    );
}


export default StartGameScreen;


const styles = StyleSheet.create({
    inputContainer:{
      justifyContent:'center',
      alignItems:'center',
      padding: 16,
      marginTop:100,
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
        color: Colors.accent500,
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
    }
  })