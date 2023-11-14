import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Styles from '../../components/styles/Styles';
import LogoSecundaria from '../../components/LogoSecundaria';
import BarraDePesquisa from '../../components/BarraDePesquisa';
import BotaoCadastrar from '../../components/BotaoCadastrar';
import Modal from '../../components/Modal';
import TabelaAgendamentosBarbearia from '../../components/TabelaAgendamentosBarbearia';

export default function AgendamentosB({navigation}) {
  const [modalAgendar, setModalAgendar] = useState(false);
  const [nomeServico, setNomeServico] = useState("");
  const [dataHora, setDataHora] = useState("");
  const [nomeCliente, setNomeCliente] = useState("");
  const [dataAgendamento, setDataAgendamento] = useState([]);
  const [listaServicos, setListaServicos] = useState([]);
  const [listaClientes, setListaClientes] = useState([]);
  const [modalEditar, setModalEditar] = useState({ data: {}, open: false });
  const [modalDelete, setModalDelete] = useState({ data: {}, open: false });
  const [dataPesquisada, setDataPesquisada] = useState("");

  const goToDashboard = () => {
    navigation.goBack();
  }
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
    const URLDeletar = `https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/Agendamentoes/${item.id}`;
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

    setDataHora(dataHora);
    setNomeCliente(nomeCliente);
    setNomeServico(nomeServico);
    
    const URL = `https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/Agendamentoes/${item.id}`;
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
    try {
      await fetch(URL, options);
        console.log("Deu certo ", options.body);
        console.log("Item editado com sucesso");
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

  dataDia = dataPesquisada;
  //Tela + Modals
  return (
    <SafeAreaView style={Styles.appDefault}>
      <ScrollView style={{marginTop: 20}} showsVerticalScrollIndicator={false}>
        <LogoSecundaria>Agendamentos</LogoSecundaria>
        <BarraDePesquisa valorBarraPesquisa={dataPesquisada} changeBarraPesquisa={(data) => setDataPesquisada(data)}/>
        <View style={{ flexDirection: 'row', marginTop: 40, marginBottom: 40 }}>
          <BotaoCadastrar text={"Agendar"} onPress={() => setModalAgendar(!modalAgendar)}/>
        </View>
        
        <Text style={[Styles.textLogoSecundaria, { fontSize: 25, alignSelf: 'flex-start', marginLeft: 10 }]}>{'Dia: ' + dataDia}</Text>
        <TabelaAgendamentosBarbearia 
          dataAgendamento={dataAgendamento.filter(item => item.data.includes(dataPesquisada))}
          onDelete={openModalDelete}
          onEditi={openModalEditar}
        />

        {/*Modal Agendar*/}
        <Modal
          key={1}
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
          onCloseTeste={goToDashboard}
        />

        {/*Modal Deletar todos*/}
        <Modal
          key={2}
          isText={true}
          visible={false}
          text={"Deletar todos"}
          textMensagem={"Tem certeza que deseja \n deletar todos os clientes?"}
          isInput={false}
          onCloseTeste={goToDashboard}
        />

        {/*Modal Editar*/}
        <Modal
          key={3}
          isText={false}
          onClose={() => userEditar(modalEditar.data)}
          visible={modalEditar.open}
          text={"Editar"}
          valueNomeAgendamentoCliente={nomeCliente.clienteNome}
          valueNomeServico={nomeServico}
          valueDataHora={dataHora}
          inputNome={setNomeCliente}
          inputNomeServico={setNomeServico}
          inputDataHora={setDataHora}
          inputModalAgendamento={true}
          onCloseTeste={goToDashboard}
        />

        {/*Modal Deletar*/}
        <Modal
          key={4}
          isText={true}
          onClose={() => userDeletar(modalDelete.data)}
          visible={modalDelete.open}
          text={"Deletar"}
          isInput={false}
          textMensagem={`Tem certeza que deseja deletar esse item?`} 
          onCloseTeste={goToDashboard}
        />
      </ScrollView>
    </SafeAreaView>
  )
}
