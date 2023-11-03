import { View } from 'react-native';
import BotaoSecundario from '../../components/BotaoSecundario';
import Styles from '../../components/styles/Styles';
import Titulos from '../../components/Titulo';
import LogoHome from '../../components/LogoHome';

export default function HomeB() {
  return (
    <View style={Styles.appDefault}>
      <LogoHome />
      <Titulos>Gerencie {'\n'} sua Barbearia</Titulos>
      <BotaoSecundario>Agendamentos</BotaoSecundario>
      <BotaoSecundario>Serviços</BotaoSecundario>
      <BotaoSecundario>Clientes</BotaoSecundario>
      <BotaoSecundario>Perfil</BotaoSecundario>
    </View>
  );
}