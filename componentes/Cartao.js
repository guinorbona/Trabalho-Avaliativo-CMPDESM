import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Cartao ({ children, estilo }) {
  return (
    <View style={[styles.cartao, estilo]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  cartao: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});