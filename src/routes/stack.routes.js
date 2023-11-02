import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from '../pages/GetStarted'
import HomeBarbearia from '../pages/HomeBarbearia'
import HomeCliente from '../pages/HomeCliente'
import LoginCliente from '../pages/LoginCliente'
import LoginBarbearia from '../pages/LoginBarbearia'
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
               
        </Stack.Navigator>
    )
}