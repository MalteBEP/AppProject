import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import {initializeApp } from 'firebase/app';
import {getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'expo-router';

export default function LoginView () {
	
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const signup = () => {
		signInWithEmailAndPassword(getAuth(), email, password)
		.then(() => {
			router.replace('/views/home')
		})
		.catch(error => {
			console.error(error);
		});

	};
    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray' }}>
        <Text>Login page</Text>
			<TextInput
				value={email}
				placeholder='Email'
				onChangeText={setEmail}
				style={{backgroundColor: '#ffffff', margin: 20}}>
			</TextInput>

			<TextInput
				value={password}
				placeholder='Password'
				onChangeText={setPassword}
				secureTextEntry={true}
				style={{backgroundColor: '#ffffff', margin: 20}}>
			</TextInput>

			<TouchableOpacity
				style={styles.button}
				onPress={signup}>
				<Text style={styles.buttonText}>Sign in</Text>
			</TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	button: {
		borderWidth: 1,
		borderColor: 'magenta',
		borderRadius: 5,
		paddingVertical: 10,
		paddingHorizontal: 25,
		marginVertical: 8,
		backgroundColor: 'gray',
	},
	buttonText: {
		color: 'magenta',
		fontSize: 16,
		fontWeight: '500',
	}
});

