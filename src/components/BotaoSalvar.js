import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Styles from "./styles/Styles";

export default function BotaoSalvar(props) {
    return(
        <TouchableOpacity style={styles.botaoSalvar}>
            <Text style={styles.textBotaoSalvar}>{props.children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textBotaoSalvar: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
    },
    botaoSalvar: {
        borderRadius: 30,
        width: 130,
        height: 40,
        backgroundColor: '#B9901E',
        justifyContent: 'center',
        marginTop: 20
    }
})
