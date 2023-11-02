import { registerRootComponent } from 'expo';

import GetStarted from './src/pages/GetStarted';
import LoginCliente from './src/pages/LoginCliente';
import LoginBarbearia from './src/pages/LoginBarbearia';
import HomeBarbearia from './src/pages/HomeBarbearia';
import AgendamentoBarbearia from './src/pages/AgendamentoBarbearias';
import HomeCliente from './src/pages/HomeCliente';
import PerfilBarbearia from './src/pages/PerfilBarbearia';
import ServicosBarbearia from './src/pages/ServicosBarbearia'; 
import ClientesBarbearia from './src/pages/ClientesBarbearia.js';
import AgendamentoCliente from './src/pages/AgendamentoCliente.js';
import ServicoCliente from './src/pages/ServicoCliente.js';
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(GetStarted);
