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
        width: screenWidth/5,
        height: screenWidth/5,
        marginRight: screenWidth/10,
        marginTop:screenHeight/25
      },
      textHeader:{
        marginLeft: screenWidth/20,
        marginTop:screenHeight/20,
        color: '#882727',
        fontSize: screenWidth/10,
        fontWeight:'600',
        height: screenHeight/8,
      },
    cadastro:{
        flex: 0,
        alignItems: 'center',
        height: screenHeight/1.1,
       
      }, 
      input: { 
        borderWidth: 1,
        borderRadius: 5,
        height: screenHeight/18,
        width: screenWidth/1.3,
        paddingLeft: 3
        
      },
      txtInput: {
        fontSize: screenWidth/30,
        color: "#882727",
        fontWeight: '600',
        marginLeft: screenWidth/10
      },
      
    
 
    
    boxCadastro: {
        marginBottom: screenHeight/25,
        width: screenWidth,
        
    },
    boxInput:{
     
      flexDirection: 'row',
      width: screenWidth,
      alignItems: "center",
      marginLeft: screenWidth/10  
    
  
    },
    boxContrato:{
        width: screenWidth/1.3,
       
        marginVertical: screenHeight/30
    },
    botao: {
      height: screenHeight/15,
        width: screenWidth/3.5,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "#882727",
        alignItems: "center",
        justifyContent: 'center'
    },
    
    boxBotao:{
        width: screenWidth,
      flexDirection: 'row',
      justifyContent: 'space-around',    
    },
    txtBotao: {
      color: "white",
      fontSize: screenWidth/22,
      fontWeight: '600',
    },
    icon:{
      paddingLeft: 5
    }
});

export default styles;