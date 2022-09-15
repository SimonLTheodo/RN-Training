import { StatusBar } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { AppStateContext } from "../Context/AppStateProvider";
import { useContext } from "react";

export default function Settings({ navigation }: { navigation: any }) {
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
    </View>
  );
}
