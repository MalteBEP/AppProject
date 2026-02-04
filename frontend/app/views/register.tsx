import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'expo-router';




export default function RegisterView () {

	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const register = () => {
		createUserWithEmailAndPassword(getAuth(), email, password)
		.then(() => {
			router.replace('/views/home')
		})
		.catch(error => {
			console.error(error);
		});
	};

    return (

        <View style={{ flex: 1, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>
        <Text>Register page</Text>
		<TextInput 
			value={email}
			placeholder='Email'
			onChangeText={setEmail}
			style={{backgroundColor: '#gray', margin: 20}}>
	   	</TextInput>

		<TextInput
			value={password}
			placeholder='Password'
			onChangeText={setPassword}
			secureTextEntry={true}
			style={{backgroundColor: '#gray', margin: 20}}>
	   	</TextInput>


	   	<TouchableOpacity
	   	style={styles.button}
	   	onPress={register}>
	   	<Text style={styles.buttonText}>Sign up</Text>
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
