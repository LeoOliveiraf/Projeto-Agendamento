import { Text, TouchableOpacity } from "react-native";
import Styles from "./styles/Styles";
import Icon from "react-native-vector-icons/FontAwesome";

export default function BotaoDeletar({onPress, text}) {
    return(
        <TouchableOpacity style={Styles.botaoDeletar} onPress={onPress}>
            <Text style={Styles.textBotao}>{text}</Text>
        </TouchableOpacity>
    )
}
