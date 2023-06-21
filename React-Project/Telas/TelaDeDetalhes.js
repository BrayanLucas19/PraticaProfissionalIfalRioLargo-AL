import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Button, Card, Paragraph, Title } from 'react-native-paper';

export default function TelaDeDetalhes({ route }) {
    const id = route?.params?.id;
    const [maps, setMaps] = useState({});

    const getMaps = async (userId) => {
        try {
            const resposta = await fetch(
                'https://6398750e044fa481d69e3195.mockapi.io/Maps/' + userId
            );
            const json = await resposta.json();
            setMaps(json);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMaps(id);
    }, [id]);

    return (
        <View style={{ alignItems: 'center' }}>
            {id ? (

                <View style={{ alignItems: 'center', width: 350 }}>
                    <Card style={{ alignItems: 'center', marginTop: 40 }}>
                        <Card.Cover style={{ width: 350, height: 450, borderBottomEndRadius: 0 }} source={{ uri: maps.imgPraiasDoBrasil }} />

                        <Card.Content style={{ marginTop: 20 }}>
                            <Title>{maps.nomesPraiasDoBrasil}</Title>
                            <Paragraph></Paragraph>
                        </Card.Content>
                    </Card>
                </View>
            ) : (
                <View>
                    <Text>Cadê o id?</Text>
                </View>
            )}

        </View>

    );
}
