import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { DataTable } from 'react-native-paper';

export default App = () => {
    var clientes = [
        {
            id: 1,
            nome: 'Leonardo',
            telefone: '43 99999-9999'
        },
        {
            id: 2,
            nome: 'Pedro',
            telefone: '43 11111-1111'
        },
    ];

    return (
        <View style={{width: 310}}>
        <DataTable>
            <DataTable.Header style={{ borderBottomColor: '#B9901E'}}>
                <DataTable.Title textStyle={styles.title}>Nome</DataTable.Title>
                <DataTable.Title textStyle={styles.title}>
                    Telefone
                </DataTable.Title>
                <DataTable.Title style={{marginLeft: 5}} textStyle={styles.title}>Ações</DataTable.Title>
            </DataTable.Header>
            {
            clientes.map(cliente => {
            return (
                <DataTable.Row 
                    style={{ borderBottomColor: '#B9901E' }}
                    key={cliente.id} // you need a unique key per item
                    onPress={() => {
                    // added to illustrate how you can make the row take the onPress event and do something
                    console.log(`cliente selecionado ${cliente.id}`)
                }}
                >
                <DataTable.Cell textStyle={styles.cell}>
                    {cliente.nome}
                </DataTable.Cell>
                <DataTable.Cell textStyle={styles.cell}>
                    {cliente.telefone}
                </DataTable.Cell>
                <DataTable.Cell textStyle={styles.cell}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name='pencil'size={20} color='#B9901E' style={{ marginLeft: 25, marginRight: 10}}/>
                    <Icon name='trash' size={20} color='#767676'/>
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
        marginStart: 25
    },
    cell: {
        fontSize: 14, 
        color: '#CECECE',
        marginStart: 25
    }
  });