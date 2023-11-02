import { StyleSheet, Text, View } from "react-native";
import LogoSecundaria from "../components/LogoSecundaria";
import Styles from "../components/styles/Styles";
import VisuAgendamentoCliente from "../components/VisuAgendamentoCliente";

export default function AgendamentoCliente() {
  return (
    <View style={Styles.appDefault}>
      <LogoSecundaria>Agendamentos</LogoSecundaria>
      <View style={{ width: "100%" }}>
        <Text style={styles.textAtivo}>Ativos</Text>
        <View style={styles.containerAtivo}>
          <VisuAgendamentoCliente servico={'Barba'} data={'Data: 05/10/2023'} hora={'Horário: 15h30'}/>
          <VisuAgendamentoCliente servico={'Barba'} data={'Data: 05/10/2023'}  hora={'Horário: 15h30'}/>
          <VisuAgendamentoCliente servico={'Barba'} data={'Data: 05/10/2023'}  hora={'Horário: 15h30'}/>
        </View>
        <Text style={styles.textFinalizadoCancelado}>Finalizados</Text>
        <View style={styles.containerAtivo}>
          <VisuAgendamentoCliente servico={'Barba'} data={'Data: 05/10/2023'}  hora={'Horário: 15h30'}/>
        </View>
        <Text style={styles.textFinalizadoCancelado}>Cancelados</Text>
        <View style={styles.containerAtivo}>
          <VisuAgendamentoCliente servico={'Barba'} data={'Data: 05/10/2023'}  hora={'Horário: 15h30'}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerAtivo: {
    flexDirection: "row",
  },
  textAtivo: {
    fontSize: 17,
    color: "white",
    paddingBottom: 5,
  },
  textFinalizadoCancelado: {
    fontSize: 17,
    color: "white",
    marginTop: 10,
    paddingBottom: 5,
  },
});
