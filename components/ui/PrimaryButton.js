import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from '../../constants/Colors';

function PrimaryButton({children, onPress}){

    return (
        <View style={styles.ButtonOuterContainer}>
        <Pressable style={({pressed}) => 
            pressed ? [styles.ButtonInnerContainer, pressed] : styles.ButtonInnerContainer}
            android_ripple={{color:Colors.primary600}}
            onPress={onPress}>
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
        </View>
    );
}

export default PrimaryButton;


const styles = StyleSheet.create({

    buttonOuterContainer:{
        borderRadius:28,
        margin:4,
        overflow:"hidden"
    },
    ButtonInnerContainer:{
        backgroundColor:Colors.primary500,
        paddingVertical:8,
        borderRadius:20,
        paddingHorizontal:16,
        elevation:2,
        marginVertical:5,
    },
    buttonText:{
        color:'white',
        textAlign:"center"
    },
    pressed:{
        opacity:0.75
    }
})