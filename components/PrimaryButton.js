import { Pressable, StyleSheet, Text, View } from "react-native";

function PrimaryButton({children}){
    return (
        <View style={styles.ButtonOuterContainer}>
        <Pressable style={({pressed}) => pressed ? [styles.ButtonInnerContainer, pressed] : styles.ButtonInnerContainer} android_ripple={{color:'#640233'}}>
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
        backgroundColor:'#72063c',
        paddingVertical:8,
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