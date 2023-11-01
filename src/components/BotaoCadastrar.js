import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Styles from './styles/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function BotaoCadastrar({ onPress }) {
  return (
    <TouchableOpacity style={Styles.botaoCadastrar} onPress={onPress}>
      <Icon name='plus' size={20} color='white' style={{ textAlign: 'center', marginRight: 8 }} />
      <Text style={Styles.textBotao}>Agendar</Text>
    </TouchableOpacity>
  );
}