import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Styles from "../../components/styles/Styles";
import LogoSecundaria from "../../components/LogoSecundaria";
import BotaoCadastrar from "../../components/BotaoCadastrar";
import BotaoDeletar from "../../components/BotaoDeletar";
import Modal from "../../components/Modal";
import { useState } from "react";
import TabelaClientesBarbearia from "../../components/TabelaClientesBarbearia";

export default function Clientes() {
  const [modalCadastrar, setModalCadastrar] = useState(false);
  const [modalDeletar, setModalDeletar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalExcluirUnico, setModalExcluirUnico] = useState(false);
  const [nomeCliente, setNomeCliente] = useState('');
  const [telefoneCliente, setTelefoneCliente] = useState('');

  const setData = () => {
    console.log(nomeCliente, telefoneCliente + "É O FORÇA NO ECO");
    setModalCadastrar(!modalCadastrar);
  };
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
          <Modal
            isText={false}
            visible={modalCadastrar}
            key={1}
            text={"Cadastrar"}
            isInput={true}
            inputNomeCliente={setNomeCliente}
            inputTelefoneCliente={setTelefoneCliente}
            valueNome={nomeCliente}
            valueTelefone={telefoneCliente}
            onClose={() => setData()}
          />
          <Modal
            isText={true}
            onClose={() => setModalDeletar(!modalDeletar)}
            visible={modalDeletar}
            key={2}
            text={"Deletar todos"}
            isInput={false}
            textMensagem={`Tem certeza que deseja \n deletar todos os clientes?`}
          />
        </View>
        <TabelaClientesBarbearia
          onPress={() => setModalEditar(!modalEditar)}
          onPressDeletar={() => setModalExcluirUnico(!modalExcluirUnico)}
        />
        <Modal
          isText={false}
          onClose={() => setModalEditar(!modalEditar)}
          visible={modalEditar}
          key={3}
          text={"Editar"}
          isInput={true}
        />
        <Modal
          isText={true}
          onClose={() => setModalExcluirUnico(!modalExcluirUnico)}
          visible={modalExcluirUnico}
          key={4}
          text={"Deletar"}
          isInput={false}
          textMensagem={`Tem certeza que deseja deletar 'Leonardo' da lista de clientes?`}
          botaoFechar={true}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
