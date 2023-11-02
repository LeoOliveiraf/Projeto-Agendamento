import { View} from "react-native";
import Styles from "../components/styles/Styles";
import LogoBarbearia from "../components/LogoBarbearia";
import Titulos from '../components/Titulo';
import Inputs from '../components/Inputs';
import BotaoEnviar from "../components/BotaoEnviar";
export default function LoginCliente({navigation}) {
    return(
        <View style={Styles.appDefault}>
                <LogoBarbearia />
                <Titulos>Login</Titulos>
                <Inputs>Nome</Inputs>
                <Inputs>Celular (com DDD)</Inputs>
                <BotaoEnviar onPress={() => {navigation.navigate('HomeCliente')}}/>
        </View>
    )
}