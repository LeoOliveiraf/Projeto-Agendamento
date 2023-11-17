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
import Deslogar from "../components/Deslogar";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


const DrawerCreateCliente = (initialRouteName) => {
  return (
    <Drawer.Navigator initialRouteName={initialRouteName} screenOptions={{drawerActiveBackgroundColor: '#CECECE', drawerActiveTintColor: 'black',}}> 
      <Drawer.Screen name="Home" component={HomeC} options={{headerTitle: '', headerTransparent: true, headerTintColor: '#fff',}}/>
      <Drawer.Screen name="Agendamentos" component={AgendamentosC} options={{headerTitle: '', headerTransparent: true, headerTintColor: '#fff',}}/>
      <Drawer.Screen name="Servicos" component={ServicosC} options={{headerTitle: '', headerTransparent: true, headerTintColor: '#fff',}}/>
      <Drawer.Screen name="Deslogar" component={Deslogar} options={{headerTitle: '', headerTransparent: true, headerTintColor: '#fff',}} />
    </Drawer.Navigator>
  );
};

const ClientesDrawer1 = () => DrawerCreateCliente('Servicos')
const ClientesDrawer2 = () => DrawerCreateCliente('Agendamentos')

const DrawerCreateBarbearia = (initialRouteName) => {
  return (
    <Drawer.Navigator initialRouteName={initialRouteName} screenOptions={{drawerActiveBackgroundColor: '#CECECE', drawerActiveTintColor: 'black',}}>
      <Drawer.Screen name="Home" component={HomeB} options={{headerTitle: '', headerTransparent: true, headerTintColor: '#fff',}}/>
      <Drawer.Screen name="Agendamentos" component={AgendamentosB} options={{headerTitle: '', headerTransparent: true, headerTintColor: '#fff',}}/>
      <Drawer.Screen name="Servicos" component={ServicosB} options={{headerTitle: '', headerTransparent: true, headerTintColor: '#fff',}}/>
      <Drawer.Screen name="Clientes" component={Clientes} options={{headerTitle: '', headerTransparent: true, headerTintColor: '#fff',}}/>
      <Drawer.Screen name="Perfil" component={Perfil} options={{headerTitle: '', headerTransparent: true, headerTintColor: '#fff',}}/>
      <Drawer.Screen name="Deslogar" component={Deslogar} options={{headerTitle: '', headerTransparent: true, headerTintColor: '#fff',}} />
    </Drawer.Navigator>
  );
};

const BarbeariaDrawer1 = () => DrawerCreateBarbearia('Agendamentos')

const BarbeariaDrawer2 = () => DrawerCreateBarbearia('Servicos');

const BarbeariaDrawer3 = () => DrawerCreateBarbearia('Clientes');

const BarbeariaDrawer4 = () => DrawerCreateBarbearia('Perfil');

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen name="GetStarted" component={GetStarted} options={{title: '', headerTransparent: true, headerShown: false}}/>
        <Stack.Screen name="HomeC" component={HomeC} options={{title: '', headerTransparent: true, headerShown: false}}/>
        <Stack.Screen name="AgendamentosC" component={ClientesDrawer2} options={{title: '', headerTransparent: true, headerShown: false}}/>
        <Stack.Screen name="LoginC" component={LoginC} options={{title: '', headerTransparent: true, headerShown: false}}/>
        <Stack.Screen name="LoginB" component={LoginB} options={{title: '', headerTransparent: true, headerShown: false}}/>
        <Stack.Screen name="HomeB" component={HomeB} options={{title: '', headerTransparent: true, headerShown: false}}/>
        <Stack.Screen name="ServicosC" component={ClientesDrawer1} options={{title: '', headerTransparent: true, headerShown: false}}/>
        <Stack.Screen name="ClientesB" component={BarbeariaDrawer3} options={{title: '', headerTransparent: true, headerShown: false}}/>
        <Stack.Screen name="AgendamentosB" component={BarbeariaDrawer1} options={{title: '', headerTransparent: true, headerShown: false}}/>
        <Stack.Screen name="ServicosB" component={BarbeariaDrawer2} options={{title: '', headerTransparent: true, headerShown: false}}/>
        <Stack.Screen name="PerfilB" component={BarbeariaDrawer4} options={{title: '', headerTransparent: true, headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
