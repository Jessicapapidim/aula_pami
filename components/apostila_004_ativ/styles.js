
import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    borderStartColor: '#FF007F',
    backgroundColor: '#FFCBDB',
     
  },
  titulo:{
    /*alignSelf:'flex-start',*/
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FF007F',
   
   
  },
  texto:{
    alignSelf:'flex-start',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FF007F',
    marginLeft: 20,
    marginTop:10,
   
  },
  
  txtEntrada: {
    borderWidth: 4, 
    textAlign: 'center', 
    fontSize: 22, 
    borderColor: '#FFFFFF', 
    height: 40, 
    color: '#FFFFFF', 
    borderRadius: 10, 
    width:'90%',
    }, 
    txtSaida: {
      margin: 24, 
      fontSize: 22, 
      fontWeight: 'bold', 
      textAlign: 'center', 
      color: '#FFFFFF',     
  }, 

    button: {
      backgroundColor: '#FFFFFF', 
      height: 40, 
      justifyContent: 'center', 
      borderRadius: 10, 
      marginTop: 20, 
      width:'70%',
      }, 
      textButton: {
      fontSize: 22, 
      color: '#993399', 
      textAlign: 'center', 
      }, 
      textLabel: {
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: 'center',
      },
      
});


export default styles;