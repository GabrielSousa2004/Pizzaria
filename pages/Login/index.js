import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../style/styleLogin';
export default function Login({ navigation }) {

  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [esconderSenha, setEsconderSenha] = useState(true);
  var erro
  const verificacaoSenha = () =>{
    
    if( email!= '' && senha!=''){

      if(email != 'pizza' || senha !='pizza123'){
        return <Text style={styles.txtInput}>Email ou senha inválido(s)</Text>
      }
      
      if (email == 'pizza' && senha == 'pizza123') {
        erro = false
      }
    }
    }

  
  return (
    <SafeAreaView style={{ height: '100%', backgroundColor: '#fff' }}>
      <View style={styles.container}>
          <ScrollView>
        <View style={styles.cabecalho}>
          <Text style={styles.textHeader}>Bem vindo(a)</Text>
          <Animatable.Image
            animation={"flipInY"}
            source={require('../../assets/images/pizza-vinho.png')}
            style={styles.imgHeader}
          />
        </View>
          <View style={styles.login}>
            <View style={styles.boxLogin}>
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

            <View style={styles.boxLogin}>
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
              <View style={styles.boxSenhaEsquecida}>
                <TouchableOpacity
                  onPress={()=> navigation.navigate('EsqueceuSenha')}
                >
                  <Text style={styles.senhaEsquecida}>Esqueceu a senha?</Text>

                </TouchableOpacity>
              </View>
            </View>
          <Text>{verificacaoSenha()}</Text>
          </View>


          <View style={styles.boxBotao}>
            <TouchableOpacity style={styles.botao}
              onPress={() => { erro == false ? navigation.navigate('Home') : erro = true }}

            >
              <Text style={styles.txtBotao}>Entre no App</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
              onPress={() => navigation.navigate('Cadastro')}
            >
              <Text style={styles.txtBotao}>É novo por aqui? Cadastre-se</Text>


            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>

  );
}