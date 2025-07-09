import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavegadorApp from './navegacao/NavegadorApp';
import { ProvedorGastos } from './contexto/ContextoGastos';

export default function App() {
  return (
    <SafeAreaProvider>
      <ProvedorGastos>
        <NavigationContainer>
          <NavegadorApp />
        </NavigationContainer>
      </ProvedorGastos>
    </SafeAreaProvider>
  );
}