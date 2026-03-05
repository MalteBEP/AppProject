import React, {useEffect} from "react";
import { styles } from "./profile.styles";
import {View, Text, Button, TouchableOpacity, Alert} from "react-native";
import {deleteUser, getAuth, signOut} from "firebase/auth";
import {router} from "expo-router";

export default function ProfileView () {
    
    const auth = getAuth();
    const user = auth.currentUser;
    const username = user?.email;

    const deleteAccount = async () => {
        if (user != null){
            
            deleteUser(user).then(() => {
                // User deleted.
            }).catch((error) => {
                console.log(error);
            });
        }
        
    }
    
    const signOutAccount = async () => {
        Alert.alert(
            'Confirm to sign out',
            'Are you sure you want to sign out?',
            [
                {
                    text: 'Confirm',
                    onPress: () => 
                        signOut(auth).then(() => {
                        // Sign-out successful.
                        router.replace("/views/login");
                    }).catch((error) => {
                        // An error happened.
                    }),
                },
            ],
            {
                cancelable: true,
                onDismiss: () =>
                    Alert.alert(
                        'This alert was dismissed by tapping outside of the alert dialog.',
                    ),
            },
        );
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.frontcontainer}>
                <Text style={styles.headerText}>{username}</Text>
                <TouchableOpacity style={styles.deleteButton} onPress={deleteAccount}>
                    <Text style={styles.deleteButtonText}>Delete Account</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signOutButton} onPress={signOutAccount}>
                    <Text style={styles.deleteButtonText}>Sign out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

