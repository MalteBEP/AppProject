import React, { useState, useRef } from "react";
import { View, Button, Text, TextInput, Image, FlatList, ScrollView } from "react-native";

export default function PortfolioView() {

    const [searchInput, setSearchInput] = useState('');
    const [data, SetData] = useState<any[]>([]);

    const fetchData = async () => {
        const resp = await fetch(`http://localhost:5103/pokemon/cards/search?name=${encodeURIComponent(searchInput)}&sort=relevance`);
        const json = await resp.json();
        SetData(json.data);
    };


    return (

        <View>
            <TextInput
                placeholder="Enter Pokemon name"
                value={searchInput}
                onChangeText={setSearchInput}/>
            <Button title="Search" onPress={fetchData} />
            <FlatList
                data={data}
                keyExtractor={({ name_numbered }, index) => name_numbered}
                renderItem={({ item }) => (<Text>{item.name_numbered}</Text>)}/>
        </View>
    );
}
