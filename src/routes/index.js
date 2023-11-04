import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeC from '../pages/Clientes/HomeC';
import AgendamentosC from '../pages/Clientes/AgendamentosC';
import ServicosC from '../pages/Clientes/ServicosC';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const ClientesDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeC" component={HomeC} />
      <Drawer.Screen name="AgendamentosC" component={AgendamentosC} />
      <Drawer.Screen name="ServicosC" component={ServicosC} />
    </Drawer.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Clientes" component={ClientesDrawer} />
        {/* Adicione outras telas de Stack aqui, se necessário */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
