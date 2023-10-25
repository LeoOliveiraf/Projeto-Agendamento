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
        alignItems: 'center'
    },
    logoSecundaria: {
        width: 100,
        height: 50,
        resizeMode: 'contain'
    },
    textLogoSecundaria: {
        color: "#FFFF",
        textAlign: 'center',
        fontSize: 30,
        marginTop: 10,
        marginBottom: 30,
    },
    botaoCadastrar: {
        borderRadius: 30,
        width: 130,
        height: 40,
        backgroundColor: '#B9901E',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 300, 
        marginTop: 40,
        alignSelf: 'flex-start',
        marginRight: 40
    },
    botaoDeletar: {
        borderRadius: 30,
        width: 140,
        height: 40,
        backgroundColor: '#767676',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 300, 
        marginTop: 40,
        alignSelf: 'flex-end',
    },
    textBotao:{
        fontSize: 18,
        textAlign: 'center',
        color: '#fff',
    }
})