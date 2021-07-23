import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
         display:'flex',
         justifyContent:'center',
         alignItems:'center',
         marginTop:50
    },
    iconstop:{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection:'row',
      width:100,
      marginRight:20
    },
    logo:{
      marginLeft:20,
      display:'flex'
    },
    input: {
      color: 'blue',
      fontWeight: 'bold',
      marginTop:10,
      marginBottom:10,
      
      width:200,
    //   textAlign:"center",
      padding:5,
      overflow:'scroll'

      // textDecorationLine:"red"
      
    },
    red: {
      color: 'red',
    }
  });
export default styles;