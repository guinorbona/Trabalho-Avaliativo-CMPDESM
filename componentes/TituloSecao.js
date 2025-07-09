import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function TituloSecao ({ titulo, estilo }) {
  return (
    <Text style={[styles.titulo, estilo]}>{titulo}</Text>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
});