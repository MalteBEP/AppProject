import React, {useEffect, useState} from "react";
import { styles } from "./profile.styles";
import {View, Text, Button, TouchableOpacity, Alert, AlertType, AlertButton} from "react-native";
import {deleteUser, EmailAuthProvider, getAuth, reauthenticateWithCredential} from "firebase/auth";
import {router} from "expo-router";
import firebase from "firebase/compat/app";
import {credentials} from "@grpc/grpc-js";

export default function ProfileView () {
    
    const auth = getAuth();
    const user = auth.currentUser;
    const email = user?.email;
    const [password, setPassword] = useState('');

    
    const deleteAccount = async () => {

        Alert.prompt(
            "Confirm account deletion",
            'Are you sure you want to delete your account? This action cannot be undone. Please confirm your password',
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Delete",
                    onPress: async (password?: string) => {
                        if (!password) return;
                        
                        if (user?.email != null) {
                            
                            try {
                                await user.getIdToken(true);
                                
                                const credentials = EmailAuthProvider.credential(user.email, password)
                                await reauthenticateWithCredential(user, credentials);
                                await deleteUser(user);
                                console.log("user deleted successfully.");
                                router.replace("/views/login")
                            }
                            catch (error) {
                                console.error(error);
                            }
                            
                        }
                        
                    }
                }
            ])}
        
    
    const signOutAccount = async () => {
        
        
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.frontcontainer}>
                <Text style={styles.headerText}>{email}</Text>
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

