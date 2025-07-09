import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Botao ({ titulo, aoPressionar, estilo, estiloTexto, desabilitado }) {
  return (
    <TouchableOpacity
      style={[styles.botao, estilo, desabilitado && styles.botaoDesabilitado]}
      onPress={aoPressionar}
      disabled={desabilitado}
      activeOpacity={0.7}
    >
      <Text style={[styles.textoBotao, estiloTexto]}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  botaoDesabilitado: {
    backgroundColor: '#a0c9fa',
    opacity: 0.7,
  },
});