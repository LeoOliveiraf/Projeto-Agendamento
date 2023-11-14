import {
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Styles from "../../components/styles/Styles";
import { useState } from "react";
import { useEffect } from "react";
import LogoSecundaria from "../../components/LogoSecundaria";
import Icon from "react-native-vector-icons/AntDesign";

export default function Perfil() {
  const [modalVisibleSalvar, setModalVisibleSalvar] = useState(false);
  const [modalVisibleDeslogar, setModalVisibleDeslogar] = useState(false);
  const [dataClientes, setDataCAdministrador] = useState([]);


  const getAdministrador = async () => {
    try {
      const URL = "https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/Administradors";
      const options = {
        method: 'GET'
      };
      const response = await fetch(URL,options);
      const json = await response.json();
      setDataCAdministrador(json);
      console.log(dataClientes)
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAdministrador();
  }, []);

  return (
    <SafeAreaView style={Styles.appDefault}>
      <ScrollView style={{marginTop: 20}} showsVerticalScrollIndicator={false}>
        <LogoSecundaria>Perfil</LogoSecundaria>
        <Text style={Styles.textInputConta}>Editar Conta</Text>
        <View style={Styles.containerPerfil}>
          <View style={{ width: "90%" }}>
            <Text style={Styles.tituloInput}>Palavra-chave</Text>
          </View>
          <TextInput style={Styles.InputPerfil} />
          <View style={{ width: "90%" }}>
            <Text style={Styles.tituloInput}>Senha</Text>
          </View>
          <TextInput style={Styles.InputPerfil} secureTextEntry={true} />
        </View>
        <Text style={Styles.textInputLocalizacao}>
          Editar localização e contato
        </Text>
        <View style={Styles.containerLocalizacao}>
          <View style={{ width: "90%" }}>
            <Text style={Styles.tituloInput}>Endereço</Text>
          </View>
          <TextInput style={Styles.InputPerfil} />
          <View style={{ width: "90%" }}>
            <Text style={Styles.tituloInput}>WhatsApp</Text>
          </View>
          <TextInput style={Styles.InputPerfil} />
          <View style={{ width: "90%" }}>
            <Text style={Styles.tituloInput}>Instagram</Text>
          </View>
          <TextInput style={Styles.InputPerfil} />
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleSalvar}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisibleSalvar(!modalVisibleSalvar);
          }}
        >
          <View style={styles.modalBackground}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{ width: 280, margin: 15 }}>
                  <Pressable onPress={() => setModalVisibleSalvar(false)}>
                    <Icon name="close" size={35} style={{ color: "#B9901E" }} />
                  </Pressable>
                </View>
                <Text style={styles.modalText}>
                  Tem certeza que deseja {"\n"} salvar as alterações?
                </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisibleSalvar(!modalVisibleSalvar)}
                >
                  <Text style={styles.textStyle}>Salvar</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleDeslogar}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisibleDeslogar(!modalVisibleDeslogar);
          }}
        >
          <View style={styles.modalBackground}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{ width: 280, margin: 15 }}>
                  <Pressable onPress={() => setModalVisibleDeslogar(false)}>
                    <Icon name="close" size={35} style={{ color: "#B9901E" }} />
                  </Pressable>
                </View>
                <Text style={styles.modalText}>
                  Tem certeza que deseja {"\n"} deslogar do aplicativo?
                </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisibleDeslogar(!modalVisibleDeslogar)}
                >
                  <Text style={styles.textStyle}>Sair</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <View style={{ alignItems: "center" }}>
          <Pressable
            style={styles.botaoSalvar}
            onPress={() => setModalVisibleSalvar(true)}
          >
            <Text style={styles.textBotaoSalvar}>Salvar</Text>
          </Pressable>
          <Pressable
            style={styles.botaoDeslogar}
            onPress={() => setModalVisibleDeslogar(true)}
          >
            <Text style={styles.textBotaoDeslogar}>Deslogar</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "#FFF",
    borderRadius: 30,
    alignItems: "center",
  },
  button: {
    borderRadius: 30,
    width: 130,
    height: 40,
    marginBottom: 20,
    justifyContent: "center",
    marginTop: 35,
  },
  buttonClose: {
    backgroundColor: "#B9901E",
  },
  textStyle: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  modalText: {
    fontSize: 20,
  },
  textBotaoSalvar: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
  botaoSalvar: {
    borderRadius: 30,
    width: 130,
    height: 40,
    backgroundColor: "#B9901E",
    justifyContent: "center",
    marginTop: 20,
  },
  textBotaoDeslogar: {
    fontSize: 20,
    color: "#CECECE",
    textAlign: "center",
  },
  botaoDeslogar: {
    borderRadius: 30,
    width: 130,
    height: 40,
    backgroundColor: "transparent",
    justifyContent: "center",
    marginTop: 10,
  },
});
