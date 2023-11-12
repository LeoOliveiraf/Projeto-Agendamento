import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { DataTable } from 'react-native-paper';

export default App = ({dataServicos, onDelete, onEdit}) => {
    return (
        <View style={{width: 330}}>
            <DataTable>
                <DataTable.Header style={{ borderBottomColor: '#B9901E'}}>
                    <View style={{width:110}}>
                        <DataTable.Title textStyle={styles.title}>Nome</DataTable.Title>
                    </View>
                    <View style={{width:110}}>
                        <DataTable.Title textStyle={styles.title}>Valor</DataTable.Title>
                    </View>
                    <View style={{width:110}}>
                        <DataTable.Title style={{marginLeft: 5}} textStyle={styles.title}>Ações</DataTable.Title>
                    </View>
                </DataTable.Header>
                {dataServicos.map((item) => (
                    <DataTable.Row 
                        style={{ borderBottomColor: '#B9901E' }}
                        key={item.id}
                        onPress={() => {
                            //console.log(`servico selecionado ${item.id}`)
                        }}
                    >
                        <View style={{width:110}}>
                            <DataTable.Cell textStyle={[styles.cell, {marginLeft: 20}]}>
                                {item.nome}
                            </DataTable.Cell>
                        </View>
                        <View style={{width:110}}>
                            <DataTable.Cell textStyle={[styles.cell, {marginLeft: 20}]}>
                                R$ {item.valor}
                            </DataTable.Cell>
                        </View>
                        <View style={{width:110}}>
                            <DataTable.Cell textStyle={styles.cell}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon 
                                        name='pencil'
                                        size={20}
                                        color='#B9901E'
                                        style={{ marginLeft: 25, marginRight: 10}}
                                        onPress={() => onEdit(item)}
                                    />
                                    <Icon 
                                        name='trash'
                                        size={20}
                                        color='#767676'
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
        color: '#fff', 
        fontWeight: 'bold',
        marginStart: 20
    },
    cell: {
        fontSize: 14, 
        color: '#CECECE',
    }
  });