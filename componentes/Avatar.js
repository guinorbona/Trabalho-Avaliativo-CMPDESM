import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Avatar ({ uri, size = 100, style }) {
  const fonteImagem = uri ? { uri } : require('../assets/images/placeholder.png');
  return (
    <View style={[styles.container, { width: size, height: size, borderRadius: size / 2 }, style]}>
      <Image source={fonteImagem} style={[styles.imagem, { width: size, height: size, borderRadius: size / 2 }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#007BFF',
  },
  imagem: {
    resizeMode: 'cover',
  },
});