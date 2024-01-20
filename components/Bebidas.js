import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from '../style/styleDados';

const bebidas = [
    {
        id: '01',
        nome: ['Coca-Cola', "2L"],
        imagem: require('../assets/images/products/coca2l.jpg'),
        preco: "R$10,00",
    },
    {
        id: '02',
        nome: ['Coca Cola', "350ml"],
        imagem: require('../assets/images/products/cocaLata350ml.jpg'),
        preco: "R$5,50",
    },
    {
        id: '03',
        nome: ['Coca Cola Zero', "2L"],
        imagem: require('../assets/images/products/cocaZero2l.jpg'),
        preco: "R$10,00",
    },
    {
        id: '04',
        nome: ['Guaraná Antártica', "2L"],
        imagem: require('../assets/images/products/guarana2L.jpg'),
        preco: "R$7,50",
    },
    {
        id: '05',
        nome: ['Guaraná Antártica Zero', "2L"],
        imagem: require('../assets/images/products/guaranaZero2L.jpg'),
        preco: "R$7,50",
    },
    {
        id: '06',
        nome: ['Guaraná Antártica', "350ml"],
        imagem: require('../assets/images/products/guaranaLata.png'),
        preco: "R$3,00",
    },
    {
        id: '07',
        nome: ['Guaraná Antártica Zero', "350ml"],
        imagem: require('../assets/images/products/guaranaZeroLata.png'),
        preco: "R$10,00",
    },
    {
        id: '08',
        nome: ['Fanta Laranja', "2L"],
        imagem: require('../assets/images/products/fanta2l.png'),
        preco: "R$8,50",
    },
    {
        id: '09',
        nome: ['Fanta Laranja', "350ml"],
        imagem: require('../assets/images/products/fanta350ml.jpg'),
        preco: "R$4,00",
    },
    {
        id: '10',
        nome: ['Suco Del Valle Uva', "1L"],
        imagem: require('../assets/images/products/dellValle1l.webp'),
        preco: "R$10,00",
    },
    {
        id: '11',
        nome: ['Suco Del Valle Uva', "290ml"],
        imagem: require('../assets/images/products/dellValle290ml.jpg'),
        preco: "R$6,00",
    },

]


export default function Bebidas(props) {
    return (
            <FlatList
                ItemSeparatorComponent={<View style={styles.separadorFlat}>
                    </View>}
                ListHeaderComponent={
                    <View style={styles.destaque}>
                        <Text style={styles.txtDestaque}>Bebidas</Text>
                    </View>
                }
                    data={bebidas}
                    keyExtractor={item => item.id.toString()}

                    renderItem={({ item }) => (
                        <View style={styles.boxProduto}>
                            <TouchableOpacity>
                                <Image source={item.imagem} style={styles.imgProduto} />
                            </TouchableOpacity>
                            <View style={styles.boxTxtProduto}>
                                <Text numberOfLines={1} style={styles.txtCardapio} >{item.nome[0]} - {item.nome[1]}</Text>
                                <Text style={styles.txtDescCardapio} >{item.preco}</Text>
                            </View>
                        </View>
                    )
                    }
            />
    );
}