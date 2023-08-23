import { useEffect, useState } from "react";
import { Text, Button, Card, TextInput, Title, Paragraph } from "react-native-paper";
import { View, FlatList, ScrollView } from "react-native";

export default function TelaDePesquisa() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await fetch(`https://6478766d362560649a2dd1bf.mockapi.io/PontosTuristicosDoBrasil${searchTerm}`);
            const data = await response.json();
            setResults(data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Search..."
                value={searchTerm}
                onChangeText={setSearchTerm}
            />
            <Button title="Search" onPress={handleSearch} />
            <FlatList
                data={results}
                renderItem={({ item }) => <Text>{item.nomePontosDoBrasil}</Text>}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};
