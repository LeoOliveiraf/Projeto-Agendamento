import { Image, View } from 'react-native';
import homeBarbearia from '../assets/imgs/homeBarbearia.png';

export default function HomeBarbearia() {
    return (
        <View>
            <Image source={homeBarbearia} style={{resizeMode: 'contain', width: 200}}/>  
        </View>
    )
          
}