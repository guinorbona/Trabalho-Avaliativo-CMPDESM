import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native';

export default function Cabecalho ({ titulo }) {
  return (
    <SafeAreaView style={styles.areaSegura}>
      <View style={styles.container}>
        <Text style={styles.titulo}>{titulo}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  areaSegura: {
    backgroundColor: '#007BFF',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  container: {
    width: '100%',
    height: 60,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});