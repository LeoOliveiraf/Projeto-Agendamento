import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { DataTable } from 'react-native-paper';
import moment from 'moment';

export default App = ({ dataAgendamento, onDelete, onEditi }) => {
    //const formatIsoToBrData = (isoDate) => {
       //return !isoDate ? "NULL" : moment.utc(isoDate).format("DD/MM/YYYY");
    //}

    return (
        <View style={{ width: 310 }}>
        <DataTable>
            <DataTable.Header style={{ borderBottomColor: '#B9901E'}}>
                <DataTable.Title textStyle={styles.title}>Nome</DataTable.Title>
                <DataTable.Title textStyle={styles.title}>
                    Horário
                </DataTable.Title>
                <DataTable.Title textStyle={styles.title}>Serviço</DataTable.Title>
                <DataTable.Title style={{marginLeft: 5}} textStyle={styles.title}>Ações</DataTable.Title>
            </DataTable.Header>
            {dataAgendamento.map((item) => (
                <DataTable.Row 
                    style={{ borderBottomColor: '#B9901E' }}
                    key={item.id} // you need a unique key per item
                    onPress={() => {
                    }}
                >
                <DataTable.Cell textStyle={styles.cell}>
                    {item.clienteNome}
                </DataTable.Cell>
                <DataTable.Cell textStyle={styles.cell}>
                    {item.data}
                </DataTable.Cell>
                <DataTable.Cell textStyle={styles.cell}> 
                    {item.tipoServicoNome}
                </DataTable.Cell>
                <DataTable.Cell textStyle={styles.cell}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon 
                        name='pencil'
                        size={20}
                        color='#B9901E'
                        style={{ marginLeft: 10, marginRight: 10}}
                        onPress={() => onEditi(item)}
                        
                    />
                    <Icon
                        name='trash'
                        size={20}
                        color='#767676'
                        onPress={() => onDelete(item)}
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
        color: '#fff', 
        fontWeight: 'bold',
        marginStart: 10
    },
    cell: {
        fontSize: 14, 
        color: '#CECECE',
        marginStart: 10
    }
  });