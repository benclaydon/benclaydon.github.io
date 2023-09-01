import { View, Text, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#000',
        height: 60,
        padding: 5,
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        width:"100%"
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        fontFamily: 'Consolas',
        color: '#fff'
    },
    bodyText: {
        marginHorizontal: 10,
        fontSize: 17,
        fontWeight: '450',
        fontFamily: 'Consolas',
        color: '#fff',
    },
    bodyTextNoIndent: {
        fontSize: 17,
        fontWeight: '450',
        fontFamily: 'Consolas',
        color: '#fff',
    },
    formText: {
        marginHorizontal: 10,
        fontSize: 17,
        fontWeight: '450',
        fontFamily: 'Arial',
        color: '#000',
    },
    menu: {
        flexDirection: 'row',
    },
    menuItem: {
        marginHorizontal: 10,
        fontSize: 22,
        fontWeight: '500',
        fontFamily: 'Consolas',
        color: '#fff',
    },
    view: {
        padding: "10px",
        alignItems: "center",
        color: '#aaa',
        backgroundColor: '#1a1a1a',
        height: "100%"
    },
    selfImg: {
        width: '100%',
        height: undefined,
        aspectRatio: 1536 / 2048,

    },
    selfImgDiv: {
        width: "15%",
        padding:"10px",
        top: '8px',
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
    },
});