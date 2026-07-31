import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Keyboard,
	TouchableWithoutFeedback,
	Alert
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'expo-router';
import {styles} from "@/app/views/register.styles";
import { auth } from "@/firebaseConfig";




export default function RegisterView () {

	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');

	const register = () => {
		
		if (password != passwordConfirm) {
			Alert.alert("Error", "Passwords do not match");
			console.log("Error");
		}
		else{
			createUserWithEmailAndPassword(auth, email, password)
				.then(() => {
					router.replace('/views/home')
				})
				.catch(error => {
					console.error(error);
				});
		}
	};

	return (
	<TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
		<View style={styles.container}>
			<Text style={styles.header}>Create an account</Text>
			<TextInput
				value={email}
				placeholder='Email'
				placeholderTextColor={"#4D4D4D"}
				enablesReturnKeyAutomatically={true}
				onChangeText={setEmail}
				style={styles.textInput}>
			</TextInput>

			<Text style={styles.header2}>Choose a secure password</Text>
			<TextInput
				value={password}
				placeholder='Password'
				placeholderTextColor={"#4D4D4D"}
				onChangeText={setPassword}
				enablesReturnKeyAutomatically={true}
				secureTextEntry={true}
				style={styles.textInputPassword}>
			</TextInput>

			<TextInput
				value={passwordConfirm}
				placeholder='Confirm Password'
				placeholderTextColor={"#4D4D4D"}
				onChangeText={setPasswordConfirm}
				enablesReturnKeyAutomatically={true}
				secureTextEntry={true}
				style={styles.textInputPassword}>
			</TextInput>
			
			<TouchableOpacity
				style={styles.button}
				onPress={register}>
				<Text style={styles.buttonText}>Create Account</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.createAccountButton}
				onPress={() => {router.replace("/views/login")}}>
				<Text style={styles.createAccountText}>Already have an account? Sign in here.</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.createAccountButton}
				onPress={() => {router.replace("/views/home")}}>
				<Text style={styles.createAccountText}>Don't want to sign up? Login as a guest</Text>
			</TouchableOpacity>
		</View>
	</TouchableWithoutFeedback>

);
}