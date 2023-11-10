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
  const [nomeServico, setNomeServico] = useState("");
  const [dataHora, setDataHora] = useState("");
  const [nomeCliente, setNomeCliente] = useState("");
  const [dataAgendamento, setDataAgendamento] = useState([]);
  const [listaServicos, setListaServicos] = useState([]);
  const [listaClientes, setListaClientes] = useState([]);
  const [modalEditar, setModalEditar] = useState("");
  const [modalDelete, setModalDelete] = useState({ data: {}, open: false });

  let numberKeyDeletar;
  let numberKeyAgendamento;
  let numberKeyEditar;

  const URL = "https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/TipoServicoes";
    const getTipoServicoes = async () => {
      try {
        const response = await fetch(URL);
        const json = await response.json();
        //setData(json);
        setListaServicos(json);
        console.log(listaServicos)
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      getTipoServicoes();
    }, []);

    const URLCliente = "https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/Clientes";
    const getClientes = async () => {
      try {
        const response = await fetch(URLCliente);
        const json = await response.json();
        setListaClientes(json);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      getClientes();
    }, []);

 //AQUI COMEÇA O DELETE
 const openModalDelete = (item) => {
  setModalDelete({ open: true, data: item });
};
 const userDeletar = async (item) => {
  console.log(item.id)
  const URLDeletar = 'https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/Agendamentoes/' + item.id;

  const options = {
    method: "DELETE",
  };

  try {
    const response = await fetch(URLDeletar, options);
    if (response.ok) {
      numberKeyDeletar += 1;
      console.log("item excluído com sucesso!");
    }
  } catch (error) {
    console.error("Erro na solicitação:", error);
  } finally {
    setModalDelete({ data: {}, open: false });
    doGetAgendamento();
  }
};


//AQUI COMEÇA O POST
    const doPost = async () => {
      const URL = "https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/Agendamentoes/createAgendamento";
      //Tirando o Id do objeto serviceId e renomeando ele (Desestruturação)
      const {id: serviceId} = listaServicos.find(servico => servico.nome.toLowerCase().trim() === nomeServico.toLowerCase().trim() );
      const {id: clienteId} = listaClientes.find(cliente => cliente.nome.toLowerCase().trim() === nomeCliente.toLowerCase().trim() );
      console.log(serviceId, clienteId);
      const options = {
        method: "POST",
        headers: {
          Aceept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: dataHora,
          tipoServicoId: serviceId,
          clienteId: clienteId,
          barbeariaId: 1
        }),
      };
     const response =  await fetch(URL, options)
     const data = await response.json();
     console.log(data);
    };
    const setData = () => {
      doPost();
      setModalAgendar(!modalAgendar);
    };
    
  //GET Agendamentos
  const URLAgendamento = "https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/Agendamentoes/listaAgendamento";
  const doGetAgendamento = async () => {
    try {
      const response = await fetch(URLAgendamento);
      const json = await response.json();
      setDataAgendamento(json);
      numberKeyAgendamento += 1;
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    doGetAgendamento();
  }, []);

  return (
    <SafeAreaView style={Styles.appDefault}>
      <ScrollView style={{marginTop: 20}} showsVerticalScrollIndicator={false}>
        <LogoSecundaria>Agendamentos</LogoSecundaria>
        <BarraDePesquisa />
        <View style={{ flexDirection: 'row', marginTop: 40, marginBottom: 40 }}>
          <BotaoCadastrar text={"Agendar"} onPress={() => setModalAgendar(!modalAgendar)}/>
          <BotaoDeletar text={"Deletar todos"} />
        </View>
        <Text style={[Styles.textLogoSecundaria, { fontSize: 25, alignSelf: 'flex-start', marginLeft: 10 }]}>Dia 05/10/2023</Text>
        <TabelaAgendamentosBarbearia 
          dataAgendamento={dataAgendamento}
          onDelete={openModalDelete}
        />

        {/*Modais*/}
        <Modal
          isText={false}
          onClose={() => setData()}
          visible={modalAgendar}
          key={numberKeyAgendamento}
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
          visible={false}
          key={2}
          text={"Deletar todos"}
          textMensagem={"Tem certeza que deseja \n deletar todos os clientes?"}
          isInput={false}
        />

        <Modal
          isText={false}
          onClose={() => setModalEditar(!modalEditar)}
          visible={modalEditar}
          key={15}
          text={"Editar"}
          isInput={true}
        />

        <Modal
          isText={true}
          onClose={() => userDeletar(modalDelete.data)}
          visible={modalDelete.open}
          key={numberKeyDeletar}
          text={"Deletar"}
          isInput={false}
          textMensagem={`Tem certeza que deseja deletar esse item?`} 
        />
      </ScrollView>
    </SafeAreaView>
  )
}
