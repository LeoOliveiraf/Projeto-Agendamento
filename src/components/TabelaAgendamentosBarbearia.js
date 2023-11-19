import * as React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { DataTable } from "react-native-paper";
import moment from "moment";

export default App = ({ dataAgendamento, onDelete, onEditi }) => {
  return (
    <View style={{ width: 320 }}>
      <DataTable>
        <DataTable.Header style={{ borderBottomColor: "#B9901E" }}>
          <View style={{ width: 80 }}>
            <DataTable.Title textStyle={styles.title}>Nome</DataTable.Title>
          </View>
          <View style={{ width: 80, marginLeft: -5 }}>
            <DataTable.Title textStyle={styles.title}>Horário</DataTable.Title>
          </View>
          <View style={{ width: 80, marginLeft: 10 }}>
            <DataTable.Title textStyle={styles.title}>Serviço</DataTable.Title>
          </View>
          <View style={{ width: 80 }}>
            <DataTable.Title style={{ marginLeft: 5 }} textStyle={styles.title}>
              Ações
            </DataTable.Title>
          </View>
        </DataTable.Header>
        {dataAgendamento.map((item) => (
          <DataTable.Row
            style={{ borderBottomColor: "#B9901E" }}
            key={item.id} // you need a unique key per item
            onPress={() => {}}
          >
            <View style={{ width: 50 }}>
              <DataTable.Cell textStyle={[styles.cell]}>
                {item.clienteNome}
              </DataTable.Cell>
            </View>
            <View style={{ width: 110 }}>
              <DataTable.Cell textStyle={[styles.cell]}>
                {item.data}
              </DataTable.Cell>
            </View>
            <View style={{ width: 60 }}>
              <DataTable.Cell textStyle={[styles.cell, { marginLeft: 10 }]}>
                {item.tipoServicoNome}
              </DataTable.Cell>
            </View>
            <View>
              <DataTable.Cell textStyle={[styles.cell]}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Icon
                    name="pencil"
                    size={20}
                    color="#B9901E"
                    style={{ marginLeft: 30, marginRight: 10 }}
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
};

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
  cell: {
    color: "#CECECE",
    fontSize: 11,
  },
});
