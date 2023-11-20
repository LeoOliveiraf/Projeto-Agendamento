import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View, Alert } from 'react-native';
import Styles from '../../components/styles/Styles';
import LogoSecundaria from '../../components/LogoSecundaria';
import BarraDePesquisa from '../../components/BarraDePesquisa';
import BotaoCadastrar from '../../components/BotaoCadastrar';
import Modal from '../../components/Modal';
import TabelaAgendamentosBarbearia from '../../components/TabelaAgendamentosBarbearia';
import moment from 'moment';

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

  const BR_DATETIME_PATTERN = "DD/MM/YYYY HH:mm";
  const  ISO_DATETIME_PATTERN = "YYYY-MM-DDTHH:mm:ss.SSS[Z]"

  const transforToISoToFormat = (dateString) => {
    const date = moment(dateString, BR_DATETIME_PATTERN);
    return date.isValid() ? date.format(ISO_DATETIME_PATTERN) : "Data Incorreta"
  }

  const formatIsoToBrData = (isoDate) => {
    return !isoDate ? "" : moment.utc(isoDate).format("DD/MM/YYYY HH:mm");
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
        data: transforToISoToFormat(dataHora),
        tipoServicoId: serviceId,
        clienteId: clienteId,
        barbeariaId: 1
      }),
    };
    const conflitoAgendamento = formatadaData.find(data => data.data.toLowerCase().trim() === dataHora.toLowerCase().trim());
    if(conflitoAgendamento){
      Alert.alert("Já existe um agendamento marcado para esse dia e horario!");
    }else{
      const response =  await fetch(URL, options)
      const data = await response.json();
    }
  };
  const limparInputsAgendamento = () => {
    setNomeCliente("");
    setNomeServico("");
    setDataHora("");
  }
  const setData = async () => {
    await doPost();
    limparInputsAgendamento();
    setModalAgendar(!modalAgendar);
    await doGetAgendamento();
  };
  // Começando o método PUT
  const openModalEditar = (item) => {
    setNomeCliente(item.clienteNome);
    setNomeServico(item.tipoServicoNome);
    setDataHora(item.data);
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
        data: transforToISoToFormat(dataHora),
        tipoServicoId: serviceId,
        clienteId: clienteId,
        barbeariaId: 1
      }),
    };
    const conflitoAgendamento = formatadaData.find(data => data.data.toLowerCase().trim() === dataHora.toLowerCase().trim());
    if(conflitoAgendamento){
      Alert.alert("Já existe um agendamento marcado para esse dia e horario!");
    }else{
      try {
        await fetch(URL, options);
          console.log("Deu certo ", options.body);
          console.log("Item editado com sucesso");
      } catch (error) {
        console.log("Erro na solicitação: ", error);
      } finally {
        limparInputsAgendamento();
        setModalEditar({data: {}, open: false});
        doGetAgendamento();
      }
    }
  }

  const formatadaData = dataAgendamento.map(item => {
    return {
      ...item,
      data: formatIsoToBrData(item.data)
    };
  });

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
          dataAgendamento={formatadaData.filter(item => item.data.includes(dataPesquisada))}
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
          onCloseTeste={() => setModalAgendar({ data: {}, open: false })}
        />
        {/*Modal Editar*/}
        <Modal
          key={3}
          isText={false}
          onClose={() => userEditar(modalEditar.data)}
          visible={modalEditar.open}
          text={"Editar"}
          valueNomeAgendamentoCliente={nomeCliente}
          valueNomeServico={nomeServico}
          valueDataHora={dataHora}
          inputNome={setNomeCliente}
          inputNomeServico={setNomeServico}
          inputDataHora={setDataHora}
          inputModalAgendamento={true}
          onCloseTeste={() => setModalEditar({ data: {}, open: false })}
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
          onCloseTeste={() => setModalDelete({ data: {}, open: false })}
        />
      </ScrollView>
    </SafeAreaView>
  )
}
