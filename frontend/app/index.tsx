import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from 'expo-router';
import { styles } from "./index.styles";
import {useEffect} from "react";

export default function InitialPage() {
  const router = useRouter();

  useEffect(() => {
    
    //onAuthStateChanged(getAuth(), (user) => {
      //if (user) {
        //router.replace('/views/(tabs)/home')
      //}
    //});
    
  }, [])

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button1}
        onPress={() => router.replace('/views/login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button2}
        onPress={() => router.replace('/views/register')}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}


