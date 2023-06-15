import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Index() {
    const [massa, setMassa] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);

    function calcular() {
        const valor = massa / (altura * altura);
        setResultado(valor);
    }

    function classificar(imc) {
        if (imc < 18.5) {
            return 'Abaixo do Peso';
        } else if (imc >= 18.5 && imc <= 24.9) {
            return 'Peso Normal';
        } else if (imc >= 25 && imc <= 29.9) {
            return 'Sobrepeso';
        } else if (imc >= 30 && imc <= 34.9) {
            return 'Obesidade Grau 1';
        } else if (imc >= 35 && imc <= 39.9) {
            return 'Obesidade Grau 2';
        } else if (imc > 40) {
            return 'Obesidade Grau 3';
        } else {
            return 'Fora do Intervalo de Classificação';
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>Exemplo 6</Text>
            <View style={styles.entradaImc}>
                <TextInput
                    placeholder="Massa"
                    placeholderTextColor="lightgray"
                    keyboardType="numeric"
                    style={styles.input}
                    onChangeText={(entrada) => setMassa(entrada)}
                />

                <TextInput
                    placeholder="Altura"
                    placeholderTextColor="lightgray"
                    keyboardType="numeric"
                    style={styles.input}
                    onChangeText={(entrada) => setAltura(entrada)}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={calcular}>
                <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>

            <Text style={styles.resultados}>{resultado.toFixed(2)}</Text>
            <Text style={styles.resultado}> {classificar(parseFloat(resultado))}</Text>
        </View>
    );
}





// import React, { useState } from 'react';
// import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import styles from './styles';

// export default function index() {

//     const [massa, setmassa] = useState(0);
//     const [altura, setAltura] = useState (0);
//     const [resultado, setResultado] = useState(0);

//     function Calcular () {
//         const valor = massa / (altura*altura);
//         setResultado(valor);

//     function Classificar(imc) {
//        if (imc < 18.5) {
//         return 'Abaixo do Peso';
        
//         } else if   (imc => 18.5 && imc <= 24.9) {
//         return "Peso Normal";
        
//         } else if   (imc => 25 && imc <= 25.9) {
//             return "Sobrepeso";

//         } else if   (imc => 30 && imc <= 34.9) {
//             return "Obesidade";
        
//         }else {
//             return 'Fora do Intervalo de Classificação';
//         }
//     }
    

//     }
//         return (
            

//         <View style={styles.container}>
//         <Text style={styles.paragraph}>Exemplo 6</Text>
//         <View style={styles.entradaImc}>
//             <TextInput 
//             placeholder='Massa' 
//             placeholderTextColor='lightgray' 
//             keyboardType='numeric'
//             style={styles.input} 
//             onChangeText={(entrada) => setmassa (entrada)}
//             />

//             <TextInput 
//             placeholder='Altura' 
//             placeholderTextColor='lightgray' 
//             keyboardType= 'numeric' 
//             style={styles.input} 
//             onChangeText={(entrada) => setAltura(entrada)} 
//             />
//         </View>

//         <TouchableOpacity style={styles.button} onPress={() => Calcular()} >
//             <Text style={styles.buttonText}> Calcular </Text>
//         </TouchableOpacity>
//         <Text style={styles.resultados}>{resultado.toFixed(2)}</Text>
        
//         <Text style={styles.resultados}>Classificação: {Classificar(parseFloat(resultado))}</Text>
//     </View>


//     );

// }
