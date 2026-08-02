import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, TouchableWithoutFeedback} from "react-native";
import { styles } from "./login.styles";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";

import { useRouter } from 'expo-router';

export default function LoginView () {
	
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const login = () => {
		signInWithEmailAndPassword(auth, email, password)
		.then(() => {
			router.replace('/views/home')
		})
		.catch(error => {
			console.error(error);
		});

	};
    return (
		<TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        <View style={styles.container}>
        <Text style={styles.header}>Sign in to your account</Text>
			<TextInput
				value={email}
				placeholder='Email'
				placeholderTextColor={"#4D4D4D"}
				enablesReturnKeyAutomatically={true}
				onChangeText={setEmail}
				style={styles.textInput}>
			</TextInput>

			<TextInput
				value={password}
				placeholder='Password'
				placeholderTextColor={"#4D4D4D"}
				onChangeText={setPassword}
				enablesReturnKeyAutomatically={true}
				secureTextEntry={true}
				style={styles.textInput}>
			</TextInput>

			<TouchableOpacity
				style={styles.button}
				onPress={login}>
				<Text style={styles.buttonText}>Sign in</Text>
			</TouchableOpacity>
			
			<TouchableOpacity
			style={styles.createAccountButton}
			onPress={() => {router.replace("/views/register")}}>
				<Text style={styles.createAccountText}>Don't have an account? Click here to create one</Text>
			</TouchableOpacity>
        </View>
		</TouchableWithoutFeedback>
    );
}


