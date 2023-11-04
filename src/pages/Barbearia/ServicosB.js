import { SafeAreaView, ScrollView, Text, View} from "react-native";
import Styles from "../../components/styles/Styles";
import LogoSecundaria from "../../components/LogoSecundaria";
import BotaoCadastrar from "../../components/BotaoCadastrar";
import BotaoDeletar from "../../components/BotaoDeletar";
import { useState } from "react";
import Modal from "../../components/Modal";
import TabelaServicosBarbearia from "../../components/TabelaServicosBarbearia";

export default function ServicosB() {
    const [modalCadastrarServico, setModalCadastrarServico] = useState(false)
    const [modalExcluirTodosServico, setModalExcluirTodosServico] = useState(false)
    const [modalEditarServico, setModalEditarServico] = useState(false)
    const [modalExcluirServico, setModalExcluirServ] = useState(false)
    return(
        <SafeAreaView style={Styles.appDefault}>
            <ScrollView style={{marginTop: 20}} showsVerticalScrollIndicator={false}>
                <LogoSecundaria>Serviços</LogoSecundaria> 
                <View style={{flexDirection: 'row', marginTop: 40, marginBottom: 30}}>
                    <BotaoCadastrar text={'Cadastrar'} onPress={() => setModalCadastrarServico(!modalCadastrarServico)}/>
                    <BotaoDeletar text={'Deletar todos'} onPress={() => setModalExcluirTodosServico(!modalExcluirTodosServico)}/>
                    <Modal isInput={false} isText={false} text={'Cadastrar'} textMensagem={false} key={1} visible={modalCadastrarServico} onClose={() => setModalCadastrarServico(!modalCadastrarServico)} inputModalService={true}/>
                    <Modal isInput={false} isText={true} text={'Deletar Todos'} textMensagem={'Tem certeza que deseja deletar todos os serviços?'} key={2} visible={modalExcluirTodosServico} onClose={() => setModalExcluirTodosServico(!modalExcluirTodosServico)} inputModalService={false}/>
                </View>
                <TabelaServicosBarbearia onPress={() => setModalEditarServico(!modalEditarServico)} onPressDeletar={() => setModalExcluirServ(!modalExcluirServico)}/>
                <Modal isInput={false} isText={false} text={'Editar'} textMensagem={false} key={3} visible={modalEditarServico} onClose={() => setModalEditarServico(!modalEditarServico)} inputModalService={true}/>
                <Modal isInput={false} isText={true} text={'Deletar'} textMensagem={`Tem certeza que deseja deletar ‘Barba’ da lista de serviços?`} key={4} visible={modalExcluirServico} onClose={() => setModalExcluirServ(!modalExcluirServico)} inputModalService={false}/> 
            </ScrollView>
        </SafeAreaView>
    )
}