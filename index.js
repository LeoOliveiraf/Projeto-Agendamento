import { registerRootComponent } from 'expo';

import GetStarted from './src/pages/GetStarted';
import LoginC from './src/pages/Clientes/LoginC';
import LoginB from './src/pages/Barbearia/LoginB';
import HomeC from './src/pages/Clientes/HomeC';
import HomeB from './src/pages/Barbearia/HomeB';
import AgendamentosC from './src/pages/Clientes/AgendamentosC';
import AgendamentosB from './src/pages/Barbearia/AgendamentosB';
import Perfil from './src/pages/Barbearia/Perfil';
import ServicosC from './src/pages/Clientes/ServicosC';
import ServicosB from './src/pages/Barbearia/ServicosB';
import Clientes from './src/pages/Barbearia/Clientes';
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(AgendamentosB);
