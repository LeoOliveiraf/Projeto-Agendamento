import { ScrollView, Text, TextInput, View } from "react-native";
import Styles from "../components/styles/Styles";
import LogoSecundaria from "../components/LogoSecundaria";
import BotaoSalvar from "../components/BotaoSalvar";
import BotaoDeslogar from "../components/BotaoDeslogar";    

export default function PerfilBarbearia() {
    return(
  
        <View style={Styles.appDefault}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{}}>
        <LogoSecundaria>Perfil</LogoSecundaria> 
        <Text style={Styles.textInputConta}>Editar Conta</Text>
        <View style={Styles.containerPerfil}>
            <View style={{ width: '90%' }}>
                <Text style={Styles.tituloInput}>Palavra-chave</Text>
            </View>
            <TextInput style={Styles.InputPerfil} />
            <View style={{ width: '90%' }}>
                <Text style={Styles.tituloInput}>Senha</Text>
            </View>
            <TextInput style={Styles.InputPerfil} secureTextEntry={true} />
        </View>
        <Text style={Styles.textInputLocalizacao}>Editar localização e contato</Text>
        <View style={Styles.containerLocalizacao}>
            <View style={{ width: '90%' }}>
                <Text style={Styles.tituloInput}>Endereço</Text>
            </View>
            <TextInput style={Styles.InputPerfil} />
            <View style={{ width: '90%' }}>
                <Text style={Styles.tituloInput}>WhatsApp</Text>
            </View>
            <TextInput style={Styles.InputPerfil} />
            <View style={{ width: '90%' }}>
                <Text style={Styles.tituloInput}>Instagram</Text>
            </View>
            <TextInput style={Styles.InputPerfil} />
        </View>
        <View style={{alignItems:'center'}}>
            <BotaoSalvar>Salvar</BotaoSalvar>
            <BotaoDeslogar>Deslogar</BotaoDeslogar>
        </View>
        </ScrollView>
    </View>
    )
}