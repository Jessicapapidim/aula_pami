import React, { useState} from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';
function Apostila04_ativ(){
  const[nome,setNome]= useState('');
  const[snome, setSnome]=useState('');
  const[mensagem, setMensagem] =useState('O texto digitado aparece aqui:');
  
  function apresentaMensagem(){
    setMensagem(nome + ' ' + snome);
    setNome('');
    setSnome('');
  }
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Atividade-Entrada de Caracteres</Text>
      <Text style={styles.txtSaida}>
         {mensagem}
         </Text>
      <Text style={styles.texto}>Digite o seu nome:</Text>
      <TextInput 
      style={styles.txtEntrada}
      onChangeText={(e) => setNome(e)}
      value={nome}
      />


      <Text style={styles.texto}>Digite o seu sobrenome:</Text>
      <TextInput 
      style={styles.txtEntrada}
      onChangeText={(i) => setSnome(i)}
      value={snome}
      />



      <TouchableOpacity style={styles.button}
      onPress={()=> apresentaMensagem()}>
        <Text style={styles.textButton}>Mostrar valor</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Apostila04_ativ;