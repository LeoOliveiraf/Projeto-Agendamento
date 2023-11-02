import { Image, StyleSheet, Text, View } from "react-native";

export default function VisuAgendamentoCliente({servico, data, hora}) {
    return (
      <View style={styles.visualizaInfo}>
        <Text style={styles.text}>{servico}</Text>
        <Text style={styles.textValor}>{data}</Text>
        <Text style={styles.textDuracao}>{hora}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
visualizaInfo: {
    backgroundColor: '#fafafa',
    width: 130,
    height: 150,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#B9901E',
    margin: 20
  },
  text: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 20
  },
  textValor: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    textAlign: 'center',
    justifyContent: 'center',
  },
  textDuracao:{
    textAlign: 'center',
    justifyContent: 'center',
  }
});