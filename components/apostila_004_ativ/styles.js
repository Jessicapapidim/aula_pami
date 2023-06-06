
import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    borderStartColor: '#ffcdd2',
    backgroundColor: '#ffcdd2',
     
  },
  texto:{
    fontSize: 26,
    fontWeight: 'bold',
    color: '#b71c1c',
  },
  txtEntrada: {
    borderWidth: 4, 
    textAlign: 'center', 
    fontSize: 22, 
    borderColor: '#B71C1C', 
    height: 40, 
    color: '#E53935', 
    borderRadius: 10, 
    width:'70%',
    }, 
    txtSaida: {
      margin: 24, 
      fontSize: 22, 
      fontWeight: 'bold', 
      textAlign: 'center', 
      color: '#E53935',     
  }, 
  button: {
    backgroundColor: '#E53935', 
    height: 40, 
    justifyContent: 'center', 
    borderRadius: 10, 
    marginTop: 20, 
    }, 
    textButton: {
    fontSize: 22, 
    color: '#FFCDD2', 
    textAlign: 'center', 
    }, 
    button: {
      backgroundColor: '#E53935', 
      height: 40, 
      justifyContent: 'center', 
      borderRadius: 10, 
      marginTop: 20, 
      width:'70%',
      }, 
      textButton: {
      fontSize: 22, 
      color: '#FFCDD2', 
      textAlign: 'center', 
      }, 
      textLabel: {
        fontSize: 18,
        color: '#FFCDD2',
        textAlign: 'center',
      },
      txtLeft: {
        fontSize: 19,
        textAlign: 'right',
        color:'#000',
      },
});


export default styles;