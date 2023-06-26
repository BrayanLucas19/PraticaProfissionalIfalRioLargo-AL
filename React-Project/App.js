import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TelaDeLogin from './Telas/TeladeLogin';
import TelaPrincipal from './Telas/TelaPrincipal';
import TelaDePesquisa from './Telas/TelaDePesquisa';
import TelaDePerfil from './Telas/TelaDePerfil';
import TelaDeCadastro from './Telas/TelaDeCadastro';
import TelaDeDetalhes from './Telas/TelaDeDetalhes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#345D50'
        }
      }}>
      <Tab.Screen name='Tela Principal' component={TelaPrincipal}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return < Ionicons name='home' color={'white'} size={size} />
            }
            return < Ionicons name='home-outline' color={'gray'} size={size} />
          }
        }} />
      <Tab.Screen name='Pesquisa' component={TelaDePesquisa}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return < Ionicons name='search' color={'white'} size={size} />
            }
            return < Ionicons name='search-outline' color={'gray'} size={size} />
          }
        }} />
      <Tab.Screen name='Perfil' component={TelaDePerfil}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return < Ionicons name='person' color={'white'} size={size} />
            }
            return < Ionicons name='person-outline' color={'gray'} size={size} />
          }
        }} />
      <Tab.Screen name='Detalhes' component={TelaDeDetalhes} options={{ title: false, headerTransparent: true }} />
    </Tab.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='TelaDeLogin'>
      <Stack.Screen name='TelaDeLogin' component={TelaDeLogin} options={{ headerShown: false }} />
      <Stack.Screen name='TelaPrincipal' component={MyTab} options={{ headerShown: false }} />
      <Stack.Screen name='TelaDeCadastro' component={TelaDeCadastro} options={{ title: false, headerTransparent: true }} />
    </Stack.Navigator>
  );
}
