import { TextInput, TouchableOpacity, View } from "react-native";
import Styles from "./styles/Styles";
import Icon from "react-native-vector-icons/FontAwesome";


export default function BarraDePesquisa(props) {
    return(
        <View>
            <TextInput style={Styles.barraDePesquisa} placeholder="Pesquisar Agendamento" placeholderTextColor={"#1E1E1E"}>{props.children}</TextInput>
            <TouchableOpacity style={Styles.botaoBarraPesquisa}>
                <Icon name="search" size={18} color="#FFF" style={Styles.icon} />
            </TouchableOpacity>
            
        </View>
    )
} 