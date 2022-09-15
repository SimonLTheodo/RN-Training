import { StatusBar, Switch } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { AppStateContext } from "../Context/AppStateProvider";
import { useState, useContext } from "react";

export default function Settings({ navigation }: { navigation: any }) {
  const { colours, setColours } = useContext(AppStateContext);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = (val: boolean) => {
    setDarkMode(val);
    setColours(darkMode);
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colours.background,
      width: "100%",
    },
    settingContainer: {
      flexDirection: "row",
      padding: 20,
    },
    settingText: {
      flex: 1,
      color: colours.bodyText,
      fontSize: 18,
      textAlignVertical: "center",
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
  const ToggleSetting = ({
    label,
    value,
    onValueChange,
  }: {
    label: string;
    value: boolean;
    onValueChange: any;
  }) => {
    return (
      <View style={styles.settingContainer}>
        <Text style={styles.settingText}>{label}</Text>
        <Switch
          value={value}
          onValueChange={onValueChange}
          trackColor={{ false: colours.secondary, true: colours.switch }}
          thumbColor={darkMode ? colours.primary : colours.tertiary}
        />
      </View>
    );
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
      <ToggleSetting
        label={"Toggle Dark Mode"}
        value={darkMode}
        onValueChange={toggleDarkMode}
      />
    </View>
  );
}
