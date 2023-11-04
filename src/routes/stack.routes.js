
import GetStarted from "../pages/GetStarted";
import Perfil from "../pages/Barbearia/Perfil";
import HomeC from "../pages/Clientes/HomeC";
import HomeB from "../pages/Barbearia/HomeB";
import LoginC from "../pages/Clientes/LoginC";
import LoginB from "../pages/Barbearia/LoginB";
import AgendamentosC from "../pages/Clientes/AgendamentosC";
import AgendamentosB from "../pages/Barbearia/AgendamentosB";
import ServicosC from "../pages/Clientes/ServicosC";
import ServicosB from "../pages/Barbearia/ServicosB";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="LoginC" component={LoginC} />
      <Stack.Screen name="HomeC" component={HomeC} />
      <Stack.Screen name="LoginB" component={LoginB} />
      <Stack.Screen name="HomeB" component={HomeB} />
      <Stack.Screen name="AgendamentosC" component={AgendamentosC} />
      <Stack.Screen name="ServicosC" component={ServicosC} />
      <Stack.Screen name="AgendamentosB" component={AgendamentosB} />
      <Stack.Screen name="ServicosB" component={ServicosB} />
      <Stack.Screen name="Perfil" component={Perfil} />
    </Stack.Navigator>
  );
}
