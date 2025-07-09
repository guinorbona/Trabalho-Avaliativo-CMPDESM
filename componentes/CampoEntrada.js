import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

export default function CampoEntrada ({ rotulo, estilo, ...rest }) {
  return (
    <View style={styles.container}>
      {rotulo && <Text style={styles.rotulo}>{rotulo}</Text>}
      <TextInput style={[styles.entrada, estilo]} {...rest} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 15,
  },
  rotulo: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  entrada: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#333',
  },
});