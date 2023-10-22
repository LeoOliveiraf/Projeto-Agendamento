import { Image, View } from 'react-native';
import Styles from './styles/Styles';
import homeBarbearia from '../assets/homeBarbearia.png';

export default function HomeBarbearia() {
    return (
        <View>
             <Image source={homeBarbearia} />  
        </View>
    )
          
}