import { TouchableOpacity, Text } from 'react-native';
import Styles from './styles/Styles';

export default function BotaoSecundario({text, onPress}) {
    return(
        <TouchableOpacity style={Styles.button} onPress={onPress}>
            <Text style={Styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

