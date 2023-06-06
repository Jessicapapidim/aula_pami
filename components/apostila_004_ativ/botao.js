import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';
function Botao({ sinal, funcao }){
    return(
        <TouchableOpacity style={[styles.button, styles.botaoSinal]}
        onPress={() => funcao()} >
 
         <Text style={styles.textCounter}>{sinal}</Text>
       </TouchableOpacity>
    );
}
export default Botao