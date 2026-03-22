import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 1,
        backgroundColor: '#2A2A2A',
        alignItems: 'center',
    },

    header: {
        color: '#9F7AEA',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 25,
        marginTop: 200,

        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
    },

    textInput: {

        width: '60%',
        height: '5%',
        borderRadius: 10,
        backgroundColor: 'grey',
        marginBottom: 50,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        paddingLeft: 10,

    },

    button1: {
        width: '40%',
        marginTop: 200,
        height: '5%',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9F7AEA',
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
    },

    button2: {
        width: '40%',
        marginTop: 20,
        height: '5%',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9F7AEA',
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
    },

    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
    },

    createAccountButton: {
        backgroundColor: 'transparent',
    },

    createAccountText: {
        marginTop: 50,
        textDecorationLine: 'underline',
        color: 'grey',
        opacity: 0.5,
        fontStyle: 'italic',
    },
})