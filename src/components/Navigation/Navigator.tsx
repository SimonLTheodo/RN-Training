import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pokedex from "../Pokedex/Pokedex";
import Details from "../Pokedex/Details";
const Stack = createNativeStackNavigator();
export default function Navigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
               <Stack.Screen name="Pokedex" component={Pokedex}/>
               <Stack.Screen name="Details" component={Details}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}