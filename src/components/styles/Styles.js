import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('screen').width;

export default StyleSheet.create ({
    appDefault:{
        backgroundColor: '#1E1E1E',
        justifyContent: 'center', 
        alignItems: 'center', 
        flex: 1,
    },
    textoDoTitulo: {
        fontSize: 35,
        color: '#FFFF',
        marginTop: 35,
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: 35,
    },
    logoBarbearia: {
        width: 300,
        height: 300,
        resizeMode: 'cover',
    },
    button: {
        borderWidth: 2,
        borderRadius: 30,
        borderColor: '#B9901E',
        width: 280,
        height: 55,
        backgroundColor: 'transparent',
        margin: 20,
        justifyContent: 'center'
    },
    text: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 2,
        borderRadius: 30,
        borderColor: '#B9901E',
        width: 280,
        height: 55,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        padding: 15,
        marginBottom: 30,
        color: 'white'
    },
    textInput: {
        color: '#FFFF',
        paddingBottom: 10,
        fontSize: 20
    },
    botaoEnviar: {
        borderRadius: 30,
        backgroundColor: '#B9901E',
        width: 66,
        height: 44,
        textAlign: 'center',
    },
    containerBotaoEnviar: {
        width: '100%',
        alignItems: 'flex-end',
        marginRight: 140,
    },
    textInputSenha: {
        color: '#FFFF',
        paddingBottom: 10,
        fontSize: 20,
        marginRight: 205
    },
    containerLogoSecundaria: {
        marginBottom: 400,
        alignItems: 'center'
    },
    logoSecundaria: {
        width: 120,
        height: 80,
        resizeMode: 'cover',
    },
    textLogoSecundaria: {
        color: "#FFFF",
        textAlign: 'center',
        fontSize: 30
    },
    barraDePesquisa: {
        borderWidth: 1,
        borderRadius: 30,
        width: 350,
        height: 50,
        backgroundColor: '#FFFF',
        justifyContent: 'center',
        color: 'black',
        textAlign: 'center',
    },
    textHomeCliente: {
        color: '#FFF',
        fontSize: 20,
        marginTop: 20,
    },
    textInformacaoBarber: {
        color: '#FFF',
        fontSize: 16,
    },
    imgHomeCliente: {
        width: 25, 
        height: 25, 
        marginRight: 10,
    },
    textContainer: {
        flexDirection: 'column', 
        alignItems: 'center'
    },
    containerFilho: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'left'
    },
    alinhamento: {
        alignItems: 'left'
    },
    containerPerfil: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#B9901E',
        borderRadius: 30,
        width: 350,
        height: 210,
        justifyContent: 'center',
        alignItems: 'center',
    },
    InputPerfil: {
        borderRadius: 30,
        backgroundColor: '#FFFFFF',
        width: 300,
        height: 45,
        marginBottom: 10,
        paddingLeft: 15
    },
    tituloInput: {
        color: '#FFFF',
        fontSize: 18,
        margin: 8
    },
    textInputConta: {
        color: '#FFFF',
        paddingBottom: 15,
        fontSize: 20,
        marginRight: 230
    },
    containerLocalizacao: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#B9901E',
        borderRadius: 30,
        width: 350,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInputLocalizacao: {
        color: '#FFFFFF',
        fontSize: 20,
        width: '90%',
        marginLeft: 30,
        marginTop: 45,
        marginBottom: 15
    }
})