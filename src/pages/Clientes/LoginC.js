import { View} from "react-native";
import Styles from "../../components/styles/Styles";
import LogoBarbearia from "../../components/LogoBarbearia";
import Titulos from '../../components/Titulo';
import Inputs from '../../components/Inputs';
import BotaoEnviar from "../../components/BotaoEnviar";

export default function LoginC({ navigation }) {
    return(
        <View style={Styles.appDefault}>
            <LogoBarbearia />
            <Titulos>Login</Titulos>
            <Inputs text={'Nome'} />
            <Inputs text={'Celular (com DDD)'} />
            <BotaoEnviar onPress={() => {navigation.navigate('HomeC')}}/>
        </View>
    )
}