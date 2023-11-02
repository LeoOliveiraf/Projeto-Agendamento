import { Text, View} from "react-native";
import Styles from "../components/styles/Styles";
import LogoSecundaria from "../components/LogoSecundaria";
import BotaoCadastrar from "../components/BotaoCadastrar";
import BotaoDeletar from "../components/BotaoDeletar";
import Tabela from "../components/TabelaClientesBarbearia";
import Teste from "../components/Teste";
import { useState } from "react";

export default function ClientesBarbearia(props) {
    const [modalCadastrar, setModalCadastrar] = useState(false)
    const [modalDeletar, setModalDeletar] = useState(false)
    return(
        <View style={Styles.appDefault}>
            <LogoSecundaria>Clientes</LogoSecundaria> 
            <View style={{flexDirection: 'row', marginTop: 40, marginBottom: 30}}>
                <BotaoCadastrar text={'Cadastrar'} onPress={() => setModalCadastrar(!modalCadastrar)}/>
                <BotaoDeletar text={'Deletar todos'} onPress={() => setModalDeletar(!modalDeletar)}/>
                <Teste isText={false} onClose={() => setModalCadastrar(!modalCadastrar)} visible={modalCadastrar} key={1} text={'Cadastrar'} isInput={true}/>
                <Teste isText={true} onClose={() => setModalDeletar(!modalDeletar)} visible={modalDeletar} key={2} text={'Deletar todos'} isInput={false} textMensagem={`Tem certeza que deseja \n deletar todos os clientes?`} />  
            </View>
            <Tabela />
        </View>
    )
}