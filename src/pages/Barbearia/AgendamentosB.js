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
  const [modalEditar, setModalEditar] = useState({ data: {}, open: false });
  const [modalDelete, setModalDelete] = useState({ data: {}, open: false });

  //Carregando dados - GET Serviços
  const URL = "https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/TipoServicoes";
  const getTipoServicoes = async () => {
    try {
      const response = await fetch(URL);
      const json = await response.json();
      //setData(json);
      setListaServicos(json);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getTipoServicoes();
  }, []);

  //Carregando dados - GET Clientes
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

  //Começando método DELETE
  const openModalDelete = (item) => {
    setModalDelete({ open: true, data: item });
  };
  const userDeletar = async (item) => {
    const URLDeletar = 'https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/Agendamentoes/' + item.id;
    const options = {
      method: "DELETE",
    };

    try {
      const response = await fetch(URLDeletar, options);
      if (response.ok) {
        console.log("item excluído com sucesso!");
      }
    } catch (error) {
      console.error("Erro na solicitação:", error);
    } finally {
      setModalDelete({ data: {}, open: false });
      doGetAgendamento();
    }
  };


  //Começando método POST
  const doPost = async () => {
    const URL = "https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/Agendamentoes/createAgendamento";
    //Tirando o Id do objeto serviceId e renomeando ele (Desestruturação)
    const {id: serviceId} = listaServicos.find(servico => servico.nome.toLowerCase().trim() === nomeServico.toLowerCase().trim() );
    const {id: clienteId} = listaClientes.find(cliente => cliente.nome.toLowerCase().trim() === nomeCliente.toLowerCase().trim() );
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
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
  

  // Começando o método PUT
  const openModalEditar = (item) => {
    setModalEditar({open: true, data: item});
  };
  const userEditar = async (item) => {
    const {id: serviceId} = listaServicos.find(servico => servico.nome.toLowerCase().trim() === nomeServico.toLowerCase().trim() );
    const {id: clienteId} = listaClientes.find(cliente => cliente.nome.toLowerCase().trim() === nomeCliente.toLowerCase().trim() );
    
    console.log(serviceId);
    console.log(clienteId);

    const URLEditar = 'https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/Agendamentoes/' + item.id;
    setDataHora(dataHora);
    setNomeCliente(nomeCliente);
    setNomeServico(nomeServico);
    const options = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: item.id,
        data: dataHora,
        tipoServicoId: serviceId,
        clienteId: clienteId,
        barbeariaId: 1
      }),
    };
    console.log(options.body);
    try {
      const response = await fetch(URLEditar, options);
      if(response.ok){
        console.log("Item editado com sucesso");
      }
    } catch (error) {
      console.log("Erro na solicitação: ", error);
    } finally {
      setModalEditar({data: {}, open: false});
      doGetAgendamento();
    }
  }


  //Começando método GET
  const URLAgendamento = "https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/Agendamentoes/listaAgendamento";
  const doGetAgendamento = async () => {
    try {
      const response = await fetch(URLAgendamento);
      const json = await response.json();
      setDataAgendamento(json);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    doGetAgendamento();
  }, []);


  //Tela + Modais
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
          onEditi={openModalEditar}
        />

        {/*Modal Agendar*/}
        <Modal
          isText={false}
          onClose={() => setData()}
          visible={modalAgendar}
          text={"Agendar"}
          inputModalAgendamento={true}
          inputNome={setNomeCliente}
          valueNomeAgendamentoCliente={nomeCliente}
          valueDataHora={dataHora}
          inputDataHora={setDataHora}
          inputNomeServico={setNomeServico}
          valueNomeServico={nomeServico}
        />

        {/*Modal Deletar todos*/}
        <Modal
          isText={true}
          visible={false}
          text={"Deletar todos"}
          textMensagem={"Tem certeza que deseja \n deletar todos os clientes?"}
          isInput={false}
        />

        {/*Modal Editar*/}
        <Modal
          isText={false}
          onClose={() => userEditar(modalEditar.data)}
          visible={modalEditar.open}
          text={"Editar"}
          key={16}
          valueNomeAgendamentoCliente={nomeCliente}
          valueNomeServico={nomeServico}
          valueDataHora={dataHora}
          inputNome={setNomeCliente}
          inputNomeServico={setNomeServico}
          inputDataHora={setDataHora}
          inputModalAgendamento={true}
        />

        {/*Modal Deletar*/}
        <Modal
          isText={true}
          onClose={() => userDeletar(modalDelete.data)}
          visible={modalDelete.open}
          text={"Deletar"}
          isInput={false}
          textMensagem={`Tem certeza que deseja deletar esse item?`} 
        />
      </ScrollView>
    </SafeAreaView>
  )
}
