import React, { useState } from "react";
import { styles } from "./portfolio.styles";
import {View, TextInput, Image, FlatList, Text} from "react-native";

export default function PortfolioView() {

    const [searchInput, setSearchInput] = useState('');
    const [data, SetData] = useState<any[]>([]);
    const [noResults, SetNoResults] = useState("")

    const fetchData = async () => {
        
        try 
        {
            const resp = await fetch(`http://localhost:5000/pokemon/cards/search?name=${encodeURIComponent(searchInput)}&sort=relevance`);
            const json = await resp.json();
            
            if (json.data.length === 0) {
                SetData([]);
                SetNoResults("No results found.");
            }
            else {
                SetNoResults("");
                SetData(json.data);
            }
        }
        
        catch (error) {
            console.log(error);
        }
        
    };
    
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={({ id }) => id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <Text style={styles.noResultText}>
                        {noResults}
                    </Text>
                }
                ListHeaderComponent={
                    <TextInput
                        style={styles.textInput}
                        placeholder="Search for a pokemon..."
                        placeholderTextColor="black"
                        value={searchInput}
                        onChangeText={setSearchInput}
                        onSubmitEditing={() => fetchData()}
                    />
                }

                renderItem={({ item }) => (
                    <View style={styles.cards}>
                        <Image
                            source={{ uri: item.image }}
                            style={{
                                width: 160,
                                height: 220,
                            }}
                        />
                    </View>
                )}
            />
        </View>
    );
}

