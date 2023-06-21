import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

function TelaDeLogin({ navigation }) {
    return (
        <View>
            <View style={{ alignItems: 'center' }}>
                <Image style={{ width: 250, height: 250 }}
                    source={require('../Imagens/LogoProject.png')} />
            </View>
            <View style={espacamento.inputs}>
                <TextInput label='Email' mode='outlined'
                    outlineStyle={styles.inputs}
                    outlineColor='#345D50' activeOutlineColor='#345D50'>
                </TextInput>
            </View>

            <View style={espacamento.inputs}>
                <TextInput label='Senha' mode='outlined'
                    outlineStyle={styles.inputs}
                    outlineColor='#345D50' activeOutlineColor='#345D50'>
                </TextInput>
            </View>

            <View style={espacamento.btn}>
                <View style={styles.alinhamentoCentral}>
                    <Button
                        mode='contained'
                        textColor='white' buttonColor='#345D50'
                        onPress={() => navigation.navigate('TelaPrincipal')}
                        style={{ height: 40, width: 220 }}>
                        <Text style={{ fontSize: 18, justifyContent: 'center', textAlign: 'center' }}>
                            Entrar</Text>
                    </Button>
                </View>
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 18 }}>
                <View style={{ borderWidth: 0.5, borderColor: '#DCDCDC', width: 400 }}></View>
            </View>

            <View style={{ paddingTop: 20, alignItems: 'center' }}>
                <Text style={{ fontSize: 15 }}
                    onPress={() => navigation.navigate('TelaDeCadastro')}
                >Caso não tenha se cadastrado Clicke Aqui</Text>
            </View>

        </View>
    )
}

export default TelaDeLogin;

const styles = StyleSheet.create({
    inputs: {
        borderWidth: 2.2,
        borderRadius: 5,
    },

    alinhamentoCentral: {
        alignItems: 'center',
        justifyContent: 'center'
    },

})

const espacamento = StyleSheet.create({
    inputs: {
        paddingTop: 15,
        paddingLeft: 30,
        paddingRight: 30
    },

    btn: {
        paddingTop: 20,
    }
})