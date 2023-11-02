import { View } from 'react-native';
import LogoBarbearia from '../components/LogoBarbearia';
import BotaoSecundario from '../components/BotaoSecundario';
import Styles from '../components/styles/Styles';
import Titulos from '../components/Titulos';

export default function GetStarted({ navigation }) {
  return (
    <View style={Styles.appDefault}>
      <LogoBarbearia />
      <Titulos>Bem-Vindo!</Titulos>
      <BotaoSecundario onPress={() => {navigation.navigate('LoginCliente')}} text={'Sou Cliente'}/>
      <BotaoSecundario onPress={() => {navigation.navigate('LoginBarbearia')}} text={'Sou Administrador'} />
    </View>
  );
}

