import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeC from "../pages/Clientes/HomeC";
import AgendamentosC from "../pages/Clientes/AgendamentosC";
import ServicosC from "../pages/Clientes/ServicosC";
import GetStarted from "../pages/GetStarted";
import LoginC from "../pages/Clientes/LoginC";
import LoginB from "../pages/Barbearia/LoginB";
import HomeB from "../pages/Barbearia/HomeB";
import AgendamentosB from "../pages/Barbearia/AgendamentosB";
import ServicosB from "../pages/Barbearia/ServicosB";
import Clientes from "../pages/Barbearia/Clientes";
import Perfil from "../pages/Barbearia/Perfil";
import { Text } from "react-native";
import Deslogar from "../components/Deslogar";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const ClientesDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{drawerActiveBackgroundColor: '#CECECE', drawerActiveTintColor: 'black',}}> 
      <Drawer.Screen name="Agendamentos" component={AgendamentosC} options={{headerTitle: '', headerTransparent: true, headerTintColor: '#fff',}}/>
      <Drawer.Screen name="Servicos" component={ServicosC} options={{headerTitle: '', headerTransparent: true, headerTintColor: '#fff',}}/>
      <Drawer.Screen name="Deslogar" component={Deslogar} options={{headerTitle: '', headerTransparent: true, headerTintColor: '#fff',}} />
    </Drawer.Navigator>
  );
};
const BarbeariaDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{drawerActiveBackgroundColor: '#CECECE', drawerActiveTintColor: 'black',}}>
      <Drawer.Screen name="Agendamentos" component={AgendamentosB} options={{headerTitle: '', headerTransparent: true, headerTintColor: '#fff',}}/>
      <Drawer.Screen name="Servicos" component={ServicosB} options={{headerTitle: '', headerTransparent: true, headerTintColor: '#fff',}}/>
      <Drawer.Screen name="Clientes" component={Clientes} options={{headerTitle: '', headerTransparent: true, headerTintColor: '#fff',}}/>
      <Drawer.Screen name="Perfil" component={Perfil} options={{headerTitle: '', headerTransparent: true, headerTintColor: '#fff',}}/>
    </Drawer.Navigator>
  );
};
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen name="GetStarted" component={GetStarted} options={{title: '', headerTransparent: true, headerShown: false}}/>
        <Stack.Screen name="HomeC" component={HomeC} options={{title: '', headerTransparent: true, headerShown: false}}/>
        <Stack.Screen name="AgendamentosC" component={ClientesDrawer} options={{title: '', headerTransparent: true, headerShown: false}}/>
        <Stack.Screen name="LoginC" component={LoginC} options={{title: '', headerTransparent: true, headerShown: false}}/>
        <Stack.Screen name="LoginB" component={LoginB} options={{title: '', headerTransparent: true, headerShown: false}}/>
        <Stack.Screen name="HomeB" component={HomeB} options={{title: '', headerTransparent: true, headerShown: false}}/>
        <Stack.Screen name="ServicosC" component={ClientesDrawer} options={{title: '', headerTransparent: true, headerShown: false}}/>
        <Stack.Screen name="Clientes" component={BarbeariaDrawer} options={{title: '', headerTransparent: true, headerShown: false}}/>
        <Stack.Screen name="AgendamentosB" component={BarbeariaDrawer} options={{title: '', headerTransparent: true, headerShown: false}}/>
        <Stack.Screen name="ServicosB" component={BarbeariaDrawer} options={{title: '', headerTransparent: true, headerShown: false}}/>
        <Stack.Screen name="Perfil" component={BarbeariaDrawer} options={{title: '', headerTransparent: true, headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
