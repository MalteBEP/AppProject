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
            const resp = await fetch(`http://127.0.0.1:5000/pokemon/cards/search?name=${encodeURIComponent(searchInput)}&sort=relevance`);
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

                    <Pressable style={{ flexDirection: 'column' }}>
                        <Image
                            source={{ uri: (selectedPokemon as any)?.image }}
                            style={{ width: 300, height: 420 }}
                        />
                        <View style={{ flexDirection: 'column', alignSelf: "center", height: 300, backgroundColor: '#343434', padding: 15, borderRadius: 15, width: 300, marginTop: 5 }}>
                            <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 5, color: '#9F7AEA', textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 3}}>
                                {selectedPokemon?.name}
                            </Text>
                            <Text style={{ color: '#E2E8F0', fontSize: 12 }}>
                                {selectedPokemon?.episode.name} {selectedPokemon?.episode.code}
                            </Text>
                            <View style={{ marginVertical: 10, borderBottomWidth: 1, borderBottomColor: 'gray' }} />
                            <Text style={{ color: '#9F7AEA', fontWeight: 'bold', textShadowColor: '#000', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 2 }}>
                                No: 
                                <Text style={{ color: '#FFFFFF', fontWeight: 'normal' }}>
                                    {selectedPokemon?.card_number}
                                </Text>
                            </Text>
                            
                            <Text style={{ color: '#9F7AEA', fontWeight: 'bold', textShadowColor: '#000', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 2 }}>
                                Rarity: 
                                <Text style={{ color: '#FFFFFF', fontWeight: 'normal' }}>
                                    {selectedPokemon?.rarity}
                                </Text>
                            </Text>

                            <Text style={{ color: '#9F7AEA', fontWeight: 'bold', textShadowColor: '#000', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 2 }}>
                                Artist:
                                <Text style={{ color: '#FFFFFF', fontWeight: 'normal' }}>
                                    {selectedPokemon?.artist?.name ?? 'Unknown'}
                                </Text>
                            </Text>

                            <View style={{ marginVertical: 10, borderBottomWidth: 1, borderBottomColor: 'gray' }} />
                            
                            <Text style={{ color: '#9F7AEA', fontWeight: 'bold', marginBottom: 5, textShadowColor: '#000', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 2 }}>
                                Market Value:
                            </Text>

                            <Text style={{ color: '#9F7AEA' }}>
                                Cardmarket: <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{selectedPokemon?.prices.cardmarket.lowest_near_mint}€</Text>
                            </Text>

                            <View style={{ marginTop: 10 }}>
                                <Text style={{ color: '#9F7AEA', fontWeight: 'bold', fontSize: 12, textShadowColor: '#000', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 2 }}>
                                    Graded (PSA 10):
                                </Text>
                                <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>
                                    {selectedPokemon?.prices?.ebay?.graded?.psa?.['10']?.median_price
                                        ? `${selectedPokemon.prices.ebay.graded.psa['10'].median_price}€`
                                        : 'No Data'}
                                </Text>
                            </View>
                            
                            <View style={{ marginTop: 'auto' }}>
                                <Text style={{ color: '#9F7AEA', fontSize: 16, textShadowColor: '#000', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 2 }}>
                                    30d Avg: <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{selectedPokemon?.prices.cardmarket['30d_average']}€</Text>
                                </Text>
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

