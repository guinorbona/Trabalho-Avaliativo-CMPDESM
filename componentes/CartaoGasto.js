import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Cartao from './Cartao';

export default function CartaoGasto ({ descricao, valor, categoria, tipo }) {
  const eReceita = tipo === 'receita';
  const corValor = eReceita ? '#28a745' : '#dc3545';

  return (
    <Cartao style={styles.container}>
      <View style={styles.linha}>
        <Text style={styles.descricao}>{descricao}</Text>
        <Text style={[styles.valor, { color: corValor }]}>
          R$ {parseFloat(valor).toFixed(2).replace('.', ',')}
        </Text>
      </View>
      <Text style={styles.categoria}>Categoria: {categoria}</Text>
    </Cartao>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  descricao: {
    fontSize: 18,
    fontWeight: 'bold',
    flexShrink: 1,
    color: '#333',
  },
  valor: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  categoria: {
    fontSize: 14,
    color: '#666',
  },
});