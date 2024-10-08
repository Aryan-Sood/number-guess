import { Text, View, StyleSheet, Dimensions } from "react-native";
import Colors from '../../constants/Colors';

function NumberContainer({children}){
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor: Colors.accent500,
        margin: deviceWidth < 380 ? 12 : 24,
        padding:deviceWidth < 380 ? 12 : 24,
        borderRadius:8,
        margin:24,
        alignItems:"center",
        justifyContent:"center"
    },

    numberText:{
        fontSize:36,
        fontFamily:'open-sans-bold',
        color:Colors.accent500,
        fontWeight:'bold'
    }

})