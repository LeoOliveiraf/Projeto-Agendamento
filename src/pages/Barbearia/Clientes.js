import { Alert, SafeAreaView, ScrollView, View, } from "react-native";
import Styles from "../../components/styles/Styles";
import LogoSecundaria from "../../components/LogoSecundaria";
import BotaoCadastrar from "../../components/BotaoCadastrar";
import BotaoDeletar from "../../components/BotaoDeletar";
import Modal from "../../components/Modal";
import { useState, useEffect } from "react";
import TabelaClientesBarbearia from "../../components/TabelaClientesBarbearia";

export default function Clientes({navigation}) {
  const [modalCadastrar, setModalCadastrar] = useState(false);
  const [modalDeletar, setModalDeletar] = useState(false);
  const [nomeCliente, setNomeCliente] = useState("");
  const [telefoneCliente, setTelefoneCliente] = useState("");
  const [dataClientes, setDataClientes] = useState([]);
  const [modalDelete, setModalDelete] = useState({ data: {}, open: false });
  const [modalEditi, setModalEditi] = useState({ data: {}, open: false });

  const formatarTelefone = (telefone) => {
    const telefoneLimpo = telefone.replace(/[^\d]/g, '');
    const telefoneFormatado = `(${telefoneLimpo.slice(0, 2)}) ${telefoneLimpo.slice(2, 7)}-${telefoneLimpo.slice(7, 11)}`;
    return telefoneFormatado;
  };

  const handleInputChangeTelefone = (inputValue) => {
    const telefoneFormatado = formatarTelefone(inputValue);
    setTelefoneCliente(telefoneFormatado);
  };


  const openModalEditi = (item) => {
    setNomeCliente(item.nome); 
    setTelefoneCliente(item.telefone);
    setModalEditi({ open: true, data: item });
  };

  const openModalDelete = (item) => {
    setModalDelete({ open: true, data: item });
  };
  

  //Começando método GET
  const URL = "https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/Clientes";
  const getClientes = async () => {
    const options = {
      method: "GET",
    }
    try {
      const response = await fetch(URL, options);
      const json = await response.json();
      setDataClientes(json);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getClientes();
  }, []);


  //Começando método POST
  const doPost = async () => {
    const URL =
      "https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/Clientes";
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: nomeCliente,
        telefone: telefoneCliente,
      }),
    };
    const nomeConflito = dataClientes.find(cliente =>  cliente.nome.toLowerCase().trim() === nomeCliente.toLowerCase().trim());
    const telefoneConflito = dataClientes.find(cliente => cliente.telefone.toLowerCase().trim() === telefoneCliente.toLowerCase().trim())
    if(telefoneConflito || nomeConflito){
      Alert.alert("Desculpe, este nome ou telefone já está cadastrado!")
    }else{
      try {
        await fetch(URL, options);
      } catch (error) {
        console.log("Erro na solicitação: ", error);
      } finally {
        getClientes();
      }
      };
    }
  const chamaPut = () =>{
    if(telefoneCliente.length < 15){
      Alert.alert("Telefone Invalido")
    }else {
      doPut(modalEditi.data);
    }
  }
  const setData = async () => {
    if(telefoneCliente.length < 15){
      Alert.alert("Telefone Invalido")
    }else {
      doPost();
      getClientes();
      setModalCadastrar(!modalCadastrar);
    }
  };
  const limpaInputs = () => {
    setNomeCliente("");
    setTelefoneCliente("");
    setModalCadastrar(!modalCadastrar)
  }
  //Começando método DELETE
  const userDeletar = async (item) => {
    const URL =
      "https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/Clientes/" + item.id;

    const options = {
      method: "DELETE",
    };

    try {
      const response = await fetch(URL, options);
      if (response.ok) {
        console.log("Cliente excluído com sucesso!");
      }
    } catch (error) {
      console.error("Erro na solicitação:", error);
    } finally {
      setModalDelete({ data: {}, open: false });
      getClientes();
    }
  };

  //Começando método PUT
  const doPut = async (item) => {
    setNomeCliente(nomeCliente);
    setTelefoneCliente(telefoneCliente);
    
    const URL = `https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/Clientes/${item.id}`;
    const options = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: item.id,
        nome: nomeCliente,
        telefone: telefoneCliente,
      }),
    };
      try {
        await fetch(URL, options);
      } catch (error) {
        console.error(error);
      } finally {
        setModalEditi({ data: {}, open: false });
        getClientes();
      }
  };
  //Telas + Modals
  return (
    <SafeAreaView style={Styles.appDefault}>
      <ScrollView
        style={{ marginTop: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <LogoSecundaria>Clientes</LogoSecundaria>
        <View style={{ flexDirection: "row", marginTop: 40, marginBottom: 30 }}>
          <BotaoCadastrar
            text={"Cadastrar"}
            onPress={() => limpaInputs()}
          />
        </View>
        <TabelaClientesBarbearia
          dataClientes={dataClientes}
          onDelete={openModalDelete}
          onEditi={openModalEditi}
        />

        {/*Modal Cadastrar*/}
        <Modal
          key={1}
          isText={false}
          onClose={() => setData()}
          visible={modalCadastrar}
          text={"Cadastrar"}
          isInput={true}
          inputNomeCliente={setNomeCliente}
          inputTelefoneCliente={handleInputChangeTelefone}
          valueNome={nomeCliente}
          valueTelefone={telefoneCliente}
          onCloseTeste={() => setModalCadastrar({ data: {}, open: false })}
        />

        {/*Modal Editar*/}
        <Modal
          key={3}
          isText={false}
          onClose={() => chamaPut()}
          visible={modalEditi.open}
          text={"Editar"}
          isInput={true}
          inputNomeCliente={setNomeCliente}
          inputTelefoneCliente={handleInputChangeTelefone}
          valueNome={nomeCliente}
          valueTelefone={telefoneCliente}
          onCloseTeste={() => setModalEditi({ data: {}, open: false })}
        />

        {/*Modal Deletar*/}
        <Modal
          key={4}
          isText={true}
          onClose={() => userDeletar(modalDelete.data)}
          visible={modalDelete.open}
          text={"Deletar"}
          textMensagem={`Tem certeza que deseja deletar ${modalDelete.data.nome} da lista de clientes?`}
          onCloseTeste={() => setModalDelete({ data: {}, open: false })}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
