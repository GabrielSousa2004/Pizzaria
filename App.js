import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './pages/Login'
import EsqueceuSenha from './pages/EsqueceuSenha'
import Cadastro from './pages/Cadastro'
import Home from './pages/Home'
import Cardapio from './pages/Cardapio'
import MeusPedidos from './pages/MeusPedidos'
import Perfil from './pages/Perfil'
import Suporte from './pages/Suporte'


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="login" >
        <Stack.Screen
                        name='Login'
                        component={Login}
                        options={{headerShown: false}}
                    /> 
          
          <Stack.Screen
                        name='EsqueceuSenha'
                        component={EsqueceuSenha}
                        options={{headerShown: false}}
                    /> 

          <Stack.Screen
                        name='Cadastro'
                        component={Cadastro}
                        options={{headerShown: false}}
                    /> 
                    <Stack.Screen
                        name='Home'
                        component={Home}
                        options={{headerShown: false}}
                    /> 
                
                
                  <Stack.Screen
                    name='Cardapio'
                    component={Cardapio}
                    options={{headerShown: false}}
                />
                   <Stack.Screen
                    name='MeusPedidos'
                    component={MeusPedidos}
                    options={{headerShown: false}}
                />
                    <Stack.Screen
                    name='Perfil'
                    component={Perfil}
                    options={{headerShown: false}}
                />
                   <Stack.Screen
                    name='Suporte'
                    component={Suporte}
                    options={{headerShown: false}}
                />
               
            </Stack.Navigator>
        </NavigationContainer>
    );
}

