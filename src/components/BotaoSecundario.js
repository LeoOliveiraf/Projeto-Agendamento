import { TouchableOpacity, Text } from 'react-native';
import Styles from './styles/Styles';

export default function BotaoSecundario(props) {
    return(
        <TouchableOpacity style={Styles.button}>
            <Text style={Styles.text}>{props.children}</Text>
        </TouchableOpacity>
    )
}

