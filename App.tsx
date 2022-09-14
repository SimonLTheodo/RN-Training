import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Pokedex from './src/components/Pokedex/Pokedex';
import Navigator from './src/components/Navigation/Navigator';
import { AppStateProvider } from './src/components/Context/AppStateProvider';

export default function App() {
  return (
    <AppStateProvider>
      <Navigator/>
    </AppStateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
