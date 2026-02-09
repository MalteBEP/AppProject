import React, { useState, useRef } from "react";
import { View, Button, Text, TextInput, Image, FlatList, StyleSheet} from "react-native";

export default function PortfolioView() {

    const [searchInput, setSearchInput] = useState('');
    const [data, SetData] = useState<any[]>([]);

    const fetchData = async () => {
        const resp = await fetch(`http://localhost:5000/pokemon/cards/search?name=${encodeURIComponent(searchInput)}&sort=relevance`);
        const json = await resp.json();
        SetData(json.data);
    };


    return (

        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter Pokemon name"
                value={searchInput}
                onChangeText={setSearchInput}/>
            <Button title="Search" onPress={fetchData} />
            <FlatList
                data={data}
                keyExtractor={({ id }) => id}
                numColumns={2}
                renderItem={({ item }) => 
                (
                <View style={styles.row}>
                    <Text style={styles.text}>{item.name_numbered}</Text>
                    <Image 
                        source={{ uri: item.image }} 
                        style={{ 
                            width: 200,
                            height: 300 }}/>
                </View>
                )}/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#303030ff',
    alignItems: 'center',
  },
  row: {
    backgroundColor: '#ae00ffff',
    padding: 1,
    marginBottom: 10,
    margin: 10,
    borderRadius: 5,
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
  },

  input: {
    backgroundColor: '#ffffffff',
    padding: 4,
    marginBottom: 10,
    margin: 10,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
  },

  text: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0effdfff',
    textShadowRadius: 5,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2},
  },
});
