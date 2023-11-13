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
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from "../../components/styles/Styles";
import { useState } from "react";
import { useEffect } from "react";
import LogoSecundaria from "../../components/LogoSecundaria";
//import Icon from "react-native-vector-icons/AntDesign";

export default function Perfil() {
  const [modalVisibleSalvar, setModalVisibleSalvar] = useState(false);
  const [modalVisibleBarbeiro, setModalVisibleBarbeiro] = useState(false);
  const [modalVisibleDeslogar, setModalVisibleDeslogar] = useState(false);
  const [dataAdm, setDataAdministrador] = useState([]);
  const [dataBarbeiro, setDataBarbeiro] = useState({ endereco: '', telefone: '' });

  const editarConta = (campo, valor) => {
    setDataAdministrador((prevData) => ({
      ...prevData,
      [campo]: valor,
    }));
  };

  const editarContato = (campo, valor) => {
    setDataBarbeiro((prevData) => ({
      ...prevData,
      [campo]: valor,
    }));
  };

  const handleSalvarAdm = () => {
    setModalVisibleSalvar(true);
  };
  const handleConfirmarModalSalvarAdm = async () => {
    setModalVisibleSalvar(false);
    await putAdministrador();
  };

  const handleSalvarBarbeiro = () => {
    setModalVisibleBarbeiro(true);
  };
  const handleConfirmarModalSalvarBarbeiro = async () => {
    setModalVisibleBarbeiro(false);
    await putBarbeiro();
  };

  {/*_____________________________________________________________________________________________ */ }
  const putAdministrador = async () => {
    try {
      const administradorId = 1;
      const URL = `https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/Administradors/${administradorId}`;

      const options = {
        method: 'PUT',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: 1,
          login: dataAdm.login,
          senha: dataAdm.senha,
        }),
      };
      const response = await fetch(URL, options);
      if (!response.ok) {
        console.error(`HTTP error! Status: ${response.status}`);
      } else {
        console.log('Update successful!');
      }
    } catch (error) {
      console.error('Network request failed:', error);
    }
  };


  {/*_____________________________________________________________________________________________ */ }

  const putBarbeiro = async () => {
    const barbeiroId = 1;
    const URL = `https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/Barbearias/${barbeiroId}`;

    const options = {
      method: 'PUT',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 1,
        endereco: dataBarbeiro.endereco,
        telefone: dataBarbeiro.telefone,
        administradorId: 1
      }),
    };
    try {
      const response = await fetch(URL, options);
      if (!response.ok) {
        console.error(`HTTP error! Status: ${response.status}`);
      } else {
        console.log('Update successful!');
      }
    } catch (error) {
      console.error('Network request failed:', error);
    } finally {
      console.log('Finally!');
    }
  };


  {/*_____________________________________________________________________________________________ */ }

  {/* GET DA TABELA ADMINISTRADOR */ }
  const getAdministrador = async () => {
    try {
      const URL = "https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/Administradors/";
      const options = {
        method: 'GET'
      };
      const response = await fetch(URL, options);
      const json = await response.json();
      const administradorId1 = json.find(item => item.id === 1);
      setDataAdministrador(administradorId1);
      console.log(dataAdm)
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAdministrador();
  }, []);


  {/* GET DA TABELA BARBEIRO */ }
  const getbarbeiro = async () => {
    try {
      const URL = "https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/Barbearias/";
      const options = {
        method: 'GET'
      };
      const response = await fetch(URL, options);
      const json = await response.json();
      setDataBarbeiro(json[0]);
      console.log(dataBarbeiro)
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getbarbeiro();
  }, []);


  {/*_____________________________________________________________________________________________ */ }


  return (
    <SafeAreaView style={Styles.appDefault}>
      <ScrollView style={{ marginTop: 20 }} showsVerticalScrollIndicator={false}>
        <LogoSecundaria>Perfil</LogoSecundaria>

        {/* <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 30, justifyContent: 'center',}}>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://www.instagram.com/therock/")}
            >
              <Icon name="instagram" size={30} color="#E1306C" />
            </TouchableOpacity>
            <View style={{ width: 20 }} />
            <TouchableOpacity
              onPress={() => Linking.openURL("https://wa.me/43988197106")}
            >
              <Icon name="whatsapp" size={30} color="#25D366" />
            </TouchableOpacity>
        </View>   */}

        {/* EDITAR CONTA */}
        <Text style={Styles.textInputConta}>Editar Conta</Text>
        <View style={Styles.containerPerfil}>

          {/* Login */}
          <View style={{ width: "90%" }}>
            <Text style={Styles.tituloInput}>Login</Text>
          </View>
          <TextInput
            style={Styles.InputPerfil}
            value={dataAdm.login}
            onChangeText={(text) => editarConta('login', text)}
          />

          {/* Senha */}
          <View style={{ width: "90%" }}>
            <Text style={Styles.tituloInput}>Senha</Text>
          </View>
          <TextInput
            style={Styles.InputPerfil}
            secureTextEntry={true}
            value={dataAdm.senha}
            onChangeText={(text) => editarConta('senha', text)}
          />
        </View>

        {/* BOTÃO DE SALVAR CONTA */}
        <View style={{ alignItems: "center" }}>
          <Pressable
            style={styles.botaoSalvar}
            onPress={handleSalvarAdm}
          >
            <Text style={styles.textBotaoSalvar}>Salvar</Text>
          </Pressable>
        </View>
        {/*_____________________________________________________________________________________________ */}

        {/* EDITAR LOCALIZAÇÃO E CONTATO */}
        <Text style={Styles.textInputLocalizacao}>
          Editar localização e contato
        </Text>

        <View style={Styles.containerLocalizacao}>
          {/* ENDEREÇO */}
          <View style={{ width: "90%" }}>
            <Text style={Styles.tituloInput}>Endereço</Text>
          </View>
          <TextInput
            style={Styles.InputPerfil}
            value={dataBarbeiro.endereco}
            onChangeText={(text) => editarContato('endereco', text)}
          />

          {/* TELEFONE */}
          <View style={{ width: "90%" }}>
            <Text style={Styles.tituloInput}>Telefone</Text>
          </View>
          <TextInput
            style={Styles.InputPerfil}
            value={dataBarbeiro.telefone}
            onChangeText={(text) => editarContato('telefone', text)}
          />
        </View>


        {/* BOTÃO DE SALVAR BARBEIRO */}
        <View style={{ alignItems: "center", marginBottom: 35 }}>
          <Pressable
            style={styles.botaoSalvar}
            onPress={handleSalvarBarbeiro}
          >
            <Text style={styles.textBotaoSalvar}>Salvar</Text>
          </Pressable>
        </View>

        {/*_____________________________________________________________________________________________ */}

        {/*  MODAL BOTÃO SALVAR ADMINISTRADOR */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleSalvar}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisibleSalvar(!modalVisibleSalvar);
          }}
        >
          {/* POP UP */}
          <View style={styles.modalBackground}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{ width: 280, margin: 15 }}>
                  <Pressable onPress={() => setModalVisibleSalvar(false)}>
                    <Icon name="close" size={35} style={{ color: "#B9901E" }} />
                  </Pressable>
                </View>
                <Text style={styles.modalText}>
                  Tem certeza que deseja {"\n"} salvar as alterações de conta?
                </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={handleConfirmarModalSalvarAdm}
                >
                  <Text style={styles.textStyle}>Salvar</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>

        {/*_____________________________________________________________________________________________ */}

        {/*  MODAL BOTÃO SALVAR BARBEIRO */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleBarbeiro}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisibleBarbeiro(!modalVisibleBarbeiro);
          }}
        >
          {/* POP UP */}
          <View style={styles.modalBackground}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{ width: 280, margin: 15 }}>
                  <Pressable onPress={() => setModalVisibleBarbeiro(false)}>
                    <Icon name="close" size={35} style={{ color: "#B9901E" }} />
                  </Pressable>
                </View>
                <Text style={styles.modalText}>
                  Tem certeza que deseja {"\n"} salvar as alterações de barbeiro?
                </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={handleConfirmarModalSalvarBarbeiro}
                >
                  <Text style={styles.textStyle}>Salvar</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>

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
