import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pokedex from "../Pokedex/Pokedex";
import Details from "../Pokedex/Details";
type RootStackParamList = {
    Pokedex: undefined,
    Details: {
        title: string
    }
}
const Stack = createNativeStackNavigator<RootStackParamList>();
export default function Navigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
               <Stack.Screen name="Pokedex" component={Pokedex}/>
               <Stack.Screen name="Details" component={Details} initialParams={{title: "Unknown"}} options={({route}) => ({title: route.params?.title ?? "Details"})}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}