import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Styles from '../../components/styles/Styles';
import LogoSecundaria from '../../components/LogoSecundaria';
import BarraDePesquisa from '../../components/BarraDePesquisa';
import BotaoCadastrar from '../../components/BotaoCadastrar';
import BotaoDeletar from '../../components/BotaoDeletar';
import Tabela from '../../components/TabelaAgendamentosBarbearia';
import Modal from '../../components/Modal';

export default function AgendamentosB(props) {
  const [modalAgendar, setModalAgendar] = useState(false);
  const [modalDeletar, setModalDeletar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalExcluirUnico, setModalExcluirUnico] = useState(false);

  return (
    <SafeAreaView style={Styles.appDefault}>
      <ScrollView style={{marginTop: 20}} showsVerticalScrollIndicator={false}>
        <LogoSecundaria>Agendamentos</LogoSecundaria>
        <BarraDePesquisa />
        <View style={{ flexDirection: 'row', marginTop: 40, marginBottom: 40 }}>
          <BotaoCadastrar text={"Agendar"} onPress={() => setModalAgendar(!modalAgendar)}/>
          <BotaoDeletar text={"Deletar todos"} onPress={() => setModalDeletar(!modalDeletar)}/>
        </View>
        <Text style={[Styles.textLogoSecundaria, { fontSize: 25, alignSelf: 'flex-start', marginLeft: 10 }]}>Dia 05/10/2023</Text>
        <Tabela
          onPress={() => setModalEditar(!modalEditar)}
          onPressDeletar={() => setModalExcluirUnico(!modalExcluirUnico)}
        />

        {/*Modais*/}
        <Modal
          isText={false}
          onClose={() => setModalAgendar(!modalAgendar)}
          visible={modalAgendar}
          key={1}
          text={"Agendar"}
          inputModalAgendamento={true}
        />

        <Modal
          isText={true}
          onClose={() => setModalDeletar(!modalDeletar)}
          visible={modalDeletar}
          key={2}
          text={"Deletar todos"}
          textMensagem={"Tem certeza que deseja \n deletar todos os clientes?"}
          isInput={false}
        />

        <Modal
          isText={false}
          onClose={() => setModalEditar(!modalEditar)}
          visible={modalEditar}
          key={3}
          text={"Editar"}
          isInput={true}
        />

        <Modal
          isText={true}
          onClose={() => setModalExcluirUnico(!modalExcluirUnico)}
          visible={modalExcluirUnico}
          key={4}
          text={"Deletar"}
          isInput={false}
          textMensagem={`Tem certeza que deseja deletar 'Leonardo' da lista de clientes?`} botaoFechar={true}
        />
      </ScrollView>
    </SafeAreaView>
  )
}
