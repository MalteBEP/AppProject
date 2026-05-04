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
                    <Pressable style={{flexDirection: 'row', marginLeft: 150}}>
                        <Image source={{ uri: (selectedPokemon as any)?.image }}
                               style={{ width: 300, height: 420 }}/>
                        <View style={{ flexDirection: 'column', height: 420, backgroundColor: 'white', padding: 10, borderRadius: 15, marginLeft: 10}}>
                            
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>{selectedPokemon?.name}</Text>
                            <Text style={{ color: '#lightgray' }}>{selectedPokemon?.episode.name} {selectedPokemon?.episode.code}</Text>

                            <View style={{ marginVertical: 10, borderBottomWidth: 1, borderBottomColor: '#gray' }} />
                            
                            <Text style={{fontWeight: 'bold'}}>No: {selectedPokemon?.card_number}</Text>
                            <Text style={{fontWeight: 'bold'}}>Rarity: {selectedPokemon?.rarity}</Text>
                            <Text style={{fontWeight: 'bold'}}>Artist: {selectedPokemon?.artist?.name ?? 'Unknown'}</Text>
                            
                            <View style={{ marginVertical: 10, borderBottomWidth: 1, borderBottomColor: '#gray' }} />
                            
                            <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Market Value:</Text>
                            <Text>Cardmarket: {selectedPokemon?.prices.cardmarket.lowest_near_mint}€</Text>
                            
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#lightgray' }}>Graded (PSA 10):</Text>
                                <Text>{selectedPokemon?.prices?.ebay?.graded?.psa?.["10"]?.median_price
                                    ? `$${selectedPokemon.prices.ebay.graded.psa["10"].median_price}`
                                    : 'No Data'}</Text>
                            </View>
                            
                            <View style={{ marginTop: 'auto' }}>
                                <Text style={{ fontSize: 16 }}>30d Avg: {selectedPokemon?.prices.cardmarket["30d_average"]}€</Text>
                            </View>
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

