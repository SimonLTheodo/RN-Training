import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Pokedex from "../Pokedex/Pokedex";
import Details from "../Pokedex/Details";
import React from "react";
type RootStackParamList = {
    Pokedex: undefined,
    Details: {
        title: string,
        url: string
    }
}
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();
export default function Navigator() {
    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={({route}) => ({
                tabBarButton: [
                    "Details"
                ].includes(route.name) ? () => {
                    return null;
                } : undefined,
                tabBarIcon: ({ focused, color, size }) => {
                    type IoniconName = React.ComponentProps<typeof Ionicons>["name"]
                    let iconName : IoniconName;
                    if (route.name === "Pokedex") {
                        iconName = focused ? "paw" : "paw-outline"
                    } else iconName = "help-outline"
                    return <Ionicons name={iconName} size={size} color={color}/>
                },
                tabBarActiveTintColor: "crimson"
            })}>
               <Tab.Screen name="Pokedex" component={Pokedex}/>
               <Tab.Screen name="Details" component={Details} initialParams={{title: "Unknown"}} options={({route}) => ({title: route.params?.title ?? "Details"})}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}