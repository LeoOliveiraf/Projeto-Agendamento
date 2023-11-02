import { View } from 'react-native';
import BotaoSecundario from '../components/BotaoSecundario';
import Styles from '../components/styles/Styles';
import Titulos from '../components/Titulo';
import LogoHome from '../components/LogoHome';

export default function HomeBarbearia({navigation}) {
  return (
    <View style={Styles.appDefault}>
      <LogoHome />
      <Titulos>Gerencie {'\n'} sua Barbearia</Titulos>
      <BotaoSecundario text={'Agendamentos'} onPress={() => {navigation.navigate('AgendamentoBarbearias')}}/>
      <BotaoSecundario text={'Serviços'} onPress={() => {navigation.navigate('ServicosBarbearia')}}/>
      <BotaoSecundario text={'Clientes'} onPress={() => {navigation.navigate('ClientesBarbearia')}}/>
      <BotaoSecundario text={'Perfil'}  onPress={() => {navigation.navigate('PerfilBarbearia')}}/>
    </View>
  );
}