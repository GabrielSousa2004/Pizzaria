import  {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: "#fff",
    },
    imgFundo:{
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        position: 'fixed',
        alignContent: 'center'
        
    },
    boxFundo:{
        flex: 0,
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
 
  destaque:{
    justifyContent: 'center',
    
    alignItems: 'center',
    // marginVertical: '5%',
  
  },
  
})

export default styles