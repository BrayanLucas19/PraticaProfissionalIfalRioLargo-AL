import { StyleSheet, View, FlatList, Image, ScrollView } from 'react-native'
import { Appbar, TextInput, Surface, Button, Card, Title, Paragraph, Text, IconButton, Badge } from 'react-native-paper'
import { useEffect, useState } from 'react';


export default function SegundaTela({ navigation }) {
    const [maps, setMaps] = useState([]);
    const [cidadesAlagoas, setCidadesAlagoas] = useState([]);

    const getMaps = async () => {
        try {
            const resposta = await fetch(
                'https://6478766d362560649a2dd1bf.mockapi.io/Maps'
            );
            const json = await resposta.json();
            setMaps(json);
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        getMaps();
    }, []);

    const getCidadesAlagoanas = async () => {
        try {
            const resp = await fetch(
                'https://6478766d362560649a2dd1bf.mockapi.io/CidadesAlagoas'
            );
            const json = await resp.json();
            setCidadesAlagoas(json);
        } catch (error) {
            console.log(error);
        }

    };

    useEffect(() => {
        getCidadesAlagoanas();
    }, []);

    return (
        <View>
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <Image style={{ height: 150, width: 150 }}
                        source={require('../Imagens/LogoProject.png')} />
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 5 }}>
                    <Text style={{ fontSize: 20, marginTop: 10, marginBottom: 20, textAlign: 'center' }}>
                        Veja os Lugares mais visitados de Alagoas
                    </Text>
                    <FlatList
                        horizontal={true}
                        data={cidadesAlagoas}
                        renderItem={({ item }) => (
                            <View>
                                <Card style={{ margin: 4, width: 300 }} onPress={() => navigation.navigate('Detalhes', { id: item.id })}>
                                    <Card.Cover style={{ height: 250 }} source={{ uri: item.img }} />
                                    <IconButton
                                        icon='heart' iconColor='white' size={20} onPress={() => console.log('Apertei')}
                                        style={{ position: 'absolute' }} />

                                    <Card.Content>
                                        <Title style={{ textAlign: 'center' }}>{item.nome}</Title>
                                    </Card.Content>

                                </Card>

                            </View>

                        )}
                    />
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 25 }}>
                    <Text style={{ fontSize: 20, marginTop: 10, marginBottom: 10 }}>
                        Pontos Turisticos de Macéio
                    </Text>
                    <FlatList
                        horizontal={true}
                        data={maps}
                        renderItem={({ item }) => (
                            <View>
                                <Card style={{ margin: 4, width: 130 }} onPress={() => navigation.navigate('Detalhes', { id: item.id })}>
                                    <Card.Cover source={{ uri: item.Image }} />
                                    <IconButton
                                        icon='heart' iconColor='white' size={20} onPress={() => console.log('Apertei')}
                                        style={{ position: 'absolute' }} />

                                    <Card.Content>
                                        <Title style={{ textAlign: 'center', fontSize: 12 }}>{item.name}</Title>
                                    </Card.Content>

                                </Card>

                            </View>

                        )}
                    />
                </View>


            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({

    inputDePesquisa: {
        marginTop: 20,
        marginRight: 30,
        marginLeft: 30,
    },

    SurfaceMaior: {
        backgroundColor: '#7200CC',
        height: 150,
        width: 330,
        borderRadius: 20,
        alignItems: 'center',
    },

    SurfaceMenor: {
        marginTop: 14,
        marginRight: 160,
        backgroundColor: '#470080',
        height: 120,
        width: 110,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'

    }
})