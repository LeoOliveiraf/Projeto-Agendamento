import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import Styles from "../../components/styles/Styles";
import LogoBarbearia from "../../components/LogoBarbearia";
import Titulos from '../../components/Titulo';
import Inputs from '../../components/Inputs';
import BotaoEnviar from "../../components/BotaoEnviar";
import { AuthContext } from "../../contexts/auth";

export default function LoginC({ navigation }) {
  const [dataClientes, setDataClientes] = useState([]);
  const [nome, setNome] = useState('');
  const [celular, setCelular] = useState('');

  const { signIn, setNavigation } = useContext(AuthContext);

  useEffect(() => {
    // Define a função de navegação no contexto
    setNavigation(navigation);
  }, [navigation, setNavigation]);

  function handleLogin() {
    signIn(nome, celular, dataClientes);
  }

  const getClientes = async () => {
    try {
      const URL = "https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/Clientes";
      const response = await fetch(URL);
      const json = await response.json();
      setDataClientes(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getClientes();
  }, []);

  return (
    <View style={Styles.appDefault}>
      <LogoBarbearia />
      <Titulos>Login</Titulos>
      <Inputs text={'Nome'} onChangeText={setNome} />
      <Inputs text={'Celular (com DDD)'} onChangeText={setCelular} />
      <BotaoEnviar onPress={handleLogin} />
    </View>
  );
}
