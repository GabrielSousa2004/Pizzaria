import React, {useState} from 'react';
import  { Text, View} from 'react-native';
import styles from '../../style/styleHome'
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from '../../components/Navbar'


export default function Perfil(props, {navigation}){

  const [ modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={{height: '100%', backgroundColor:'#993333'}}>
            <View style={styles.container}>
            <Navbar navigation = {props.navigation}/>
                    <Text>PERFIL</Text>
                  
                   
            </View>
        </SafeAreaView>
    );
}
