import * as React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { DataTable } from "react-native-paper";


export default function App({ dataClientes, onDelete, onEditi }) {
  return (
    <View style={{ width: 330 }}>
      <DataTable>
        <DataTable.Header style={{ borderBottomColor: "#B9901E" }}>
          <View style={{width:110}}>
            <DataTable.Title textStyle={[styles.title, {marginLeft: 15}]}>Nome</DataTable.Title>
          </View>
          <View style={{width:110, marginLeft: -20}}>
            <DataTable.Title textStyle={styles.title}>Telefone</DataTable.Title>
          </View>
          <View style={{width:110}}>
            <DataTable.Title style={{ marginLeft: 20 }} textStyle={styles.title}>Ações</DataTable.Title>
          </View>
        </DataTable.Header>
        {dataClientes.map((item) => (
          <DataTable.Row
            style={{ borderBottomColor: "#B9901E" }}
            key={item.id}
            onPress={() => {
              // Ação ao pressionar a linha
            }}
          > 
            <View style={{width:110}}>
              <DataTable.Cell textStyle={[styles.cell, {marginLeft: 10}]}>
                {item.nome}
              </DataTable.Cell>
            </View>
            <View style={{width:110}}>
              <DataTable.Cell textStyle={[styles.cell,]}>
                {item.telefone}
              </DataTable.Cell>
            </View>
            <View style={{width:110}}>
              <DataTable.Cell textStyle={[styles.cell, {marginRight: 0}]}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Icon
                    name="pencil"
                    size={20}
                    color="#B9901E"
                    style={{ marginLeft: 25, marginRight: 10 }}
                    onPress={() => onEditi(item)}
                  />
                  <Icon
                    name="trash"
                    size={20}
                    color="#767676"
                    onPress={() => onDelete(item)} 
                  />
                </View>
              </DataTable.Cell>
            </View>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    marginStart: 20,
  },
  cell: {
    fontSize: 14,
    color: "#CECECE",
   
  },
});