import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;



const styles = StyleSheet.create({

  body: {
    width: screenWidth,
    height: screenHeight / 1.8,
    alignItems: 'center',
  },
  postProfileImage: {
    width: 36,
    height: 36,
    borderRadius: 50,
    resizeMode: 'cover',
    marginRight: 10,
  },
  destaque: {
    justifyContent: 'center',
    height: 'auto',
    alignItems: 'center',
  },
  txtDestaque: {
    color: '#993333',
    fontSize: 25,
    fontWeight: 'bold'
  },

  txtObs: {
    color: '#993333',
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: screenHeight / 20
  },


  txtCardapio: {
    color: '#993333',
    fontSize: screenWidth / 22,
    fontWeight: '600',

  },

  txtCardapioModal: {
    color: '#993333',
    fontSize: screenWidth / 15,
    fontWeight: '600',

  },

  txtPreco: {
    color: '#993333',
    fontSize: screenWidth / 22,
    fontWeight: '600'

  },
  txtPrecoModal: {
    color: '#993333',
    fontSize: screenWidth / 15,
    fontWeight: '600'

  },

  txtDescCardapio: {
    color: 'gray',
    fontSize: screenWidth / 26,
    width: screenWidth / 2,
    textAlign: 'center'
  },

  txtDescCardapioModal: {
    color: 'gray',
    fontSize: screenWidth / 22,
    width: screenWidth / 2.1,
    textAlign: 'center',
  },
  boxProduto: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    marginVertical: 2,
    paddingVertical: screenHeight / 50,
  },
  imgProduto: {
    width: screenWidth / 4,
    height: screenWidth / 4,
    marginHorizontal: screenWidth / 30,
    resizeMode: 'contain'
  },
  boxTxtProduto: {
    
    flexDirection: 'column',
    jusfityContent: 'space-between',
    alignItems: 'center'
  },
  separadorFlat: {
    borderBottomWidth: 1,
    borderBottomColor: '#993333',
  },
  boxPedido: {
    flexDirection: 'column',
    jusfityContent: 'space-between',
  },

container:{
  borderBottomWidth: 1,
  borderColor: '#993333',
  flexDirection: 'row',
  width: screenWidth,
  marginTop: screenHeight / 4,
  justifyContent: 'center',
  alignItems: 'center',
},

  input: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: screenHeight / 4,
    width: screenWidth /
      1.3,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#993333'
  },
  imgProdutoModal: {
    width: screenWidth / 2.5,
    height: screenWidth / 2.5,
    resizeMode: 'contain'
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

  quant: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: screenWidth / 1.8,
    alignItems: 'center',
    marginVertical: screenHeight / 30

  },
})

export default styles