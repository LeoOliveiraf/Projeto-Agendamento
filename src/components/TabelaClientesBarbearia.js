import * as React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { DataTable } from "react-native-paper";
import { useState, useEffect } from "react";

export default function App({ onPress, onPressDeletar }) {
  const [data, setData] = useState([]);
  const URL = "GET";

  const getClientes = async () => {
    try {
      const response = await fetch(URL);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getClientes();
  }, []);

  return (
    <View style={{ width: 310 }}>
      <DataTable>
        <DataTable.Header style={{ borderBottomColor: "#B9901E" }}>
          <DataTable.Title textStyle={styles.title}>Nome</DataTable.Title>
          <DataTable.Title textStyle={styles.title}>Telefone</DataTable.Title>
          <DataTable.Title style={{ marginLeft: 5 }} textStyle={styles.title}>
            Ações
          </DataTable.Title>
        </DataTable.Header>
        {data.map((item) => (
            <DataTable.Row
              style={{ borderBottomColor: "#B9901E" }}
              key={item.id}
              onPress={() => {
                // Ação ao pressionar a linha
              }}
            >
              <DataTable.Cell textStyle={styles.cell}>
                {item.title}
              </DataTable.Cell>
              <DataTable.Cell textStyle={styles.cell}>
                {item.id}
              </DataTable.Cell>
              <DataTable.Cell textStyle={styles.cell}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Icon
                    name="pencil"
                    size={20}
                    color="#B9901E"
                    style={{ marginLeft: 25, marginRight: 10 }}
                    onPress={() => onPress(item)}
                  />
                  <Icon
                    name="trash"
                    size={20}
                    color="#767676"
                    onPress={() => onPressDeletar(item)} 
                  />
                </View>
              </DataTable.Cell>
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
    marginStart: 25,
  },
  cell: {
    fontSize: 14,
    color: "#CECECE",
    marginStart: 25,
  },
});