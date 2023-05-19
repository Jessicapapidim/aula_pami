import React, {useState} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';
import Botao from './botao';
export default function apostila03() {

  
  const [contador, setContador] = useState(0);
  function AddNumber(){
    setContador(contador +1);
   
  }

  function SubNumber(){
   setContador(contador -1); 
  }
  function ZeroNumber(){
    setContador(0); 
   }
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Exemplo apostila 3</Text>

     

      <View style={styles.counter}>
     <View style={styles.counter}>
      <View style={styles.horizontal}>
        <Botao sinal='-' funcao={(SubNumber)}/>
        <Text style={styles.paragraph}> {contador}</Text>


        <Botao sinal='+' funcao={(AddNumber)}/>

      </View>
     </View>

     
    
   
      </View>
      
      <TouchableOpacity style={styles.button}
       onPress={() => ZeroNumber()}>

        <Text style={styles.textCounter}>Zerar</Text>
      </TouchableOpacity>

    </View>
  );
}


