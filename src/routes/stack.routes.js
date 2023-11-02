import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from '../pages/GetStarted'
import HomeBarbearia from '../pages/HomeBarbearia'
import HomeCliente from '../pages/HomeCliente'
import LoginCliente from '../pages/LoginCliente'
import LoginBarbearia from '../pages/LoginBarbearia'
import AgendamentoCliente from '../pages/AgendamentoCliente'
import ServicoCliente from '../pages/ServicoCliente'
import AgendamentoBarbearias from '../pages/AgendamentoBarbearias'
import ServicoBarbearia from '../pages/ServicosBarbearia'
import ClientesBarbearia from '../pages/ClientesBarbearia'
import PerfilBarbearia from '../pages/PerfilBarbearia'
const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator initialRouteName="GetStarted" screenOptions={{headerShown: false}}>
            <Stack.Screen name="GetStarted"
                component={GetStarted}
            />
            <Stack.Screen name="LoginCliente"
                component={LoginCliente}
            />
            <Stack.Screen name="HomeCliente"
                component={HomeCliente}
            /> 
            <Stack.Screen name="LoginBarbearia"
                component={LoginBarbearia}
            />
            <Stack.Screen name="HomeBarbearia"
                component={HomeBarbearia}
            /> 
            <Stack.Screen name="AgendamentoCliente"
                component={AgendamentoCliente}
            />
            <Stack.Screen name="ServicoCliente"
                component={ServicoCliente}
            /> 
            <Stack.Screen name="AgendamentoBarbearias"
                component={AgendamentoBarbearias}
            />
            <Stack.Screen name="ServicosBarbearia"
                component={ServicoBarbearia}
            />  
            <Stack.Screen name="ClientesBarbearia"
                component={ClientesBarbearia}
            />
            <Stack.Screen name="PerfilBarbearia"
                component={PerfilBarbearia}
            />        
        </Stack.Navigator>
    )
}