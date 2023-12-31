import Modal from '../components/Modal'

export default function Deslogar({navigation}) {
    const handleLogout = () => {
        navigation.navigate('GetStarted')
    }

    const goToDashboard = () => {
        navigation.goBack();
    }
    return (
        <Modal
        onCloseTeste={goToDashboard}
        isText={true}
        onClose={handleLogout}
        visible={true}
        key={1}
        text={"Deslogar"}
        textMensagem={"Tem certeza que desejar deslogar ?"}
        isInput={false}
        />
    );
}   