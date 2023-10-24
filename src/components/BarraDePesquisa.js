import { TextInput } from "react-native";
import Styles from "./styles/Styles";


export default function BarraDePesquisa(props) {
    return (
        <TextInput style={Styles.barraDePesquisa} placeholder="Pesquisar Agendamento" placeholderTextColor={"#1E1E1E"}>{props.children}</TextInput>
    )
}