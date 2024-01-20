import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;



const styles = StyleSheet.create({
container:{
    backgroundColor: '#fff',
    height: screenHeight,
},

meusPedidos:{
    height: screenHeight/1.3,
    justifyContent: 'flex-end',
    alignItems: 'center'
},


  botao: {
    height: 35,
    width: "80%",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#882727",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: screenHeight / 30
  },

  txtBotao: {
    color: "white",
    fontSize: 16,
    fontWeight: '600',
  },

  total: {
    borderTopWidth: 1,
    borderColor: '#993333',
    width: screenWidth/1.25,
    justifyContent: 'space-between',
    paddingLeft: screenWidth / 20,
    paddingTop: screenHeight / 40,
    flexDirection: 'row',
    alignItems: 'center',
    jusfityContent: 'center'
  },


})

export default styles
