import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 

// import Apostila03 from './components/apostila_003';
// import Apostila03A from './components/apostila_apo03avancado';
import Apostila04 from './components/apostila_004/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Apostila04 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
});
