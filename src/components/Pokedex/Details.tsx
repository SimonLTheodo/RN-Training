import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
const pokemonList = require("../../../assets/kanto.json")

export default function Details({route, navigation} : {route:any, navigation:any}) {
    const {item} = route.params
  return (
    <View style={styles.container}>
        <Text>
            {item.name}
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: "100%",
    paddingVertical: 6,
  },
  item: {
    flex: 1,
    padding: 20,
    marginVertical: 6,
    marginHorizontal: 12,
    backgroundColor: "crimson",
    borderRadius: 4
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "900",
    textTransform: "capitalize"
  }
});
