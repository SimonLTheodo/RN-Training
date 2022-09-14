import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
const pokemonList = require("../../../assets/kanto.json")

export default function Details({route, navigation} : {route:any, navigation:any}) {
    const {title, url} = route.params
    const [isLoading, setLoading] = useState(true);
    const [backSprite, setBackSprite] = useState(false)
    const [data, setData] = useState<any>([]);
    const Stat = ({statName, statValue} : {statName : string, statValue : any}) => {
        return (
            <View style={styles.statContainer}>
                <Text style={styles.statName}>
                    {statName}
                </Text>
                <Text style={styles.statValue}>
                    {statValue}
                </Text>
            </View>
        )
    }
    const getPokemonData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getPokemonData();
    }, []);
    return (
        <View style={styles.container}>
            {isLoading ? null : (
                <View style={styles.container}>
                    <TouchableOpacity style={styles.imageContainer} onPress={() => (setBackSprite(!backSprite))}>
                        <Image style={styles.image} source={{uri: backSprite ? data.sprites.back_default : data.sprites.front_default}}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <ScrollView style={styles.details}>
                        <Stat statName="Height" statValue={data.height * 10 + "cm"}/>
                        <Stat statName="Weight" statValue={data.weight / 10  + "kg"}/>
                        <Stat statName="Order" statValue={data.order}/>
                    </ScrollView>
                </View>
            )}
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
    fontSize: 32,
    fontWeight: "500",
    textTransform: "capitalize",
    textAlign: "center"
  },
  imageContainer: {
    flex: 1,
    alignItems: "center"
  },
  image: {
    flex: 1,
    height: 500,
    width: 500,
    resizeMode: "contain"
  },
  details: {
    flex: 1
  },
  statContainer: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 8,
    marginVertical: 4,
    backgroundColor: "#F5F5F5",
    borderRadius: 4,
  },
  statName: {
    flexGrow: 0,
    backgroundColor: "crimson",
    color: "white",
    padding: 10,
    fontSize: 20,
    fontWeight: "900",
    borderRadius: 4,

  },
  statValue: {
    flex: 1,
    padding: 10,
    fontSize: 20,
    fontWeight: "500",
    textAlign: "right"
  }
});
