import { useEffect, useState } from "react";
import { Text, Button, Card, TextInput, IconButton, Title, Paragraph } from "react-native-paper";
import { View, FlatList, ScrollView } from "react-native";
import axios from "axios";

export default function TelaDePesquisa() {
    //Juntar as APIs
    const [combinedData, setCombinedData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response1 = await axios.get('https://6478766d362560649a2dd1bf.mockapi.io/PontosTuristicosDoBrasil');
                const response2 = await axios.get('https://6478766d362560649a2dd1bf.mockapi.io/PontosTuristicosDeAlagoas');

                // Combine os dados das duas APIs em uma única constante
                const combinedResults = [...response1.data, ...response2.data];

                setCombinedData(combinedResults);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <ScrollView>
            <View style={{ marginTop: 35, alignItems: 'center' }}>
                <TextInput mode='outlined' placeholder="Pesquisar"
                    style={{ textAlign: 'left', width: 350 }}
                    outlineStyle={{ borderWidth: 2, borderRadius: 20, justifyContent: 'center', height: 40, alignSelf: 'center' }}>
                </TextInput>

                <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 25 }}>
                    <FlatList
                        numColumns={2}
                        data={combinedData}
                        renderItem={({ item }) => (
                            <View>
                                <Card style={{ width: 150, height: 150 }} onPress={() =>
                                    navigation.navigate('Detalhes1', { id: item.id })}>
                                    <Card.Cover source={{ uri: item.imagemPontosDoBrasil }} />
                                    <Card.Content>
                                        <Title style={{ textAlign: 'left', fontSize: 15, marginTop: 1 }}>{item.nomePontosDoBrasil}</Title>

                                        <Paragraph style={{ textAlign: 'left', fontSize: 12, color: '#B8860B', marginTop: 1 }}>
                                            <IconButton icon={'star'} iconColor='#B8860B'
                                                style={{ textAlign: 'left' }} size={20}>
                                            </IconButton>
                                            {item.avaliacaoPontosDoBrasil}</Paragraph>
                                    </Card.Content>

                                </Card>

                                <Card style={{ marginHorizontal: 10, paddingVertical: 10, width: 150, height: 150 }} onPress={() =>
                                    navigation.navigate('Detalhes1', { id: item.id })}>
                                    <Card.Cover source={{ uri: item.imagemPontosDeAlagoas }} />
                                    <Card.Content>
                                        <Title style={{ textAlign: 'left', fontSize: 15, marginTop: 1 }}>{item.nomePontosDeAlagoas}</Title>

                                        <Paragraph style={{ textAlign: 'left', fontSize: 12, color: '#B8860B', marginTop: 1 }}>
                                            <IconButton icon={'star'} iconColor='#B8860B'
                                                style={{ textAlign: 'left' }} size={20}>
                                            </IconButton>
                                            {item.avaliacaoPontosDoBrasil}</Paragraph>
                                    </Card.Content>

                                </Card>

                            </View>

                        )}
                    />
                </View>

                <View style={{ paddingTop: 50 }}></View>
            </View>

        </ScrollView>

    )

}