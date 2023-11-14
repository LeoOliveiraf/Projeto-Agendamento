import { View} from "react-native";
import Styles from "../../components/styles/Styles";
import LogoBarbearia from "../../components/LogoBarbearia";
import Titulos from '../../components/Titulo';
import Inputs from '../../components/Inputs';
import BotaoEnviar from "../../components/BotaoEnviar";
import { useEffect } from "react";
import { useState } from "react";


export default function LoginC({ navigation }) {
    const [dataClientes, setDataClientes] = useState([]);
    const [nome, setNome] = useState('');
    const [celular, setCelular] = useState('');

    const getClientes = async () => {
    try {
        const URL = "https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/Clientes";
        const response = await fetch(URL);
        const json = await response.json();
        console.log("Cliente: ",dataClientes);
        setDataClientes(json);
    } catch (error) {
        console.error(error);
    }
    };

    useEffect(() => {
    getClientes();
    }, []);

    const entrar = () => {
        const inputNome = nome;
        const inputCelular = celular;
      
        if (dataClientes.length > 0) {
          const loginCorreto = dataClientes.some(
            (admin) => admin.nome === inputNome && admin.telefone === inputCelular
          );
      
          if (loginCorreto) {
            navigation.navigate('HomeC')
          } else {
            console.log("Credenciais incorretas");
          }
        } else {
          console.log("Não há dados de Cliente");
        }
    }

    return(
        <View style={Styles.appDefault}>
            <LogoBarbearia />
            <Titulos>Login</Titulos>
            <Inputs text={'Nome'} onChangeText={setNome}/>
            <Inputs text={'Celular (com DDD)'} onChangeText={setCelular}/>
            <BotaoEnviar onPress={entrar}/>
        </View>
    )
}