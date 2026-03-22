import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 1,
        backgroundColor: '#2A2A2A',
        alignItems: 'center',
    },
    cards: {
        backgroundColor: 'grey',
        padding: 0,
        margin: 8,
        borderRadius: 5,
        elevation: 15,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
    },

    textInput: {
        color: 'black',
        fontSize: 14,
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#9F7AEA',
        paddingHorizontal: 14,
        minHeight: 35,
        marginTop: 55,
        marginBottom: 20,
        marginHorizontal: 20,
        width: '75%',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 12,
    },
    
    noResultText: {
        color: 'white',
        fontSize: 16,
        alignSelf: 'center',
        
    }
    
});