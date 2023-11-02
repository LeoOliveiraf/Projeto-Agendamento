import { Text, View} from "react-native";
import Styles from "../components/styles/Styles";
import LogoSecundaria from "../components/LogoSecundaria";
import BotaoCadastrar from "../components/BotaoCadastrar";
import BotaoDeletar from "../components/BotaoDeletar";
import { useState } from "react";
import Teste from "../components/Teste";
import TabelaServicosBarbearia from "../components/TabelaServicosBarbearia";

export default function ServicosBarbearia() {
    const [modalCadastrarServico, setModalCadastrarServico] = useState(false)
    const [modalExcluirTodosServico, setModalExcluirTodosServico] = useState(false)
    const [modalEditarServico, setModalEditarServico] = useState(false)
    const [modalExcluirServico, setModalExcluirServ] = useState(false)
    return(
        <View style={Styles.appDefault}>
            <LogoSecundaria>Serviços</LogoSecundaria> 
            <View style={{flexDirection: 'row', marginTop: 40, marginBottom: 30}}>
                <BotaoCadastrar text={'Cadastrar'} onPress={() => setModalCadastrarServico(!modalCadastrarServico)}/>
                <BotaoDeletar text={'Deletar todos'} onPress={() => setModalExcluirTodosServico(!modalExcluirTodosServico)}/>
                <Teste isInput={false} isText={false} text={'Cadastrar'} textMensagem={false} key={1} visible={modalCadastrarServico} onClose={() => setModalCadastrarServico(!modalCadastrarServico)} inputModalService={true}/>
                <Teste isInput={false} isText={true} text={'Deletar Todos'} textMensagem={'Tem certeza que deseja deletar todos os serviços?'} key={2} visible={modalExcluirTodosServico} onClose={() => setModalExcluirTodosServico(!modalExcluirTodosServico)} inputModalService={false}/>
            </View>
            <TabelaServicosBarbearia onPress={() => setModalEditarServico(!modalEditarServico)} onPressDeletar={() => setModalExcluirServ(!modalExcluirServico)}/>
            <Teste isInput={false} isText={false} text={'Editar'} textMensagem={false} key={3} visible={modalEditarServico} onClose={() => setModalEditarServico(!modalEditarServico)} inputModalService={true}/>
            <Teste isInput={false} isText={true} text={'Deletar'} textMensagem={`Tem certeza que deseja deletar ‘Barba’ da lista de serviços?`} key={4} visible={modalExcluirServico} onClose={() => setModalExcluirServ(!modalExcluirServico)} inputModalService={false}/> 
        </View>
    )
}