import React, {useState} from 'react';
import {View, Text, TextInput,TouchableOpacity} from 'react-native';

import styles from './styles';
function Apostila_05(){
    const[n1,setN1]= useState(0);
    const[n2, setN2]= useState (0);
    const[result, setResult] =useState(0);

    function soma (){
        setResult(parseInt(n1)+ parseInt(n2));
        setResult(soma.toString());
    }
    function sub(){

        setResult(parseInt(n1) - parseInt(n2));
        
    }
}

export default Apostila_05