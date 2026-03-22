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
        marginTop: 45,
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 100,
        borderRadius: 25,
        
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 12,
    },
    
    deleteButton: {
        backgroundColor: '#d11515',
        marginTop: 25,
        borderRadius: 25,
        width: '50%',
        height: '7%',
        alignItems: 'center',
        justifyContent: 'center',

        shadowColor: '#000',
        shadowOffset: { width: 3, height: 6 },
        shadowOpacity: 0.5,
        shadowRadius: 12,
    },
    
    signOutButton: {
        backgroundColor: '#FFFFFF',
        marginTop: 150,
        borderRadius: 25,
        width: '50%',
        height: '7%',
        alignItems: 'center',
        justifyContent: 'center',

        shadowColor: '#000',
        shadowOffset: { width: 3, height: 6 },
        shadowOpacity: 0.5,
        shadowRadius: 12,
        
    },
    
    deleteButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },

    deleteSignOutButtonText: {
        color: 'back',
        fontWeight: 'bold',
    },
    
    Icon: {
        marginTop: 95,
        
    },
    
    
    
    
});