import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import LogoSecundaria from "../../components/LogoSecundaria";
import Styles from "../../components/styles/Styles";
import VisuAgendamentoCliente from "../../components/VisuAgendamentoCliente";
import { useEffect, useState, useContext } from "react";
import moment from 'moment';
import { ActivityIndicator } from "react-native-paper";
import { AuthContext } from '../../contexts/auth'

export default function AgendamentosC() {

  const {user} = useContext(AuthContext)
  const clienteLogado = user;

  const [listaDataAgendamentoCliente, setListaDataAgendamentoCliente] = useState([]);
  const [listaDataClientes, setListaDataClientes] = useState([]);
  const [clienteAgendados, setClienteAgendados] = useState([]);
  const [loading, setLoading] = useState(true);
  
   //Começando método GET
   useEffect(() => {
    const fetchData = async () => {
      try {
        const [agendamentoResponse, clientesResponse] = await Promise.all([
          //agendamentoResponse refere-se a fetch de baixo
          fetch("https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/Agendamentoes/listaAgendamento").then(response => response.json()),
          //clientesResponse refere-se a fetch de baixo
          fetch("https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/Clientes").then(response => response.json())
        ]);
        setListaDataAgendamentoCliente(agendamentoResponse);
        setListaDataClientes(clientesResponse);
      } catch (error) {
        console.error(error);
      }finally{
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (listaDataClientes.length > 0 && listaDataAgendamentoCliente.length > 0) {
      const listaNomeClientes = listaDataClientes.find(cliente => cliente.nome.toLowerCase().trim() === clienteLogado.nome.toLowerCase().trim());
      const clienteAgendado = listaDataAgendamentoCliente.filter(cliente => cliente.clienteNome.toLowerCase().trim() === listaNomeClientes.nome.toLowerCase().trim());
      setClienteAgendados(clienteAgendado);
    }
  }, [listaDataClientes, listaDataAgendamentoCliente]);
  
  if (loading) {
    return (
      <View style={[Styles.appDefault, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Carregando Agendamentos...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={Styles.appDefault}>
      <ScrollView style={{marginTop: 20}} showsVerticalScrollIndicator={false}>
        <LogoSecundaria>Agendamentos</LogoSecundaria>
        <View>
          <Text style={styles.textStatus}>Ativos</Text>
          <View style={styles.containerAtivo}>
            {clienteAgendados.map((item) => (
              <View style={styles.card} key={item.id}>
                <VisuAgendamentoCliente  servico={item.tipoServicoNome} data={'Data: ' + moment(item.data).format('DD/MM/YYYY')} hora={'Horario: ' + moment(item.data).format('HH:MM')} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadingText: {
    color: 'white',
    fontWeight: '300'
  },
  containerAtivo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '42%', 
    marginBottom: 16,
    borderRadius: 8,
    marginLeft: 15,
    marginRight: 15,
  },
  textStatus: {
    fontSize: 20,
    color: "white",
    marginTop: 20,
    marginLeft: 20,
    fontWeight: '300'
  },
});