import { StyleSheet, View } from "react-native";
import LogoSecundaria from "../components/LogoSecundaria";
import Styles from "../components/styles/Styles";
import VisuAgendamentoCliente from "../components/VisuAgendamentoCliente";

export default function AgendamentoCliente() {
  return (
    <View style={Styles.appDefault}>
      <LogoSecundaria>Serviços</LogoSecundaria>
      <View style={{ width: "100%" }}>
        <View style={styles.containerAtivo}>
          <VisuAgendamentoCliente servico={'Barba'} data={'R$ 40,00'} hora={'Duração: 30min'}/>
          <VisuAgendamentoCliente servico={'Corte'} data={'R$ 40,00'}  hora={'Duração: 30min'}/>
          <VisuAgendamentoCliente servico={'Barba'} data={'R$ 40,00'}  hora={'Duração: 30min'}/>
        </View>
        <View style={styles.containerAtivo}>
          <VisuAgendamentoCliente servico={'Sobrancelha'} data={'R$ 40,00'}  hora={'Duração: 30min'}/>
        </View>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  containerAtivo: {
    flexDirection: "row",
  },
});
