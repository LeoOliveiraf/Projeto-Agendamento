import { View } from 'react-native';
import LogoBarbearia from '../components/LogoBarbearia';
import BotaoSecundario from '../components/BotaoSecundario';
import Styles from '../components/styles/Styles';
import Titulos from '../components/Titulo';

export default function GetStarted() {
  
  return (
    <View style={Styles.appDefault}>
      <LogoBarbearia/>
      <Titulos>Bem-Vindo!</Titulos>
      <BotaoSecundario>Sou Cliente</BotaoSecundario>
      <BotaoSecundario>Sou Administrador</BotaoSecundario>
    </View>
  );
}

