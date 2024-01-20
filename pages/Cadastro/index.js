import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../style/stylecadastro';

export default function Cadastro({ navigation }) {

    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');
    const [esconderSenha, setEsconderSenha] = useState(true);
    const [esconderSenha2, setEsconderSenha2] = useState(true);
    var erro

    const verificacaoSenha = () =>{
        if( senha !='' && confirmSenha !=''){
    
            if(senha != confirmSenha){
                return <Text style={styles.txtInput}>Senhas incompátiveis</Text>
            } else if (senha === confirmSenha){
                
                erro = false
            }
        }    
      }
    return (
        <SafeAreaView style={{ height: '100%', backgroundColor: '#fff' }}>
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.cabecalho}>
                        <Text style={styles.textHeader}>Cadastre-se</Text>
                        <Animatable.Image
                            animation={"flipInY"}
                            source={require('../../assets/images/pizza-vinho.png')}
                            style={styles.imgHeader}
                        />
                    </View>
                    <View style={styles.cadastro}>

                        <View style={styles.boxCadastro}>
                            <Text style={styles.txtInput}> Digite seu nome completo: </Text>
                            <View style={styles.boxInput}>
                                <TextInput style={styles.input} placeholder='Digite seu nome completo'
                                    value={nome}
                                    onChangeText={(texto) => setNome(texto)}
                                />
                            </View>
                        </View>

                        <View style={styles.boxCadastro}>

                            <Text style={styles.txtInput}> Qual o seu telefone? </Text>
                            <View style={styles.boxInput}>
                                <TextInput style={styles.input} placeholder='Qual o seu telefone'
                                    value={telefone}
                                    onChangeText={(texto) => setTelefone(texto)}
                                />


                            </View>
                        </View>


                        <View style={styles.boxCadastro}>

                            <Text style={styles.txtInput}>Qual o email?</Text>
                            <View style={styles.boxInput}>
                                <TextInput style={styles.input} placeholder='Digite o email'
                                    keyboardType='email-address'
                                    autoComplete='email'
                                    autoCapitalize='none'
                                    value={email}
                                    onChangeText={(texto) => setEmail(texto)}
                                />

                            </View>
                        </View>

                        <View style={styles.boxCadastro}>
                            <Text style={styles.txtInput}>Qual a senha?</Text>
                            <View style={styles.boxInput}>
                                <TextInput style={styles.input} placeholder='Digite a senha'
                                    value={senha}
                                    onChangeText={(texto) => setSenha(texto)}
                                    secureTextEntry={esconderSenha}
                                />
                                <TouchableOpacity style={styles.icon} onPress={() => setEsconderSenha(!esconderSenha)}>
                                    <Ionicons name="eye" color="#882727" size={25} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.boxCadastro}>
                            <Text style={styles.txtInput}>Confirme sua senha:</Text>
                            <View style={styles.boxInput}>
                                <TextInput style={styles.input} placeholder='Confirme a senha'
                                    value={confirmSenha}
                                    onChangeText={(texto) => setConfirmSenha(texto)}
                                    secureTextEntry={esconderSenha2}
                                />
                                <TouchableOpacity style={styles.icon} onPress={() => setEsconderSenha2(!esconderSenha2)}>
                                    <Ionicons name="eye" color="#882727" size={25} />
                                </TouchableOpacity>
                            </View>
                        </View>

                                <Text>{verificacaoSenha()}</Text>

                        <View style={styles.boxContrato}>
                            <View style={styles.checkBox}>
                                {/* <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkBox}
                        /> */}
                            </View>
                            <Text style={styles.contrato}> Concordo com os termos de Uso e a nossa política de Privacidade </Text>
                        </View>




                        <View style={styles.boxBotao}>
                            <TouchableOpacity style={styles.botao}
                                onPress={() => navigation.navigate('Login')}

                            >
                                <Text style={styles.txtBotao}>Cancelar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.botao}
                                onPress={() => {erro === false && email!= '' && nome!= ''&& telefone!=''  ? navigation.navigate('Login') : erro = true}}
                            >
                                <Text style={styles.txtBotao}>Concluir </Text>


                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>

        </SafeAreaView>
    );
}


