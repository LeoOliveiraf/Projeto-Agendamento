import { Text, TouchableOpacity } from "react-native";
import Styles from "./styles/Styles";
import Icon from "react-native-vector-icons/FontAwesome";

export default function BotaoCadastrar(props) {
    return(
        <TouchableOpacity style={Styles.botaoCadastrar}>
            <Icon name='plus' size={18} color='white' style={{textAlign: 'center', marginRight: 8}} />
            <Text style={Styles.textBotao}>{props.children}</Text>
        </TouchableOpacity>
    )
}
