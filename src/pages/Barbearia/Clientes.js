import { SafeAreaView, ScrollView, View } from "react-native";
import Styles from "../../components/styles/Styles";
import LogoSecundaria from "../../components/LogoSecundaria";
import BotaoCadastrar from "../../components/BotaoCadastrar";
import BotaoDeletar from "../../components/BotaoDeletar";
import Modal from "../../components/Modal";
import { useState, useEffect } from "react";
import TabelaClientesBarbearia from "../../components/TabelaClientesBarbearia";

export default function Clientes() {
  const [modalCadastrar, setModalCadastrar] = useState(false);
  const [modalDeletar, setModalDeletar] = useState(false);
  const [nomeCliente, setNomeCliente] = useState("");
  const [telefoneCliente, setTelefoneCliente] = useState("");
  const [dataClientes, setDataClientes] = useState([]);
  const [modalDelete, setModalDelete] = useState({ data: {}, open: false });
  const [modalEditi, setModalEditi] = useState({ data: {}, open: false });

  const openModalEditi = (item) => {
    setModalEditi({ open: true, data: item });
  };

  const openModalDelete = (item) => {
    setModalDelete({ open: true, data: item });
  };
  

  //Começando método GET
  const URL = "https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/Clientes";
  const getClientes = async () => {
    try {
      const response = await fetch(URL);
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
  const doPost = () => {
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
    fetch(URL, options).then((response) => {
      if (!response.ok) {
        throw new Error("A solicitação via POST falhou!");
      }
      return response.json();
    });
  };
  const setData = () => {
    doPost();
    setModalCadastrar(!modalCadastrar);
    getClientes();
  };

  //Começando método DELETE
  const userDeletar = async (item) => {
    const URL =
      "https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/Clientes/" +
      item.id;

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
      console.log("Deu Certo " + options.body);
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
            onPress={() => setModalCadastrar(!modalCadastrar)}
          />
          <BotaoDeletar
            text={"Deletar todos"}
            onPress={() => setModalDeletar(!modalDeletar)}
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
          visible={modalCadastrar}
          text={"Cadastrar"}
          isInput={true}
          inputNomeCliente={setNomeCliente}
          inputTelefoneCliente={setTelefoneCliente}
          valueNome={nomeCliente}
          valueTelefone={telefoneCliente}
          onClose={() => setData()}
        />

        {/*Modal Deletar todos*/}
        <Modal
          key={2}
          isText={true}
          onClose={() => setModalDeletar(!modalDeletar)}
          visible={modalDeletar}
          text={"Deletar todos"}
          textMensagem={`Tem certeza que deseja \n deletar todos os clientes?`}
        />

        {/*Modal Editar*/}
        <Modal
          key={3}
          isText={false}
          onClose={() => doPut(modalEditi.data)}
          visible={modalEditi.open}
          text={"Editar"}
          isInput={true}
          inputNomeCliente={setNomeCliente}
          inputTelefoneCliente={setTelefoneCliente}
          valueNome={nomeCliente}
          valueTelefone={telefoneCliente}
        />

        {/*Modal Deletar*/}
        <Modal
          key={4}
          isText={true}
          onClose={() => userDeletar(modalDelete.data)}
          visible={modalDelete.open}
          text={"Deletar"}
          textMensagem={`Tem certeza que deseja deletar ${modalDelete.data.nome} da lista de clientes?`}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
