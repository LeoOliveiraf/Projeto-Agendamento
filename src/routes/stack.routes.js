import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from '../pages/GetStarted'
import Clientes from '../pages/Barbearia/Clientes'
import Perfil from '../pages/Barbearia/Perfil'
import HomeC from '../pages/Clientes/HomeC'
import HomeB from '../pages/Barbearia/HomeB'
import LoginC from '../pages/Clientes/LoginC'
import LoginB from '../pages/Barbearia/LoginB'
import AgendamentoC from '../pages/Clientes/AgendamentosC'
import AgendamentoB from '../pages/Barbearia/AgendamentosB'
import ServicoC from '../pages/Clientes/ServicosC'
import ServicoB from '../pages/Barbearia/ServicosB'
const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator initialRouteName="GetStarted" screenOptions={{headerShown: false}}>
            <Stack.Screen name="GetStarted"
                component={GetStarted}
            />
            <Stack.Screen name="LoginC"
                component={LoginC}
            />
            <Stack.Screen name="HomeC"
                component={HomeC}
            /> 
            <Stack.Screen name="LoginB"
                component={LoginB}
            />
            <Stack.Screen name="HomeB"
                component={HomeB}
            /> 
            <Stack.Screen name="AgendamentoC"
                component={AgendamentoC}
            />
            <Stack.Screen name="ServicoC"
                component={ServicoC}
            /> 
            <Stack.Screen name="AgendamentoB"
                component={AgendamentoB}
            />
            <Stack.Screen name="ServicosB"
                component={ServicoB}
            />  
            <Stack.Screen name="ClientesB"
                component={Clientes}
            />
            <Stack.Screen name="PerfilB"
                component={Perfil}
            />        
        </Stack.Navigator>
    )
}