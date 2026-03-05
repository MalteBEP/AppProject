import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 1,
        backgroundColor: '#2A2A2A',
        alignItems: 'center',
    },
    
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 25,
        
    },
    
    frontcontainer: {
        flex: 1,
        backgroundColor: 'grey',
        alignSelf: 'stretch',
        alignItems: 'center',
        marginTop: 80,
        marginRight: 50,
        marginLeft: 50,
        marginBottom: 150,
        borderRadius: 25,
        
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 12,
    },
    
    deleteButton: {
        backgroundColor: '#FF2C21',
        marginTop: 500,
        borderRadius: 25,
        width: '50%',
        height: '7%',
        alignItems: 'center',
        justifyContent: 'center',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 12,
    },
    
    signOutButton: {
        backgroundColor: '#000',
        marginTop: 50,
        borderRadius: 25,
        width: '50%',
        height: '7%',
        alignItems: 'center',
        justifyContent: 'center',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 12,
        
    },
    
    deleteButtonText: {
        color: 'white',
        fontWeight: 'bold',
    }
    
    
});