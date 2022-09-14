import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';
import { useEffect, useState } from 'react';
const pokemonList = require("../../../assets/kanto.json")


export default function Pokedex({navigation} : {navigation:any}) {
    const [data, setData] = useState([]);
    const getPokemonList = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
            const json = await response.json();
            setData(json.results);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getPokemonList();
    }, []);
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
        <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.name} />
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
