import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import LogoSecundaria from "../../components/LogoSecundaria";
import Styles from "../../components/styles/Styles";
import VisuAgendamentoCliente from "../../components/VisuAgendamentoCliente";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native-paper";

export default function ServicosC() {
  const [listaServicos, setListaServicos] = useState([]);
  const [loading, setLoading] = useState(true);
  //AQUI COMEÇA O GET
  const URL =
    "https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/TipoServicoes";
  const getClientes = async () => {
    const options = {
      method: "GET",
    };
    try {
      const response = await fetch(URL, options);
      const json = await response.json();
      setListaServicos(json);
    } catch (error) {
      console.error(error);
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    getClientes();
  }, []);

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
      <ScrollView
        style={{ marginTop: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <LogoSecundaria>Serviços</LogoSecundaria>
        <View style={styles.containerAtivo}>
        {listaServicos.map((item) => (
          <View style={styles.card} key={item.id}>
            <VisuAgendamentoCliente
              servico={item.nome}
              data={'Valor: ' + 'R$' + item.valor}
              hora={'Duração: ' + item.duracao+'min'}
            />
          </View>
        ))}
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
  }
});
