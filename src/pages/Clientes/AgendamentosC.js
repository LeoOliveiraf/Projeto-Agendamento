import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import LogoSecundaria from "../../components/LogoSecundaria";
import Styles from "../../components/styles/Styles";
import VisuAgendamentoCliente from "../../components/VisuAgendamentoCliente";

export default function AgendamentosC() {
  return (
    <SafeAreaView style={Styles.appDefault}>
      <ScrollView style={{margin: 20}} showsVerticalScrollIndicator={false}>
        <LogoSecundaria>Agendamentos</LogoSecundaria>
        <View>
          <Text style={styles.textStatus}>Ativos</Text>
          <View style={styles.containerAtivo}>
            <VisuAgendamentoCliente servico={'Barba'} data={'Data: 05/10/2023'} hora={'Horário: 15h30'}/>
            <VisuAgendamentoCliente servico={'Barba'} data={'Data: 05/10/2023'} hora={'Horário: 15h30'}/>
            <VisuAgendamentoCliente servico={'Barba'} data={'Data: 05/10/2023'} hora={'Horário: 15h30'}/>
          </View>
          <Text style={styles.textStatus}>Finalizados</Text>
          <View style={styles.containerAtivo}>
            <VisuAgendamentoCliente servico={'Barba'} data={'Data: 05/10/2023'} hora={'Horário: 15h30'}/>
          </View>
          <Text style={styles.textStatus}>Cancelados</Text>
          <View style={styles.containerAtivo}>
            <VisuAgendamentoCliente servico={'Barba'} data={'Data: 05/10/2023'} hora={'Horário: 15h30'}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  containerAtivo: {
    flexDirection: "row",
    flexWrap: 'wrap',
  },
  textStatus: {
    fontSize: 20,
    color: "white",
    marginTop: 20,
    fontWeight: '500'
  },
});
