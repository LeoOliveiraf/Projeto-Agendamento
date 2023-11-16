import React, { createContext, useState } from 'react';
import { Alert } from 'react-native';

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [navigation, setNavigation] = useState(null);

  function signIn(nome, telefone, dataClientes) {
    const inputNome = nome;
    const inputCelular = telefone;

    if (dataClientes.length > 0) {
      const loginCorreto = dataClientes.some(
        (cliente) => cliente.nome === inputNome && cliente.telefone === inputCelular
      );

      if (loginCorreto) {
        setUser({
          nome: inputNome,
          telefone: inputCelular
        });

        // Verifica se a navegação está definida antes de usá-la
        if (navigation) {
          navigation.navigate('HomeC');
        } 
      } else {
        Alert.alert('Nome ou Telefone estão Incorretos!')
      }
    } else {
      Alert.alert('Nome ou Telefone estão Incorretos!')
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, user, setNavigation }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
