import { View } from 'react-native';
import BotaoSecundario from '../../components/BotaoSecundario';
import Styles from '../../components/styles/Styles';
import Titulos from '../../components/Titulo';
import LogoHome from '../../components/LogoHome';

export default function HomeB({navigation}) {
  return (
    <View style={Styles.appDefault}>
      <LogoHome />
      <Titulos>Gerencie {'\n'} sua Barbearia</Titulos>
      <BotaoSecundario text={'Agendamentos'} onPress={() => {navigation.navigate('AgendamentosB')}}/>
      <BotaoSecundario text={'Serviços'} onPress={() => {navigation.navigate('ServicosB')}}/>
      <BotaoSecundario text={'Clientes'} onPress={() => {navigation.navigate('Clientes')}}/>
      <BotaoSecundario text={'Perfil'} onPress={() => {navigation.navigate('Perfil')}}/>
    </View>
  );
}