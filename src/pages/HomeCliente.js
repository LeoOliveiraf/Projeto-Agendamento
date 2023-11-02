import { Image, Text, View } from "react-native";
import LogoHome from "../components/LogoHome";
import Styles from "../components/styles/Styles";
import Titulos from "../components/Titulo";
import BotaoSecundario from "../components/BotaoSecundario";
import imgLocalizacao from "../assets/imgLocalizacao.png";
import whatsapp from "../assets/whatsapp.png";
import instagram from "../assets/instagram.png";
export default function HomeCliente() {
  return (
    <View style={Styles.appDefault}>
      <LogoHome />
      <Titulos>Olá Murilo. {"\n"} Seja bem-vindo!</Titulos>
      <BotaoSecundario text={'Agendamentos'}/>
      <BotaoSecundario text={'Nossos Serviços'}/>

      <View style={Styles.textContainer}>
        <View style={Styles.alinhamento}>
          <Text style={Styles.textHomeCliente}>Localização e Contato</Text>
          <View style={Styles.containerFilho}>
            <Image source={imgLocalizacao} style={Styles.imgHomeCliente} />
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
