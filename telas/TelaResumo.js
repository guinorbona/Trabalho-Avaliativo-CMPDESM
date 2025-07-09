import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Cabecalho from '../componentes/Cabecalho';
import ResumoFinanceiro from '../componentes/ResumoFinanceiro';
import Cartao from '../componentes/Cartao';
import RodapeApp from '../componentes/RodapeApp';
import TituloSecao from '../componentes/TituloSecao';
import { usarGastos } from '../contexto/ContextoGastos';

export default function TelaResumo () {
  const { gastos } = usarGastos();

  const totalDespesas = gastos
    .filter((item) => item.tipo === 'despesa')
    .reduce((soma, item) => soma + Math.abs(item.valor), 0);

  const totalReceitas = gastos
    .filter((item) => item.tipo === 'receita')
    .reduce((soma, item) => soma + item.valor, 0);

  const saldo = totalReceitas - totalDespesas;

  const despesasPorCategoria = gastos
    .filter(e => e.tipo === 'despesa')
    .reduce((acc, gasto) => {
      acc[gasto.categoria] = (acc[gasto.categoria] || 0) + Math.abs(gasto.valor);
      return acc;
    }, {});

  return (
    <View style={styles.container}>
      <Cabecalho titulo="Resumo" />
      <ScrollView contentContainerStyle={styles.conteudo}>
        <ResumoFinanceiro
          totalDespesas={totalDespesas}
          totalReceitas={totalReceitas}
          saldo={saldo}
        />

        {Object.keys(despesasPorCategoria).length > 0 && (
          <Cartao style={styles.cartaoCategoria}> 
            <TituloSecao titulo="Despesas por Categoria" estilo={styles.tituloCategoria} />
            {Object.entries(despesasPorCategoria)
              .sort(([, a], [, b]) => b - a)
              .map(([categoria, quantia]) => (
                <View key={categoria} style={styles.itemCategoria}>
                  <Text style={styles.textoItemCategoria}>{categoria}:</Text> 
                  <Text style={styles.valorItemCategoria}>R$ {quantia.toFixed(2).replace('.', ',')}</Text> 
                </View>
              ))}
          </Cartao>
        )}
      </ScrollView>
      <RodapeApp /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  conteudo: {
    padding: 20,
    paddingBottom: 80,
  },
  cartaoCategoria: {
    marginTop: 20,
    padding: 15,
  },
  tituloCategoria: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'left',
  },
  itemCategoria: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  textoItemCategoria: {
    fontSize: 16,
    color: '#555',
  },
  valorItemCategoria: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#dc3545',
  },
});