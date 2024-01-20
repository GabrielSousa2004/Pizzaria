import React, { useState } from 'react';
import { Text, View, Image, FlatList, TouchableOpacity, Modal, Dimensions, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../style/styleDados';
import produtos from '../flatList/produtos'
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;







export default function Dados(props) {
    const [modalPedido, setModalPedido] = useState(false);
    const [contador, setContador] = useState(0);



    const decrementar = () => {
        setContador(contador - 1);
    }

    const incrementar = () => {
        setContador(contador + 1);
    }
    return (
        <>
            <FlatList
                ItemSeparatorComponent={<View style={styles.separadorFlat}>
                </View>


                }
                ListHeaderComponent={
                    <View style={styles.destaque}>

                        <Text style={styles.txtDestaque}>Pizzas</Text>
                    </View>
                }
                data={props.data}
                keyExtractor={item => item.id.toString()}

                renderItem={({ item }) => (
                    <View style={styles.boxProduto}>
                        <TouchableOpacity
                            
                            onPress={() => { setModalPedido(true) } }>
                            <Image source={item.imagem} style={styles.imgProduto} />
                        </TouchableOpacity>
                        <View style={styles.boxTxtProduto}>
                            <Text numberOfLines={1} style={styles.txtCardapio} >{item.nome} - {item.preco}</Text>

                            <Text style={styles.txtDescCardapio} >{item.desc}</Text>
                        </View>
                    </View>

                )
                }
            />

            

            <Modal transparent visible={modalPedido} animationType='fade'>
                <ScrollView style={{ height: screenHeight }}>
                    <View style={{ flex: 1, backgroundColor: 'white', height: screenHeight }}>
                        <View style={{ flexDirection: 'row', width: screenWidth / 1.570, justifyContent: 'space-between' }}>
                            <TouchableOpacity style={{ padding: 12 }}
                                onPress={() => { setModalPedido(false) }}
                            >
                                <Ionicons name='chevron-down-outline' size={30} color={'#993333'}></Ionicons>
                            </TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.txtDestaque}>Detalhes</Text>
                            </View>
                        </View>

                        <View style={{ height: screenHeight / 2, justifyContent: 'center', }}>
                            <View style={styles.container}>

                                <Image source={require('../assets/images/duvida.png')} style={styles.imgProdutoModal} />

                                <View style={styles.boxPedidoModal}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Text numberOfLines={1} style={styles.txtCardapioModal}>Pizza</Text>

                                    </View>
                                    

                                
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                        <Text style={styles.txtDescCardapioModal} >Desc</Text>

                                        <Text style={styles.txtPrecoModal} >R$ ??.??</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.body}>
                                <Text style={styles.txtObs}>Observações</Text>
                                <TextInput style={styles.input}
                                    multiline={true}
                                    numberOfLines={4}
                                >

                                </TextInput>

                                <View style={styles.quant}>
                                    <TouchableOpacity
                                        onPress={contador != 0 ? decrementar : null}
                                    >

                                        <Ionicons name='remove-outline' size={30} color={'#993333'} />
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 25 }}>{contador}</Text>
                                    <TouchableOpacity
                                        onPress={incrementar}
                                    >

                                        <Ionicons name='add-outline' size={30} color={'#993333'} />
                                    </TouchableOpacity>
                                </View>

                            <View style={styles.total}>
                                <Text style={styles.txtPrecoModal}>Total: <Text style={styles.txtDescCardapioModal}>R$</Text></Text>
                            </View>

                                <TouchableOpacity style={styles.botao}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Text style={styles.txtBotao}>Adicionar ao Carrinho</Text>
                                        <Ionicons name='cart-outline' size={25} color={'white'} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>

            </Modal>

        </>
    );
}


