import { View, Text, StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: "flex",
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
        width:"100%",
        overflow: "auto"
        
    },
    title: {
        whiteSpace: "pre",
        marginHorizontal: 10,
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Consolas',
        color: '#fff',
        marginTop: "10px" 
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
        color: '#aaa',
        backgroundColor: '#1a1a1a',
        height: "100%"
    },
    selfImg: {
        // width: imageWidth,
        // height: imageHeight

    },
    selfImgDiv: {
        // width: "20%",
        // height: "20%",
        padding:"10px",
        top: '8px',
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        display:"flex",
        justifyContent: "center",
        alignItems: "center"
    },
    ul: {
        margin: "0px"
    }
});