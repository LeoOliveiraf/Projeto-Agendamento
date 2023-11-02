import { View } from 'react-native';
import BotaoSecundario from '../components/BotaoSecundario';
import Styles from '../components/styles/Styles';
import Titulos from '../components/Titulos';
import LogoHome from '../components/LogoHome';

export default function HomeBarbearia() {
  return (
    <View style={Styles.appDefault}>
      <LogoHome />
      <Titulos>Gerencie {'\n'} sua Barbearia</Titulos>
      <BotaoSecundario text={'Agendamentos'} />
      <BotaoSecundario text={'Serviços'} />
      <BotaoSecundario text={'Clientes'} />
      <BotaoSecundario text={'Perfil'} />
    </View>
  );
}