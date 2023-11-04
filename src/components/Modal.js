import React, { useState } from "react";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
import { TextInput } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function Popup({
  visible,
  onCloseTeste,
  onClose,
  text,
  isText,
  isInput,
  textMensagem,
  inputModalService,
  inputModalAgendamento,
}) {
  const [valueInputDuracao, setValueInputDuracao] = useState('')
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {isInput ? (
            <View>
              <Text style={{ marginTop: 15, fontSize: 17 }}>Nome</Text>
              <TextInput style={styles.inputModal} />
              <Text style={{ fontSize: 17 }}>Celular (com DDD)</Text>
              <TextInput style={styles.inputModal} />
            </View>
          ) : null}
          {inputModalService ? (
            <View>
              <Text style={{ marginTop: 15, fontSize: 17 }}>Nome</Text>
              <TextInput style={styles.inputModal} />
              <Text style={{ fontSize: 17 }}>Valor</Text>
              <TextInput style={styles.inputModal} />
              <Text style={{ fontSize: 17 }}>Duração</Text>
              <TextInput keyboardType="numeric" value={valueInputDuracao} style={styles.inputModal} />
              {/*Usar o useState junto com esse value para manipular o valor*/}
            </View>
          ) : null}
          {inputModalAgendamento ? (
            <View>
              <Text style={{ marginTop: 15, fontSize: 17 }}>Nome</Text>
              <TextInput style={styles.inputModal} />
              <Text style={{ fontSize: 17 }}>Serviço</Text>
              <TextInput keyboardType="numeric" value={valueInputDuracao} style={styles.inputModal} />
              <Text style={{ fontSize: 17 }}>Data e Horário</Text>
              <TextInput style={styles.inputModal} />
            </View>      
          ) : null}
          {isText ? <Text style={styles.modalText}>{textMensagem}</Text> : null}
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={onClose}
          >
            <Text style={styles.textStyle}>{text}</Text>
          </Pressable>
          <Pressable style={styles.closeButton} onPress={onCloseTeste}>
            <Icon name="close" size={30} color="#B9901E" />
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 30,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#B9901E",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginTop: 20,
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    left: 10,
    padding: 5,
    margin: -3,
  },
  inputModal: {
    backgroundColor: "#CECECE",
    width: 250,
    height: 37,
    borderRadius: 25,
    marginBottom: 20,
    paddingLeft: 10,
    color: "#000",
  },
});
