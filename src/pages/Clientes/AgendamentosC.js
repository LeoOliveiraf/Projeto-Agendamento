import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import LogoSecundaria from "../../components/LogoSecundaria";
import Styles from "../../components/styles/Styles";
import VisuAgendamentoCliente from "../../components/VisuAgendamentoCliente";
import { useEffect, useState } from "react";
import moment from 'moment';

export default function AgendamentosC() {
  const idClienteFake = 16;
  const [listaDataAgendamentoCliente, setListaDataAgendamentoCliente] = useState([]);
   //Começando método GET
   const URLAgendamento = "https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/Agendamentoes/listaAgendamento";
   const doGetAgendamento = async () => {
     try {
       const response = await fetch(URLAgendamento);
       const json = await response.json();
       setListaDataAgendamentoCliente(json);
       console.log(json);
     } catch (error) {
       console.log(error);
     }
   }
   useEffect(() => {
     doGetAgendamento();
   }, []);
  return (
    <SafeAreaView style={Styles.appDefault}>
      <ScrollView style={{marginTop: 20}} showsVerticalScrollIndicator={false}>
        <LogoSecundaria>Agendamentos</LogoSecundaria>
        <View>
          <Text style={styles.textStatus}>Ativos</Text>
          
          {listaDataAgendamentoCliente.map((item) => (
          <View style={styles.containerAtivo}>
              <VisuAgendamentoCliente servico={item.tipoServicoNome} data={moment(item.data).format('DD/MM/YYYY')} hora={'17:55'} />
              <Text style={styles.key}>key={item.id}</Text>
          </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  key: {
    color: '#1E1E1E',
  },
  container: {
    margin: 20,
  },
  containerAtivo: {
    flexDirection: "row",
    flexWrap: 'wrap',
    marginLeft: 5,
  },
  textStatus: {
    fontSize: 20,
    color: "white",
    marginTop: 20,
    marginLeft: 20,
    fontWeight: '300'
  },
});
