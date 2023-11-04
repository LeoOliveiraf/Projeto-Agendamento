import { useState } from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from '../../components/styles/Styles';
import LogoBarbearia from '../../components/LogoBarbearia';
import Titulos from '../../components/Titulo';
import Inputs from '../../components/Inputs';
import BotaoEnviar from '../../components/BotaoEnviar';

export default function LoginB({navigation}) {
  const [showPassword, setShowPassword] = useState(true);

  const changeVisibility = () => {
    setShowPassword(!showPassword);
  }
  return (
    <View style={Styles.appDefault}>
      <LogoBarbearia />
      <Titulos>Login</Titulos>
      <Inputs text={'Palavra-chave'}/>
      <Text style={Styles.textInputSenha}>Senha</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          secureTextEntry={showPassword} style={Styles.input}
        />
        <TouchableOpacity onPress={changeVisibility} style={{position: 'absolute', right: 0, padding: 15, paddingBottom: 45}}>
          <Icon name={showPassword ? 'eye-slash' : 'eye'} size={25} color="#CECECE" />
        </TouchableOpacity>
      </View>
      <BotaoEnviar onPress={() => {navigation.navigate('HomeB')}}/>
    </View>
  );
}