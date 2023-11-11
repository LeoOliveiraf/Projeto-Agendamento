import { StyleSheet, Text, View } from "react-native";

export default function VisuAgendamentoCliente({servico, data, hora}) {
    return (
      <View style={styles.visualizaInfo}>
        <Text style={styles.text}>{servico}</Text>
        <Text style={styles.textValor}>Data: {data}</Text>
        <Text style={styles.textDuracao}>Horario: {hora}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
visualizaInfo: {
    backgroundColor: '#fafafa',
    width: 130,
    height: 160,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#B9901E',
    margin: 15,
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    marginTop: -15,
    marginBottom: 15
  },
  textValor: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    textAlign: 'center',
  },
  textDuracao:{
    textAlign: 'center',
  }
});