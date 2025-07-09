import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RodapeApp () {
  return (
    <View style={styles.containerRodape}>
      <Text style={styles.textoRodape}>Meu Gestor de Gastos © 2025</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerRodape: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  textoRodape: {
    fontSize: 12,
    color: '#666',
  },
});