import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../style/stylePedidos'
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from '../../components/Navbar'




export default function MeusPedidos(props, { navigation }) {

    const [modalVisible, setModalVisible] = useState(false);

   

    return (
        <SafeAreaView style={{ height: '100%', backgroundColor: '#993333' }}>
            <View style={styles.container}>
                <Navbar navigation={props.navigation} />
                <View style={styles.meusPedidos}>

                <View style={styles.total}>
                    <Text style={styles.txtPrecoModal}>Total: <Text style={styles.txtDescCardapioModal}>R$</Text></Text>
                </View>

                <TouchableOpacity style={styles.botao}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.txtBotao}>Finalizar Compra</Text>
                        <Ionicons name='cart-outline' size={25} color={'white'}/>
                    </View>
                </TouchableOpacity>


                </View>
            </View>
        </SafeAreaView>
    );
}
