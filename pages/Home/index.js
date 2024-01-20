import React, {useState} from 'react';
import  { View, ImageBackground} from 'react-native';
import styles from '../../style/styleHome'
import Dados from '../../components/cardapioHome'
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from '../../components/Navbar'




export default function Home(props, {navigation}){

  const [ modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={{height: '100%', backgroundColor:'#993333'}}>
            <View style={styles.container}>
              <View style={styles.boxFundo}>
                <ImageBackground
                        source={require('../../assets/images/imgFundoPizza.jpg')}
                        style={styles.imgFundo}
                        >
                    <Navbar navigation = {props.navigation}/>
                </ImageBackground>
                </View>
                {/* <TouchableOpacity style={styles.botao} 
              onPress={() => navigation.navigate('Login') }
              >
              <Text style={styles.txtBotao}>Confirmar</Text>
                
                
            </TouchableOpacity> */}

                   
                    

                        <Dados/>
                    
                  
                   
            </View>
        </SafeAreaView>
    );
}

