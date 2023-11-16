import React, { createContext, useState } from 'react';

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
        } else {
          console.error("Erro: 'navigation' não está definido.");
        }

        // Você pode retornar ou fazer alguma outra ação após o login
        console.log("Login bem-sucedido");
      } else {
        console.log("Credenciais incorretas");
      }
    } else {
      console.log("Não há dados de Cliente");
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, user, setNavigation }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
