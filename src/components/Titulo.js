import { Text } from "react-native";
import Styles from "./styles/Styles";


export default function TextoDoTitulo(props) {
    return (
        <Text style={Styles.textoDoTitulo}>{props.children}</Text>
    )
}