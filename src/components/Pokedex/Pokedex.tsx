import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';
const pokemonList = require("../../../assets/kanto.json")


export default function Pokedex({navigation} : {navigation:any}) {
    const Capitalise = ({str} : {str:string}) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const Item = ({item} : {item:any}) => (
        <TouchableHighlight underlayColor={"#222222"} style={styles.item} onPress={() => navigation.navigate("Details", {
            title: item.name.charAt(0).toUpperCase() + item.name.slice(1)
        })}>
            <Text style={styles.title}>
                {item.name}
            </Text>
        </TouchableHighlight>
    )
    const renderItem = ({item} : {item:any}) => {
        return (
            <Item item={item}/>
        )
    }
  return (
    <View style={styles.container}>
        <FlatList data={pokemonList} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: "100%",
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
