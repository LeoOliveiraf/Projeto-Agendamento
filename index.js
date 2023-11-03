import { registerRootComponent } from 'expo';

import GetStarted from './src/pages/GetStarted';
import LoginC from './src/pages/Clientes/Login';
import LoginB from './src/pages/Barbearia/Login';
import HomeC from './src/pages/Clientes/Home';
import HomeB from './src/pages/Barbearia/Home';
import AgendamentosC from './src/pages/Clientes/Agendamentos';
import AgendamentosB from './src/pages/Barbearia/Agendamentos';
import Perfil from './src/pages/Barbearia/Perfil';
import ServicosC from './src/pages/Clientes/Servicos';
import ServicosB from './src/pages/Barbearia/Servicos';
import Clientes from './src/pages/Barbearia/Clientes';
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(AgendamentosB);
