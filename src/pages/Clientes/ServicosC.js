import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import LogoSecundaria from "../../components/LogoSecundaria";
import Styles from "../../components/styles/Styles";
import VisuAgendamentoCliente from "../../components/VisuAgendamentoCliente";

export default function ServicosC() {
  return (
    <SafeAreaView style={Styles.appDefault}>
      <ScrollView style={{marginTop: 20}} showsVerticalScrollIndicator={false}>
        <LogoSecundaria>Serviços</LogoSecundaria>
          <View style={styles.containerAtivo}>
            <VisuAgendamentoCliente servico={'Barba'} data={'R$ 40,00'} hora={'Duração: 30min'}/>
            <VisuAgendamentoCliente servico={'Corte'} data={'R$ 40,00'} hora={'Duração: 30min'}/>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerAtivo: {
    flexDirection: "row",
  },
});
