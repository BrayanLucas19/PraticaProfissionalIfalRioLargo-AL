import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';

function TelaDeCadastro({ navigation }) {
    return (
        <View>

            <View style={{ alignItems: 'center', paddingTop: 50, paddingBottom: 40 }}>
                <Text style={{ fontSize: 30, alignItems: 'center' }}
                    textColor='#345D5'>Cadastre-se</Text>
            </View>

            <View style={espacamento.inputs}>
                <TextInput label='Nome de Usuário' mode='outlined'
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

            <View style={espacamento.inputs}>
                <TextInput label='Senha' mode='outlined'
                    outlineStyle={styles.inputs}
                    outlineColor='#345D50' activeOutlineColor='#345D50'>
                </TextInput>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
                <Button
                    mode='containe'
                    textColor='white'
                    fontSize='40'
                    style={{ backgroundColor: '#345D50', width: 300 }}
                    onPress={() => navigation.navigate('TelaDeLogin')}
                >Cadastrar</Button>
            </View>

        </View>
    );
}

export default TelaDeCadastro;

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
        marginTop: 20,
        paddingLeft: 30,
        paddingRight: 30
    },

    btn: {
        paddingTop: 20,
    }
})