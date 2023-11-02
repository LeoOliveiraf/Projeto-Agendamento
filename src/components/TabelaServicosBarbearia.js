import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { DataTable } from 'react-native-paper';

export default App = ({onPress, onPressDeletar}) => {
    var servicos = [
        {
            id: 1,
            nome: 'Barba',
            valor: 'R$40,00'
        },
        {
            id: 2,
            nome: 'Corte',
            valor: 'R$55,00'
        },
    ];

    return (
        <View style={{width: 310}}>
        <DataTable>
            <DataTable.Header style={{ borderBottomColor: '#B9901E'}}>
                <DataTable.Title textStyle={styles.title}>Nome</DataTable.Title>
                <DataTable.Title textStyle={styles.title}>
                    Valor
                </DataTable.Title>
                <DataTable.Title style={{marginLeft: 5}} textStyle={styles.title}>Ações</DataTable.Title>
            </DataTable.Header>
            {
            servicos.map(servico => {
            return (
                <DataTable.Row 
                    style={{ borderBottomColor: '#B9901E' }}
                    key={servico.id} // you need a unique key per item
                    onPress={() => {
                    // added to illustrate how you can make the row take the onPress event and do something
                    console.log(`servico selecionado ${servico.id}`)
                }}
                >
                <DataTable.Cell textStyle={styles.cell}>
                    {servico.nome}
                </DataTable.Cell>
                <DataTable.Cell textStyle={styles.cell}>
                    {servico.valor}
                </DataTable.Cell>
                <DataTable.Cell textStyle={styles.cell}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name='pencil'size={20} color='#B9901E' style={{ marginLeft: 25, marginRight: 10}} onPress={onPress}/>
                    <Icon name='trash' size={20} color='#767676' onPress={onPressDeletar}/>
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