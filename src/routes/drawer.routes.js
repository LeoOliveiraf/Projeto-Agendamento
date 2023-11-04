import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import AgendamentosC from "../pages/Clientes/AgendamentosC";
import ServicosC from "../pages/Clientes/ServicosC";
import HomeB from "../pages/Barbearia/HomeB";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator
            screenOptions={{
                title: "Teste",
                headerTitleAlign: "center",
                headerTintColor: "red",
                headerStyle: {
                    backgroundColor: "red",
                    elevation: 0,
                },
                drawerStyle: {
                    backgroundColor: "red",
                },
                drawerActiveBackgroundColor: "red",
                drawerActiveTintColor: "red",
                drawerInactiveTintColor: "red",
                drawerItemStyle: {
                    marginVertical: 5,
                },
            }}
        >
            <Drawer.Screen
                name="AgendamentosC"
                component={AgendamentosC}
                options={{
                    drawerIcon: () => (
                        <Feather name="calendar" size={40} color={"red"} />
                    ),
                    drawerLabel: "AgendamentosC",
                }}
            />
            <Drawer.Screen
                name="ServicosC"
                component={ServicosC}
                options={{
                    drawerIcon: () => (
                        <Feather name="list" size={40} color={"red"} />
                    ),
                    drawerLabel: "ServicosC",
                }}
            />
            <Drawer.Screen
                name="HomeB"
                component={HomeB}
                options={{
                    drawerIcon: () => (
                        <Feather name="home" size={40} color={"red"} />
                    ),
                    drawerLabel: "HomeB",
                }}
            />
        </Drawer.Navigator>
    );
}
