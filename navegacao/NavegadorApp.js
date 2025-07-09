import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TelaResumo from '../telas/TelaResumo';
import TelaNovoGasto from '../telas/TelaNovoGasto';
import TelaHistorico from '../telas/TelaHistorico';
import TelaPerfil from '../telas/TelaPerfil';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function PilhaHistorico() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Historico" component={TelaHistorico} />
    </Stack.Navigator>
  );
}

export default function NavegadorApp () {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let nomeIcone;

          if (route.name === 'Resumo') {
            nomeIcone = focused ? 'pie-chart' : 'pie-chart-outline';
          } else if (route.name === 'Novo Gasto') {
            nomeIcone = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Histórico') {
            nomeIcone = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Perfil') {
            nomeIcone = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={nomeIcone} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007BFF',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: {
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom + 5,
        }
      })}
    >
      <Tab.Screen name="Resumo" component={TelaResumo} />
      <Tab.Screen name="Novo Gasto" component={TelaNovoGasto} />
      <Tab.Screen name="Histórico" component={PilhaHistorico} />
      <Tab.Screen name="Perfil" component={TelaPerfil} />
    </Tab.Navigator>
  );
};