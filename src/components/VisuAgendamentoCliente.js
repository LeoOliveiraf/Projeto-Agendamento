import { Image, StyleSheet, Text, View } from "react-native";
import barba from "../assets/barba.png";

export default function VisuAgendamentoCliente({servico, data, hora}) {
    return (
      <View style={styles.visualizaInfo}>
        <View style={{  justifyContent: 'center', textAlign: 'center', alignItems: 'center',}}>
          <Image source={barba} style={styles.image}/>
        </View>
        <Text style={styles.text}>{servico}</Text>
        <Text style={styles.textDataHora}>{data}</Text>
        <Text style={styles.textDataHora}>{hora}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
visualizaInfo: {
    backgroundColor: 'white',
    width: 'auto',
    height: 'auto',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#B9901E',
    padding: 10,
    marginRight: 10
  },
  text: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
  },
  textDataHora: {
    fontSize: 13,
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 60,
    borderRadius: 15
  }
});