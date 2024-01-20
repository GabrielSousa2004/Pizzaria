import  {StyleSheet, Dimensions} from 'react-native';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
    },
  
    cabecalho: {
      
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    imgHeader:{
      width: 80,
      height: 80,
      marginRight: 40,
      marginTop:25
    },
    textHeader:{
      marginLeft: 20,
      marginTop:40,
      color: '#882727',
      fontSize: 32,
      fontWeight:'600',
      height: screenHeight/8,
      textAlign: 'center'
      
    },
    login:{
      
      alignItems: 'center',
      justifyContent: 'center',
      height: screenHeight/2,
        
    },  

    body:{
      
      alignItems: 'center',
      justifyContent: 'center',
      height: screenHeight/1.3,
        
    },  

    input: { 
      borderWidth: 1,
      borderRadius: 5,
      height: 35,
      width: "85%",
      paddingLeft: 3,
    },
    txtInput: {
      fontSize: 12,
      color: "#882727",
      fontWeight: '600',
      marginLeft: "9%"
    },
    
  
    senhaEsquecida: {
      fontSize: 12,
      color: "#882727",
      fontWeight: '600',
    },
    boxSenhaEsquecida: {
      alignItems: "flex-end",
      width: "90%",
    },
  
  boxLogin: {
      marginBottom: 50,
      width: "100%",
      
  },
  boxInput:{
    
    flexDirection: 'row',
    width: "95%",
    alignItems: "center",
    marginLeft: 35  
  

  },
  botao: {
    height: 35,
      width: "80%",
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: "#882727",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 70,
  },
  
  boxBotao:{
    alignItems: "center",
  },

  botaoRecuperar: {
    height: 35,
    width: screenWidth/4,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#882727",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 70,
  },
  boxBotaoRecuperar: {
    marginTop: screenHeight/10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screenWidth/1.3
  },
  txtBotao: {
    color: "white",
    fontSize: 16,
    fontWeight: '600',
  },
  icon:{
    paddingLeft: 5
  },


  });

  export default styles;