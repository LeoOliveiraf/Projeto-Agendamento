import { Image, Text, View } from 'react-native';
import Styles from './styles/Styles';
import logoSecundaria from '../assets/imgs/logoSecundaria.png';


export default function LogoSecundaria(props) {
    return (
        <View style={Styles.containerLogoSecundaria}>
            <Image source={logoSecundaria} style={Styles.logoSecundaria}/>
            <Text style={Styles.textLogoSecundaria}>{props.children}</Text>  
        </View>
    )
          
}