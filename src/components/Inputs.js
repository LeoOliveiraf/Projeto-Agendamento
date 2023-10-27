import { KeyboardAvoidingView, Platform, Text, TextInput } from "react-native";
import Styles from "./styles/Styles";


export default function InputLogin(props) {
    return<>
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}  style={Styles.containerInput} keyboardVerticalOffset={90}>
            <Text style={Styles.textInput}>{props.children}</Text>
            <TextInput style={Styles.input}></TextInput> 
        </KeyboardAvoidingView> 
    </>   
}