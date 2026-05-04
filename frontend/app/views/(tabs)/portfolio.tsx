import React, { useState } from "react";
import { styles } from "./portfolio.styles";
import {View, TextInput, Image, FlatList, Text, TouchableOpacity, Modal, Pressable} from "react-native";

export default function PortfolioView() {

    const [searchInput, setSearchInput] = useState('');
    const [data, SetData] = useState<any[]>([]);
    const [noResults, SetNoResults] = useState("");
    const [selectedPokemon, SetSelectedPokemon] = useState<any>(null);
    
    const cardSelected = (item : any) => {
        if (item){
            SetSelectedPokemon(item);
        }
        else {
            console.log(item);
        }
    };

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
            
            
            <Modal
                visible={selectedPokemon !== null}
                transparent={true}
                animationType="fade">
                <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.7)'}}
                                  onPress={() => SetSelectedPokemon(null)}>
                    <Pressable style={{flexDirection: 'row'}}>
                        <Image source={{ uri: (selectedPokemon as any)?.image }}
                               style={{ width: 300, height: 420 }}/>
                        <View style={{ flexDirection: 'column', height: 420, backgroundColor: 'white', padding: 10}}>
                            
                            <Text style={{ backgroundColor: 'white'}}> Name: {selectedPokemon?.name}</Text>
                            
                            <Text style={{ backgroundColor: 'white'}}> Card Number: {selectedPokemon?.card_number}</Text>
                            
                            <Text style={{ backgroundColor: 'white'}}> Rarity: {selectedPokemon?.rarity}</Text>

                            <Text style={{ backgroundColor: 'white'}}> Price: {selectedPokemon?.prices.cardmarket.lowest_near_mint}€</Text>
                        </View>
                    </Pressable>
                    
                </TouchableOpacity>
            </Modal>
            
            
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
                        <TouchableOpacity
                        onPress={() => cardSelected(item)}>
                            <Image
                                source={{ uri: item.image }}
                                style={{
                                    width: 160,
                                    height: 220,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

