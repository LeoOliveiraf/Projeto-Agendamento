import { Text, View} from "react-native";
import Styles from "../components/styles/Styles";
import LogoSecundaria from "../components/LogoSecundaria";
import BarraDePesquisa from "../components/BarraDePesquisa";
import BotaoCadastrar from "../components/BotaoCadastrar";
import BotaoDeletar from "../components/BotaoDeletar";
import Tabela from "../components/Tabela";

export default function AgendamentoBarbearia(props) {
    return(
        <View style={Styles.appDefault}>
            <LogoSecundaria>Agendamentos</LogoSecundaria> 
            <BarraDePesquisa></BarraDePesquisa>
            <View style={{flexDirection: 'row'}}>
                <BotaoCadastrar>Agendar</BotaoCadastrar>
                <BotaoDeletar>Deletar todos</BotaoDeletar>
            </View>
            <Text style={[Styles.textLogoSecundaria, {marginTop: 30, fontSize: 25}]}>Dia 05/10/2023</Text>  
            <Tabela></Tabela>
        </View>
    )
}