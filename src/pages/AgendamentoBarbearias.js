import { Text, View} from "react-native";
import Styles from "../components/styles/Styles";
import LogoBarbearia from "../components/LogoBarbearia";
import Titulos from '../components/Titulos';
import Inputs from '../components/Inputs';
import BotaoEnviar from "../components/BotaoEnviar";
import LogoSecundaria from "../components/LogoSecundaria";
import { TextInput } from "react-native-gesture-handler";
import BarraDePesquisa from "../components/BarraDePesquisa";
import BotaoCadastrar from "../components/BotaoCadastrar";
import BotaoDeletar from "../components/BotaoDeletar";
export default function AgendamentoBarbearia() {
    return(
        <View style={Styles.appDefault}>
            <LogoSecundaria>Agendamentos</LogoSecundaria> 
            <BarraDePesquisa></BarraDePesquisa>
            <View style={{flexDirection: 'row'}}>
                <BotaoCadastrar>Agendar</BotaoCadastrar>
                <BotaoDeletar>Deletar todos</BotaoDeletar>
            </View>
            <Text style={Styles.textLogoSecundaria}>Teste</Text>  
        </View>
    )
}