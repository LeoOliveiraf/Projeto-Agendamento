import { Image, View } from 'react-native';
import Styles from './styles/Styles';
import logoGetStarted from '../assets/logoGetStarted.png';


export default function LogoBarbearia() {
    return (
        <View>
             <Image source={logoGetStarted} style={Styles.logoBarbearia}/>  
        </View>
    )
          
}