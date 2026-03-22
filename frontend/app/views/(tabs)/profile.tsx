import React, {useEffect, useState} from "react";
import { styles } from "./profile.styles";
import {View, Text, TouchableOpacity, Alert,} from "react-native";
import {deleteUser, EmailAuthProvider, getAuth, reauthenticateWithCredential, signOut} from "firebase/auth";
import {router} from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {Ionicons} from "@expo/vector-icons";

export default function ProfileView () {
    
    const auth = getAuth();
    const user = auth.currentUser;
    const email = user?.email;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState('');
    
    const GuestUser = () => {
        if (!user?.email){
            setUsername("Guest User");
        }
        else {
            setUsername(user.email);
        }
    }
    useEffect(() => {GuestUser()}, []);
    
    
    const deleteAccount = async () => {
        
        
        if (!user?.email){
            Alert.alert("Must be signed in to use this feature");
        }
        else{
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
                                router.replace("/views/login");
                            }
                            catch (error) {
                                console.error(error);
                            }
                            
                        }
                        
                    }
                }
            ])}
        }
        
    
    const signOutAccount = async () => {

        if (!user?.email){
            Alert.alert("Must be signed in to use this feature");
        }
        else 
        {
        Alert.alert
        (
           "Do you wish to sign out?",
            "Confirm to sign out of your account",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Sign Out",
                    onPress: async () => 
                    {

                        if (user?.email != null) 
                        {

                            try 
                            {
                                await signOut(auth).then(() => {
                                    router.replace("/views/login")
                                })
                                console.log("user signed out successfully.");
                                router.replace("/views/login");
                            }
                            catch (error) 
                            {
                                console.log(error);
                            }

                        }
                    }
                }
            ]
            
        )
        }
    }
    
    return (
        <View style={styles.container} >
            <View style={styles.frontcontainer}>
                <Text style={styles.headerText}>{username}</Text>
                
                <Ionicons style={styles.Icon} name="prism-sharp" size={250} color={"#FFFFFF"}/>
                
                <TouchableOpacity style={styles.signOutButton} onPress={signOutAccount}>
                    <Text style={styles.deleteSignOutButtonText}>Sign out</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.deleteButton} onPress={deleteAccount}>
                    <Text style={styles.deleteButtonText}>Delete Account</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
}

