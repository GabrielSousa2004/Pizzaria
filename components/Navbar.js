import React, {useState} from 'react';
import  { Text, View, Image, TouchableOpacity, Modal, Dimensions } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import styles from '../style/styleNavbar'
import { SafeAreaView } from 'react-native-safe-area-context';
const screenHeight = Dimensions.get('screen').height;
export default function NavBar({navigation}){

const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={{height: screenHeight/7, backgroundColor:'#993333'}}>
                    <View style={styles.navBar}>
                        <TouchableOpacity onPress={() =>{ setModalVisible(true)}}>
                            <Ionicons name="menu-outline" color ="#fff" size={30} />
                        </TouchableOpacity> 

                        <View style={styles.boxIconsNav}>
                        <Image
                            source={(require('../assets/images/pizza-branco.png'))}
                            style ={styles.logoNav}
                        />
                            <View style={{flexDirection: 'row', gap: 10,}}>
                                <TouchableOpacity
                                    style={{ alignItems: 'center', flex: 0}}
                                    onPress={() => navigation.navigate('Home')}
                                >
                                <Ionicons name="home-outline" color ="#fff" size={30} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ alignItems: 'center', flex: 0}}
                                    onPress={() => navigation.navigate('Login')}
                                >
                                
                                <Ionicons name="person-circle-outline" color ="#fff" size={30} />
                                </TouchableOpacity>
                           </View>
                        </View>
                    </View>
                    {/* </ImageBackground> */}
               
            {/* </View> */}
                <Modal transparent visible={modalVisible} animationType='fade'>
                    

                    <TouchableOpacity style={{flex: 1}}
                       onPress={() =>{ setModalVisible(false)}} 
                    >
                        <SafeAreaView style={{flex: 1, alignItems: 'center', marginVertical: screenHeight/7}}>
                            <View style={{width: '100%', height: screenHeight/10, backgroundColor: '#993333'}}>
                                
                                <View style={{ justifyContent: 'space-evenly',alignItems: 'center', flexDirection: 'row', alignItems: 'center'}}>

                                    <TouchableOpacity
                                    style={{marginHorizontal:'10%', alignItems: 'center', flex: 0}}
                                    onPress={() => navigation.navigate('Cardapio')}
                                    >
                                        <Ionicons name="restaurant-outline" color= '#fff' size={30}/>
                                        <Text style={styles.textMenu}>cardápio</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                    style={{marginHorizontal:'10%', alignItems: 'center', flex: 0}}
                                    onPress={() => navigation.navigate('MeusPedidos')}
                                    >
                                        <Ionicons name="cart-outline" color= '#fff' size={30}/>
                                        <Text style={styles.textMenu}>meus pedidos</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                    style={{marginHorizontal:'10%', alignItems: 'center', flex: 0}}
                                    onPress={() => navigation.navigate('Suporte')}
                                    >
                                        <Ionicons name="headset-outline" color= '#fff' size={30}/>
                                        <Text style={styles.textMenu}>Suporte</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </SafeAreaView>
                    </TouchableOpacity>
                </Modal>
        </SafeAreaView>
    );
}


