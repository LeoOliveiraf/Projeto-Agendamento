import { TouchableOpacity, View } from "react-native";
import Styles from "./styles/Styles";
import Icon from "react-native-vector-icons/FontAwesome";

export default function BotaoEnviar({onPress}) {
    return(
        <View style={Styles.containerBotaoEnviar}>
             <TouchableOpacity style={Styles.botaoEnviar} onPress={onPress}>
                <Icon name='chevron-right' size={30} color='white' style={{textAlign: 'center', marginTop: 8}} />
            </TouchableOpacity>
        </View>
    )
}