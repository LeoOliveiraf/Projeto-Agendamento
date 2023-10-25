import { Text, TouchableOpacity } from "react-native";
import Styles from "./styles/Styles";
import Icon from "react-native-vector-icons/FontAwesome";

export default function BotaoDeletar(props) {
    return(
        <TouchableOpacity style={Styles.botaoDeletar}>
            <Text style={Styles.textBotao}>{props.children}</Text>
        </TouchableOpacity>
    )
}
