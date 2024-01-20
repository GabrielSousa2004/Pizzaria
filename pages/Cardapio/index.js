import React, {useState, useEffect} from 'react';
import  {View, TextInput, TouchableOpacity, ScrollView, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import styles from '../../style/styleCardapio';
import Dados from '../../components/Dados';
import produtos from '../../flatList/produtos';
import Bebidas from '../../components/Bebidas';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from '../../components/Navbar';


export default function Cardapio(props, {navigation}){

  const [ modalVisible, setModalVisible] = useState(false);

  const[filtro, setFiltro] = useState('')
  const[lista, setLista] = useState(produtos)

  useEffect(() => {

    if(filtro === ''){
        novaLista = produtos;
    }else{
        novaLista = produtos.filter((item)=>{
            return item.nome.toLowerCase().includes(filtro.toLowerCase());
        });
    }
    setLista(novaLista);
  }, [filtro]);

    return (
        <SafeAreaView style={{height: '100%', backgroundColor:'#993333'}}>
            <View style={styles.container}>
                <Navbar navigation = {props.navigation}/>
                <View style={styles.boxInput}>
                    <TextInput placeholder='Buscar'
                    value={filtro}
                    onChangeText={(texto) => setFiltro(texto)}
                    style={styles.input}>

                    </TextInput>
                    <TouchableOpacity>

                        <Ionicons name='search-outline' size={30} color={'white'}/>
                    </TouchableOpacity>
                </View>
                    
                    <ScrollView>

                        <Dados data={lista}/>
                        <Bebidas/>
                    </ScrollView>
                   
                        
                    
                  
                   
            </View>
        </SafeAreaView>
    );
}
