import { KeyboardAvoidingView, Platform, Text, TextInput } from "react-native";
import Styles from "./styles/Styles";


export default function InputLogin({text, value, onChangeText}) {
    return<>
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}  style={Styles.containerInput} keyboardVerticalOffset={90}>
            <Text style={Styles.textInput}>{text}</Text>
            <TextInput style={Styles.input} value={value} onChangeText={onChangeText}></TextInput> 
        </KeyboardAvoidingView> 
    </>   
}