import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from 'expo-router';
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {useEffect} from "react";

export default function InitialPage() {
  const router = useRouter();

  useEffect(() => {
    
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        router.replace('/views/(tabs)/home')
      }
    });
    
  }, [])

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace('/views/login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace('/views/register')}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray'

  },
  button: {
    borderWidth: 1,
    borderColor: 'magenta',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginVertical: 8,
    backgroundColor: '#gray',
  },
  buttonText: {
    color: 'magenta',
    fontSize: 16,
    fontWeight: '500',
  }
});
