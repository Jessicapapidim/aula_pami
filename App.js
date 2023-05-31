import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'; 

let corAPP = '#000'
// import Apostila03 from './components/apostila_003';
// import Apostila03A from './components/apostila_apo03avancado';
import Apostila04 from './components/apostila_004';
let corApp = '#000';
export default function App() {
  return (
    <View style={styles.container}>
      <Apostila04 />
      <StatusBar style={corAPP === '#000' ? "light" : "dark"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: corAPP,
    //alignItems: 'center',
    //justifyContent: 'center',
    padding: 8,
    paddingTop: Constants.statusBarHeight,
  },

});
