import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Pokedex from "../Pokedex/Pokedex";
import Details from "../Pokedex/Details";
import Settings from "../Settings/Settings";
import { AppStateContext } from "../Context/AppStateProvider";
import { useContext } from "react";
import React from "react";
type RootStackParamList = {
  Pokedex: undefined;
  Details: {
    title: string;
    url: string;
  };
  Settings: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();
export default function Navigator() {
  const { colours } = useContext(AppStateContext);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarButton: ["Details"].includes(route.name)
            ? () => {
                return null;
              }
            : undefined,
          tabBarIcon: ({ focused, color, size }) => {
            type IoniconName = React.ComponentProps<typeof Ionicons>["name"];
            let iconName: IoniconName;
            if (route.name === "Pokedex") {
              iconName = focused ? "paw" : "paw-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "cog" : "cog-outline";
            } else iconName = "help-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colours.primary,
          tabBarInactiveTintColor: colours.tertiary,
          tabBarActiveBackgroundColor: colours.background,
          tabBarInactiveBackgroundColor: colours.background,
          tabBarStyle: {
            borderTopColor: colours.background,
          },
          headerTintColor: colours.bodyText,
          headerStyle: {
            backgroundColor: colours.background,
          },
        })}
      >
        <Tab.Screen name="Pokedex" component={Pokedex} />
        <Tab.Screen
          name="Details"
          component={Details}
          initialParams={{ title: "Unknown" }}
          options={({ route }) => ({ title: route.params?.title ?? "Details" })}
        />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
