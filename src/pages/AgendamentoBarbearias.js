import { Text, View} from "react-native";
import Styles from "../components/styles/Styles";
import LogoSecundaria from "../components/LogoSecundaria";
import BarraDePesquisa from "../components/BarraDePesquisa";
import BotaoCadastrar from "../components/BotaoCadastrar";
import BotaoDeletar from "../components/BotaoDeletar";
import Tabela from "../components/TabelaAgendamentosBarbearia";

export default function AgendamentoBarbearia(props) {
    return(
        <View style={Styles.appDefault}>
            <LogoSecundaria>Agendamentos</LogoSecundaria> 
            <BarraDePesquisa></BarraDePesquisa>
            <View style={{flexDirection: 'row', marginTop: 40, marginBottom: 30}}>
                <BotaoCadastrar>Agendar</BotaoCadastrar>
                <BotaoDeletar>Deletar todos</BotaoDeletar>
            </View>
            <Text style={[Styles.textLogoSecundaria, {fontSize: 25, marginBottom: 10, alignSelf: 'flex-start', marginLeft: 30}]}>Dia 05/10/2023</Text>  
            <Tabela></Tabela>
        </View>
    )
}