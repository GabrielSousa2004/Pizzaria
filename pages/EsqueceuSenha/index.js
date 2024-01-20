import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../style/styleLogin';
export default function Login({ navigation }) {

  const [senha, setSenha] = useState('');
  const [senha2, setSenha2] = useState('');
  const [esconderSenha, setEsconderSenha] = useState(true);
var erro 

  const verificacaoSenha = () =>{
    if( senha !='' && senha2 !=''){

        if(senha != senha2){
            return <Text style={styles.txtInput}>Senhas incompátiveis</Text>
        } else if (senha === senha){
            
            erro = false
        }
    }    
  }


    return (
    <SafeAreaView style={{ height: '100%', backgroundColor: '#fff' }}>
        <ScrollView>
        <View style={styles.cabecalho}>
            
                <Text style={styles.textHeader}>Recupere sua {'\n'}Senha</Text>
           
          <Animatable.Image
            animation={"flipInY"}
            source={require('../../assets/images/pizza-vinho.png')}
            style={styles.imgHeader}
          />
        </View>

        <View style={styles.body}>
            <View style={styles.boxLogin}>
            <Text style={styles.txtInput}>Qual a senha?</Text>
              <View style={styles.boxInput}>
                <TextInput style={styles.input} placeholder='Nova Senha'
                  value={senha}
                  onChangeText={(texto) => setSenha(texto)}
                  secureTextEntry={esconderSenha}
                />
                <TouchableOpacity style={styles.icon} onPress={() => setEsconderSenha(!esconderSenha)}>
                  <Ionicons name="eye" color="#882727" size={25} />
                </TouchableOpacity>
              </View>
            </View>


            <View style={styles.boxLogin}>
              <Text style={styles.txtInput}>Qual a senha?</Text>
              <View style={styles.boxInput}>
                <TextInput style={styles.input} placeholder='Confirme a senha'
                  value={senha2}
                  onChangeText={(texto) => setSenha2(texto)}
                  secureTextEntry={esconderSenha}
                  />
                <TouchableOpacity style={styles.icon} onPress={() => setEsconderSenha(!esconderSenha)}>
                  <Ionicons name="eye" color="#882727" size={25} />
                </TouchableOpacity>
              </View>
            </View>
                  <Text>{verificacaoSenha()}</Text>
            <View style={styles.boxBotaoRecuperar}>
                            <TouchableOpacity style={styles.botaoRecuperar}
                                onPress={() => navigation.navigate('Login')}

                            >
                                <Text style={styles.txtBotao}>Cancelar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.botaoRecuperar}
                                onPress={() => {erro === false ? navigation.navigate('Login') : erro = true}}
                            >
                                <Text style={styles.txtBotao}>Concluir </Text>


                            </TouchableOpacity>
                        </View>
        </View>
        </ScrollView>
    </SafeAreaView>

  );
}