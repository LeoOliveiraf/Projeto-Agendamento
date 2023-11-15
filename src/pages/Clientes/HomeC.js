import { 
  Text,
  View, 
  Image } from "react-native";
import LogoHome from "../../components/LogoHome";
import Styles from "../../components/styles/Styles";
import Titulos from "../../components/Titulo";
import BotaoSecundario from "../../components/BotaoSecundario";
import localizacao from "../../assets/imgs/localizacao.png"
import whatsapp from "../../assets/imgs/whatsapp.png";
import instagram from "../../assets/imgs/instagram.png";
import { useState } from "react";
import { useEffect } from "react";

export default function HomeC({navigation}) {

  const [dataBarbeiro, setDataBarbeiro] = useState({ endereco: '', telefone: '' });

  {/* GET DA TABELA BARBEIRO */}
  const getbarbeiro = async () => {
    try {
      const URL = "https://barbershop-backend-dev-aftj.3.us-1.fl0.io/api/Barbearias/";
      const options = {
        method: 'GET'
      };
      const response = await fetch(URL,options);
      const json = await response.json();
      setDataBarbeiro(json[0]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getbarbeiro();
  }, []);


  return (
    <View style={Styles.appDefault}>
      <LogoHome />
      <Titulos>Olá Murilo. {"\n"} Seja bem-vindo!</Titulos>
      <BotaoSecundario text={'Agendamentos'} onPress={() => {navigation.navigate('AgendamentosC')}}/>
      <BotaoSecundario text={'Nossos Serviços'} onPress={() => {navigation.navigate('ServicosC')}}/>

      <View style={Styles.textContainer}>
        <View style={Styles.alinhamento}>
          <Text style={Styles.textHomeCliente}>Localização e Contato</Text>
          <View style={Styles.containerFilho}>
            <Image source={localizacao} style={Styles.imgHomeCliente} />
            <Text style={Styles.textInformacaoBarber}>
              {dataBarbeiro.endereco}
            </Text>
          </View>
          <View style={Styles.containerFilho}>
            <Image source={whatsapp} style={Styles.imgHomeCliente} />
            <Text style={Styles.textInformacaoBarber}>
              {dataBarbeiro.telefone}
            </Text>
          </View>
          <View style={Styles.containerFilho}>
            <Image source={instagram} style={Styles.imgHomeCliente} />
            <Text style={Styles.textInformacaoBarber}>@murilo.villasboas</Text>
          </View>
        </View>
      </View>
    </View>
  );
}