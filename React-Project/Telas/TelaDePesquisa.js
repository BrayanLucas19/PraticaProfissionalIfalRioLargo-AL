import { useEffect, useState } from "react";
import { Text, Button, Card, TextInput, IconButton, Title, } from "react-native-paper";
import { View, FlatList, ScrollView } from "react-native";

export default function TelaDePesquisa() {
    const [usuarios, setUsuarios] = useState([]);

    const getUsuarios = async () => {
        try {
            const resposta = await fetch(
                'https://6478766d362560649a2dd1bf.mockapi.io/Maps'
            );
            const json = await resposta.json();
            setUsuarios(json);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUsuarios();
    }, []);
    return (
        <ScrollView>
            <View style={{ marginTop: 35, alignItems: 'center' }}>
                <TextInput mode='outlined' placeholder="Pesquisar"
                    style={{ textAlign: 'left', width: 350 }}
                    outlineStyle={{ borderWidth: 2, borderRadius: 20, justifyContent: 'center', height: 40, alignSelf: 'center' }}>
                </TextInput>
                <View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 25 }}>
                        <FlatList
                            data={usuarios}
                            numColumns={2}
                            renderItem={({ item }) => (
                                <View>
                                    <Card style={{ margin: 4, width: 150 }} onPress={() => navigation.navigate('', { id: item.id })}>
                                        <Card.Cover style={{ height: 150 }} source={{ uri: item.imgPraiasDoBrasil }} />
                                        <IconButton
                                            icon='heart' iconColor='white' size={20} onPress={() => console.log('Apertei')}
                                            style={{ position: 'absolute' }} />

                                        <Card.Content>
                                            <Title style={{ textAlign: 'center', fontSize: 13 }}>{item.nomesPraiasDoBrasil}</Title>
                                        </Card.Content>

                                    </Card>

                                    <Card style={{ margin: 4, width: 150 }} onPress={() => navigation.navigate('Detalhes', { id: item.id })}>
                                        <Card.Cover style={{ height: 150 }} source={{ uri: item.imgCidadesDoBrasil }} />
                                        <IconButton
                                            icon='heart' iconColor='white' size={20} onPress={() => console.log('Apertei')}
                                            style={{ position: 'absolute' }} />

                                        <Card.Content>
                                            <Title style={{ textAlign: 'center', fontSize: 13 }}>{item.nomesCidadesDoBrasil}</Title>
                                        </Card.Content>

                                    </Card>

                                    <Card style={{ margin: 4, width: 150 }} onPress={() => navigation.navigate('Detalhes', { id: item.id })}>
                                        <Card.Cover style={{ height: 150 }} source={{ uri: item.imgLugaresDeMaceio }} />
                                        <IconButton
                                            icon='heart' iconColor='white' size={20} onPress={() => console.log('Apertei')}
                                            style={{ position: 'absolute' }} />

                                        <Card.Content>
                                            <Title style={{ textAlign: 'center', fontSize: 13 }}>{item.nomesLugaresDeMaceio}</Title>
                                        </Card.Content>

                                    </Card>

                                </View>

                            )}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>

    )

}