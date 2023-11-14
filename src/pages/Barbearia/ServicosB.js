import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import LogoSecundaria from "../../components/LogoSecundaria";
import Styles from "../../components/styles/Styles";
import { useState, useEffect } from "react";
import TabelaServicosBarbearia from "../../components/TabelaServicosBarbearia";
import BotaoCadastrar from "../../components/BotaoCadastrar";
import BotaoDeletar from "../../components/BotaoDeletar";
import Modal from "../../components/Modal";

export default function ServicosC() {
    const [modalEdit, setModalEdit] = useState({data: {}, open: false});
    const [modalDelete, setModalDelete] = useState({data: {}, open: false});
    const [modalCadastrar, setModalCadastrar] = useState(false);
    const [dataServicos, setDataServicos] = useState([]);
    const [nomeServico, setNomeServico] = useState("");
    const [valorServico, setValorServico] = useState("");
    const [duracaoServico, setDuracaoServico] = useState("");

    const openModalEdit = (item) => {
        setNomeServico(item.nome);
        setValorServico(item.valor.toString());
        setDuracaoServico(item.duracao.toString());
        setModalEdit({open: true, data: item});
    };
    const openModalDelete = (item) => {
        setModalDelete({open: true, data: item});
    };
    const goToDashboard = () => {
        navigation.goBack();
      }
    
    //Começando o método GET
    const URL = "https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/TipoServicoes";
    const getServicos = async () => {
        const options = {
            method: "GET",
        }
        try {
            const response = await fetch(URL, options);
            const json = await response.json();
            setDataServicos(json);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getServicos();
    }, []);
    //Começando método POST
    const doPost = () => {
        const URL = "https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/TipoServicoes";
        const options = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nome: nomeServico,
                valor: valorServico,
                duracao: duracaoServico,
            }),
        };
        fetch(URL, options).then((response) => {
            if(!response.ok){
                throw new Error("A solicitação via POST falhou!");
            }
            return response.json();
        });
    };
    const setData = () => {
        doPost();
        setModalCadastrar(!modalCadastrar);
        getServicos();
    };

    //Começando método DELETE
    const servicoDeletar = async (item) => {
        const URL = `https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/TipoServicoes/${item.id}`;
        const options = {
            method: "DELETE",
        }
        try {
            const response = await fetch(URL, options);
            if(response.ok){
                console.log("Serviço excluído com sucesso.");
            }
        } catch (error) {
            console.error("Erro ao excluir o serviço: ", error);
        } finally {
            setModalDelete({data: {}, open: false});
            getServicos();
        }
    }

    //Começando método PUT
    const doPut = async (item) => {
        setNomeServico(nomeServico); 
        setValorServico(valorServico);
        setDuracaoServico(duracaoServico);

        const URL = `https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/TipoServicoes/${item.id}`;
        const options = {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: item.id,
                nome: nomeServico,
                duracao: duracaoServico,
                valor: valorServico,
            }),
        };
        try {
            await fetch(URL, options);
            console.log("Deu certo ", options.body);
        } catch (error) {
            console.error("Erro ao editar serviço: ", error);
        } finally {
            setModalEdit({data: {}, open: false});
            getServicos();
        }
    }

  // Telas + Modais
  return (
    <SafeAreaView style={Styles.appDefault}>
      <ScrollView style={{marginTop: 20}} showsVerticalScrollIndicator={false}>
        <LogoSecundaria>Serviços</LogoSecundaria>
        <View style={{flexDirection: "row", marginTop: 40, marginBottom: 30}}>
            <BotaoCadastrar
                text={"Cadastrar"}
                onPress={() => setModalCadastrar(!modalCadastrar)}
            />
        </View>
        <TabelaServicosBarbearia
            dataServicos={dataServicos}
            onDelete={openModalDelete}
            onEdit={openModalEdit}
        />

        {/*Modal Cadastrar*/}
        <Modal
            key={1}
            isText={false}
            visible={modalCadastrar}
            text={"Cadastrar"}
            inputModalService={true}
            inputNomeServico={setNomeServico}
            inputValor={setValorServico}
            inputDuracao={setDuracaoServico}
            valueNome={nomeServico}
            valueDuracao={duracaoServico}
            valueValor={valorServico}
            onClose={() => setData()}
            onCloseTeste={goToDashboard}
        />

        {/*Modal Deletar*/}
        <Modal
            key={2}
            isText={true}
            onClose={() => servicoDeletar(modalDelete.data)}
            visible={modalDelete.open}
            text={"Deletar"}
            textMensagem={`Tem certeza que deseja deletar o serviço ${modalDelete.data.nome}?`}
            onCloseTeste={goToDashboard}
        />

        {/*Modal Editar*/}
        <Modal
            key={3}
            isText={false}
            onClose={() => doPut(modalEdit.data)}
            visible={modalEdit.open}
            text={"Editar"}
            inputModalService={true}
            inputNomeServico={setNomeServico}
            inputValor={setValorServico}
            inputDuracao={setDuracaoServico}
            valueNomeServico={nomeServico}
            valueValor={valorServico}
            valueNome={duracaoServico}
            onCloseTeste={goToDashboard}
        />
      </ScrollView>
    </SafeAreaView>
  );
}