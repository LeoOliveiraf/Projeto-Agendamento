import { useState } from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from '../../components/styles/Styles';
import LogoBarbearia from '../../components/LogoBarbearia';
import Titulos from '../../components/Titulo';
import Inputs from '../../components/Inputs';
import BotaoEnviar from '../../components/BotaoEnviar';
import { useEffect } from 'react';

export default function LoginB({navigation}) {
  const [showPassword, setShowPassword] = useState(true);
  const [dataAdministrador, setDataCAdministrador] = useState([]);
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const changeVisibility = () => {
    setShowPassword(!showPassword);
  }

  const getAdministrador = async () => {
    try {
      const URL = "https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/Administradors";
      const options = {
        method: 'GET'
      };
      const response = await fetch(URL,options);
      const json = await response.json();
      setDataCAdministrador(json);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAdministrador();
  }, []);
  
  const entrar = () => {
    const inputLogin = login;
    const inputSenha = senha;
  
    if (dataAdministrador.length > 0) {
      const loginCorreto = dataAdministrador.some(
        (admin) => admin.login === inputLogin && admin.senha === inputSenha
      );
  
      if (loginCorreto) {
        navigation.navigate('HomeB');
      } else {
        console.log("Credenciais incorretas");
      }
    } else {
      console.log("Não há dados de administrador");
    }
  }; 

  return (
    <View style={Styles.appDefault}>
      <LogoBarbearia />
      <Titulos>Login</Titulos>
      <Inputs text={'Palavra-chave'} onChangeText={setLogin}/>
      <Text style={Styles.textInputSenha}>Senha</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          secureTextEntry={showPassword} style={Styles.input} onChangeText={setSenha}
        />
        <TouchableOpacity onPress={changeVisibility} style={{position: 'absolute', right: 0, padding: 15, paddingBottom: 45}}>
          <Icon name={showPassword ? 'eye-slash' : 'eye'} size={25} color="#CECECE" />
        </TouchableOpacity>
      </View>
      <BotaoEnviar onPress={entrar}/>
    </View>
  );
}