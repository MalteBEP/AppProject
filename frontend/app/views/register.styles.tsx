import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 1,
        backgroundColor: '#2A2A2A',
        alignItems: 'center',
    },

    header: {
        color: '#9F7AEA',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 100,

        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
    },

    header2: {
        color: '#9F7AEA',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 100,

        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
    },

    textInput: {

        width: '80%',
        height: '5%',
        borderRadius: 10,
        backgroundColor: 'grey',
        marginBottom: 10,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        paddingLeft: 10,

    },

    textInputPassword: {

        width: '80%',
        height: '5%',
        borderRadius: 10,
        backgroundColor: 'grey',
        marginBottom: 10,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        paddingLeft: 10,

    },

    button: {
        width: '60%',
        height: '5%',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9F7AEA',
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        marginTop: 50,
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
        marginTop: 35,
        textDecorationLine: 'underline',
        color: 'grey',
        opacity: 0.5,
        fontStyle: 'italic',
    },
    
});
    
