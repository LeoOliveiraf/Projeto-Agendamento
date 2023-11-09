import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { DataTable } from 'react-native-paper';

export default App = ({ dataClientes ,onPress, onPressDeletar }) => {

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
            {
            dataClientes.map(agendamento => {
            return (
                <DataTable.Row 
                    style={{ borderBottomColor: '#B9901E' }}
                    key={agendamento.id} // you need a unique key per item
                    onPress={() => {
                    }}
                >
                <DataTable.Cell textStyle={styles.cell}>
                    {agendamento.nome}
                </DataTable.Cell>
                <DataTable.Cell textStyle={styles.cell}>
                    {agendamento.horario}
                </DataTable.Cell>
                <DataTable.Cell textStyle={styles.cell}> 
                    {agendamento.servico}
                </DataTable.Cell>
                <DataTable.Cell textStyle={styles.cell}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon 
                        name='pencil'
                        size={20}
                        color='#B9901E'
                        style={{ marginLeft: 10, marginRight: 10}}
                        onPress={onPress}
                    />
                    <Icon
                        name='trash'
                        size={20}
                        color='#767676'
                        onPress={onPressDeletar}/>
                </View>
                </DataTable.Cell>
                </DataTable.Row>
            )})}
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