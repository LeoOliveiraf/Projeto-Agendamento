import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Styles from '../../components/styles/Styles';
import LogoSecundaria from '../../components/LogoSecundaria';
import BarraDePesquisa from '../../components/BarraDePesquisa';
import BotaoCadastrar from '../../components/BotaoCadastrar';
import BotaoDeletar from '../../components/BotaoDeletar';
import Modal from '../../components/Modal';
import TabelaAgendamentosBarbearia from '../../components/TabelaAgendamentosBarbearia';

export default function AgendamentosB() {
  const [modalAgendar, setModalAgendar] = useState(false);
  const [modalDeletar, setModalDeletar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalExcluirUnico, setModalExcluirUnico] = useState(false);

  const [nomeServico, setNomeServico] = useState("");
  const [dataHora, setDataHora] = useState("");
  const [nomeCliente, setNomeCliente] = useState("");
  //const [data, setData] = useState([]);
  const [dataClientes, setDataClientes] = useState([]);
  const listaServicos = [];
  const URL = "https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/TipoServicoes";
    const getTipoServicoes = async () => {
      try {
        const response = await fetch(URL);
        const json = await response.json();
        //setData(json);
        listaServicos.push(json);
        console.log(listaServicos)
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      getTipoServicoes();
    }, []);


    const listaClientes = [];
    const URLCliente = "https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/Clientes";
    const getClientes = async () => {
      try {
        const response = await fetch(URLCliente);
        const json = await response.json();
        setDataClientes(json);
        listaClientes.push(json);
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      getClientes();
    }, []);
    
//AQUI COMEÇA O POST
let tipoServicoId;
    const doPost = (listaServicos, listaClientes) => {
      const URL = "https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/Agendamentoes/createAgendamento";
      
      const options = {
        method: "POST",
        headers: {
          Aceept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: dataHora,
          tipoServicoId: nomeServico,
          clienteId: nomeCliente,
          barbeariaId: 1
        }),
      };
      
      console.log('Lista' + listaServicos)
      const getServicoId = (nomeServico) => {
        const servicoEncontrado = listaServicos.find(servico => servico.nome === nomeServico);
        return servicoEncontrado.id;
      };
      
      tipoServicoId = getServicoId(nomeServico);
      console.log(tipoServicoId);
      
      console.log('Nome S' + nomeServico);
      fetch(URL, options).then((response) => {
        if (!response.ok) {
          throw new Error("A solicitação via POST falhou!");
        }
        return response.json();
      });
    };
    const setData = () => {
      console.log(nomeServico);
    console.log(tipoServicoId);
    doPost();
  };
  return (
    <SafeAreaView style={Styles.appDefault}>
      <ScrollView style={{marginTop: 20}} showsVerticalScrollIndicator={false}>
        <LogoSecundaria>Agendamentos</LogoSecundaria>
        <BarraDePesquisa />
        <View style={{ flexDirection: 'row', marginTop: 40, marginBottom: 40 }}>
          <BotaoCadastrar text={"Agendar"} onPress={() => setModalAgendar(!modalAgendar)}/>
          <BotaoDeletar text={"Deletar todos"} onPress={() => setModalDeletar(!modalDeletar)}/>
        </View>
        <Text style={[Styles.textLogoSecundaria, { fontSize: 25, alignSelf: 'flex-start', marginLeft: 10 }]}>Dia 05/10/2023</Text>
        <TabelaAgendamentosBarbearia 
          dataClientes={dataClientes}
        />

        {/*Modais*/}
        <Modal
          isText={false}
          onClose={() => setData()}
          visible={modalAgendar}
          key={1}
          text={"Agendar"}
          inputModalAgendamento={true}
          inputNome={setNomeCliente}
          valueNomeAgendamentoCliente={nomeCliente}
          valueDataHora={dataHora}
          inputDataHora={setDataHora}
          inputNomeServico={setNomeServico}
          valueNomeServico={nomeServico}
        />

        <Modal
          isText={true}
          onClose={() => setModalDeletar(!modalDeletar)}
          visible={modalDeletar}
          key={2}
          text={"Deletar todos"}
          textMensagem={"Tem certeza que deseja \n deletar todos os clientes?"}
          isInput={false}
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
          textMensagem={`Tem certeza que deseja deletar 'Leonardo' da lista de clientes?`} botaoFechar={true}
        />
      </ScrollView>
    </SafeAreaView>
  )
}
