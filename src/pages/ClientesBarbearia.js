import { Text, View} from "react-native";
import Styles from "../components/styles/Styles";
import LogoSecundaria from "../components/LogoSecundaria";
import BotaoCadastrar from "../components/BotaoCadastrar";
import BotaoDeletar from "../components/BotaoDeletar";
import Tabela from "../components/TabelaClientesBarbearia";

export default function ClientesBarbearia(props) {
    return(
        <View style={Styles.appDefault}>
            <LogoSecundaria>Clientes</LogoSecundaria> 
            <View style={{flexDirection: 'row', marginTop: 40, marginBottom: 30}}>
                <BotaoCadastrar>Cadastrar</BotaoCadastrar>
                <BotaoDeletar>Deletar todos</BotaoDeletar>
            </View>
            <Tabela></Tabela>
        </View>
    )
}