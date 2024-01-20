import  {StyleSheet, Dimensions} from 'react-native';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

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

  boxInput:{
    flex:0,
    height: screenHeight/9,
    backgroundColor: '#993333',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'

  },
  input: { 
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 10,
    backgroundColor: 'white',
    height: screenHeight/20,
    width: screenWidth/1.4,
    paddingLeft: 3
    
  },
//   {backgroundColor: 'white', height: screenHeight/20, width: screenWidth/1.5 }
})

export default styles