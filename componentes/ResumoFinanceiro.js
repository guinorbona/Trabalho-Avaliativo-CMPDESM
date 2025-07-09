import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Cartao from './Cartao';

export default function ResumoFinanceiro ({ totalDespesas, totalReceitas, saldo }) {
  const corSaldo = saldo >= 0 ? '#28a745' : '#dc3545';

  return (
    <Cartao style={styles.container}>
      <Text style={styles.titulo}>Resumo Financeiro</Text>
      <View style={styles.linhaResumo}>
        <Text style={styles.rotulo}>Total Despesas:</Text>
        <Text style={styles.valorDespesa}>R$ {parseFloat(totalDespesas).toFixed(2).replace('.', ',')}</Text>
      </View>
      <View style={styles.linhaResumo}>
        <Text style={styles.rotulo}>Total Receitas:</Text>
        <Text style={styles.valorReceita}>R$ {parseFloat(totalReceitas).toFixed(2).replace('.', ',')}</Text>
      </View>
      <View style={styles.divisor} />
      <View style={styles.linhaResumo}>
        <Text style={styles.rotulo}>Saldo Final:</Text>
        <Text style={[styles.valorSaldo, { color: corSaldo }]}>
          R$ {parseFloat(saldo).toFixed(2).replace('.', ',')}
        </Text>
      </View>
    </Cartao>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 15,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  linhaResumo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  rotulo: {
    fontSize: 16,
    color: '#555',
  },
  valorDespesa: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#dc3545',
  },
  valorReceita: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#28a745',
  },
  divisor: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  valorSaldo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});