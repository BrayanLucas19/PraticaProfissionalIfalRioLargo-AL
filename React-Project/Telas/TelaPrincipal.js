import { StyleSheet, View, FlatList, Image, ScrollView } from 'react-native'
import { Button, Card, Title, Text, IconButton, Paragraph } from 'react-native-paper'
import { useEffect, useState } from 'react';

export default function SegundaTela({ navigation }) {

    //Primeira API dos pontos turisticos do Brasil
    const [pontosDoBrasil, setPontosDoBrasil] = useState([]);

    const getPontosDoBrasil = async () => {
        try {
            const resposta = await fetch(
                'https://6478766d362560649a2dd1bf.mockapi.io/PontosTuristicosDoBrasil/'
            );
            const json = await resposta.json();
            setPontosDoBrasil(json);
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        getPontosDoBrasil();
    }, []);

    //Segunda API dos pontos turisticos de Alagoas
    const [pontosDeAlagoas, setPontosDeAlagoas] = useState([]);

    const getPontosDeAlagoas = async () => {
        try {
            const resposta = await fetch(
                'https://6478766d362560649a2dd1bf.mockapi.io/PontosTuristicosDeAlagoas/'
            );
            const json = await resposta.json();
            setPontosDeAlagoas(json);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPontosDeAlagoas();
    }, []);



    return (

        <ScrollView>
            <View style={{ alignItems: 'flex-end' }}>
                <IconButton icon={'cog'} size={24} iconColor={'black'} />
            </View>
            <View style={{ alignItems: 'center' }}>
                <Image style={{ height: 150, width: 150 }}
                    source={require('../Imagens/LogoProject.png')} />
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 5 }}>
                <Text style={{
                    fontSize: 20, marginTop: 10, marginBottom: 20, textAlign: 'center', backgroundColor: '#345D50',
                    width: '100%', paddingVertical: 7, color: 'white'
                }}>
                    Melhores pontos turisticos do Brasil
                </Text>
                <FlatList
                    horizontal={true}
                    data={pontosDoBrasil}
                    renderItem={({ item }) => (
                        <View>
                            <Card style={{ margin: 4, width: 250, height: 450 }} onPress={() =>
                                navigation.navigate('Detalhes1', { id: item.id })}>
                                <Card.Cover source={{ uri: item.imagemPontosDoBrasil }} />
                                <Card.Content>
                                    <Title style={{ textAlign: 'left', fontSize: 25, paddingTop: 1 }}>{item.nomePontosDoBrasil}</Title>

                                    <Paragraph style={{ textAlign: 'left', fontSize: 15, paddingTop: 1 }}>{item.cidadePontosDoBrasil}
                                    </Paragraph>

                                    <Paragraph style={{ textAlign: 'left', fontSize: 15, color: 'green', paddingTop: 1 }}>
                                        {item.enderecoPontosDoBrasil}
                                    </Paragraph>

                                    <Paragraph style={{ textAlign: 'left', fontSize: 21, color: '#B8860B', paddingTop: 1 }}>
                                        <IconButton icon={'star'} iconColor='#B8860B'
                                            style={{ textAlign: 'left' }} size={35}>
                                        </IconButton>
                                        {item.avaliacaoPontosDoBrasil}</Paragraph>
                                </Card.Content>

                            </Card>

                        </View>

                    )}
                />
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 5 }}>
                <Text style={{
                    fontSize: 20, marginTop: 10, marginBottom: 20, textAlign: 'center', backgroundColor: '#345D50',
                    width: '100%', paddingVertical: 7, color: 'white'
                }}>
                    Pontos turisticos de Alagoas
                </Text>
                <FlatList
                    horizontal={true}
                    data={pontosDeAlagoas}
                    renderItem={({ item }) => (
                        <View>
                            <Card style={{ margin: 4, width: 250, height: 360 }} onPress={() => navigation.navigate('Detalhes2', { id: item.id })}>
                                <Card.Cover source={{ uri: item.imagemPontosDeAlagoas }} />
                                <Card.Content>
                                    <Title style={{ textAlign: 'left', fontSize: 20, paddingTop: 1 }}>{item.nomePontosDeAlagoas}</Title>

                                    <Paragraph style={{ textAlign: 'left', fontSize: 13, paddingTop: 1 }}>{item.nomeCidadePontosDeAlagoas}
                                    </Paragraph>

                                    <Paragraph style={{ textAlign: 'left', fontSize: 13, color: 'green', paddingTop: 1 }}>
                                        {item.enderecoPontosDeAlagoas}
                                    </Paragraph>

                                    <Paragraph style={{ textAlign: 'left', fontSize: 15, color: '#B8860B', paddingTop: 1, alignItems: 'flex-end' }}>
                                        <IconButton icon={'star'} iconColor='#B8860B'
                                            style={{ textAlign: 'left' }} size={25}>
                                        </IconButton>
                                        {item.avaliacaoPontosDeAlagoas}</Paragraph>
                                </Card.Content>

                            </Card>

                        </View>

                    )}
                />
            </View>

            <View style={{ paddingTop: 50 }}></View>

        </ScrollView>

    )
}
