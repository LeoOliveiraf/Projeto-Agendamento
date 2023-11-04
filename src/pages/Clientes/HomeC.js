import { Image, Text, View } from "react-native";
import LogoHome from "../../components/LogoHome";
import Styles from "../../components/styles/Styles";
import Titulos from "../../components/Titulo";
import BotaoSecundario from "../../components/BotaoSecundario";
import localizacao from "../../assets/imgs/localizacao.png"
import whatsapp from "../../assets/imgs/whatsapp.png";
import instagram from "../../assets/imgs/instagram.png";

export default function HomeC({navigation}) {
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
              R. Rio Ívai, 207 - {"\n"} Jd Santo Amaro, Cambé - PR
            </Text>
          </View>
          <View style={Styles.containerFilho}>
            <Image source={whatsapp} style={Styles.imgHomeCliente} />
            <Text style={Styles.textInformacaoBarber}>(43) 98486-6535</Text>
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
