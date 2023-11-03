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
  const [modalVisible, setModalVisible] = useState(false);

  const handleAgendarPress = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={Styles.appDefault}>
      <ScrollView style={{margin: 20}} showsVerticalScrollIndicator={false}>
        <LogoSecundaria>Agendamentos</LogoSecundaria>
        <BarraDePesquisa />
        <View style={{ flexDirection: 'row', marginTop: 40, marginBottom: 30 }}>
          <BotaoCadastrar text={'Agendar'}/>
          <BotaoDeletar onPress={handleAgendarPress} text={'Deletar todos'}/>
        </View>
        <Text style={[Styles.textLogoSecundaria, { fontSize: 25, marginBottom: 10, alignSelf: 'flex-start', marginLeft: 30 }]}>Dia 05/10/2023</Text>
        <Modal visible={modalVisible} onClose={handleModalClose} textMensagem={'Tem certeza que deseja deletar todos os agendamentos?'} isText={true} isInput={false} text={'Deletar todos'}/>
        <Tabela />
      </ScrollView>
    </SafeAreaView>
  )
}
