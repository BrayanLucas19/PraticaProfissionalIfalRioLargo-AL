import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaDeLogin from './Telas/TeladeLogin';
import TelaPrincipal from './Telas/TelaPrincipal';
import TelaDePesquisa from './Telas/TelaDePesquisa';
import TelaDePerfil from './Telas/TelaDePerfil';
import TelaDeCadastro from './Telas/TelaDeCadastro';
import TelaDeDetalhes from './Telas/TelaDeDetalhes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Drawer } from 'react-native-paper';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

function MyTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Tela Principal' component={TelaPrincipal} options={{ headerShown: false }} />
      <Tab.Screen name='Pesquisa' component={TelaDePesquisa} options={{ headerShown: false }} />
      <Tab.Screen name='Perfil' component={TelaDePerfil} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='TelaDeLogin'>
      <Stack.Screen name='TelaDeLogin' component={TelaDeLogin} options={{ headerShown: false }} />
      <Stack.Screen name='TelaPrincipal' component={MyTab} options={{ headerShown: false }} />
      <Stack.Screen name='TelaDeCadastro' component={TelaDeCadastro} options={{ title: false, headerTransparent: true }} />
      <Stack.Screen name='Detalhes' component={TelaDeDetalhes} options={{ title: false, headerTransparent: true }} />
    </Stack.Navigator>
  );
}
