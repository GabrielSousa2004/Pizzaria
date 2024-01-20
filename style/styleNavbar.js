import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    navBar: {
        flex: 0,
        flexDirection: 'row',
        width: screenWidth,
        height: screenHeight / 10,
        paddingHorizontal: '3%',
        backgroundColor: '#993333',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logoNav: {
        width: screenWidth / 5,
        height: screenWidth/5,
        resizeMode: 'center',
    },
    boxIconsNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '61%',
        height: '100%'
    },

    textMenu: {
        color: '#fff',
        fontSize: 15,
    },

    boxNavPesquisa: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 7,

    },

    navPesquisa: {
        width: '80%',
        backgroundColor: 'white',
        paddingHorizontal: 2,
        borderRadius: 10,

    },
})

export default styles