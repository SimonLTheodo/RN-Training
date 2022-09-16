import { StatusBar } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { AppStateContext } from "../Context/AppStateProvider";
import { useEffect, useState, useContext } from "react";

export default function Pokedex({ navigation }: { navigation: any }) {
  const [data, setData] = useState([]);
  const { colours } = useContext(AppStateContext);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colours.background,
      width: "100%",
    },
    item: {
      flex: 1,
      padding: 20,
      marginVertical: 6,
      marginHorizontal: 12,
      backgroundColor: colours.primary,
      borderRadius: 4,
    },
    title: {
      color: colours.headingText,
      fontSize: 24,
      fontWeight: "900",
      textTransform: "capitalize",
    },
  });
  const getPokemonList = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      );
      console.log(response);
      const json = await response.json();
      console.log(json);
      setData(json.results);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getPokemonList();
  }, []);
  const Item = ({ item }: { item: any }) => (
    <TouchableHighlight
      underlayColor={colours.secondary}
      style={styles.item}
      onPress={() =>
        navigation.navigate("Details", {
          title: item.name.charAt(0).toUpperCase() + item.name.slice(1),
          url: item.url,
        })
      }
    >
      <Text style={styles.title}>{item.name}</Text>
    </TouchableHighlight>
  );
  const renderItem = ({ item }: { item: any }) => {
    return <Item item={item} />;
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={
          colours.barStyle === "light-content"
            ? "light-content"
            : "dark-content"
        }
        backgroundColor={colours.background}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}
