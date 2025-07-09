import React from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import Cabecalho from '../componentes/Cabecalho';
import CartaoGasto from '../componentes/CartaoGasto';
import RodapeApp from '../componentes/RodapeApp';
import { usarGastos } from '../contexto/ContextoGastos';

export default function TelaHistorico () {
  const { gastos, carregado } = usarGastos();

  if (!carregado) {
    return (
      <View style={styles.containerCarregamento}>
        <ActivityIndicator size="large" color="#007BFF" />
        <Text style={styles.textoCarregamento}>Carregando histórico...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Cabecalho titulo="Histórico de Gastos" />
      {gastos.length === 0 ? (
        <View style={styles.containerVazio}>
          <Text style={styles.textoVazio}>Nenhum gasto ou receita adicionado ainda.</Text>
          <Text style={styles.textoVazio}>Use a aba "Novo Gasto" para começar!</Text>
        </View>
      ) : (
        <FlatList
          data={gastos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CartaoGasto
              descricao={item.descricao}
              valor={item.valor}
              categoria={item.categoria}
              tipo={item.tipo}
            />
          )}
          contentContainerStyle={styles.conteudoLista}
        />
      )}
      <RodapeApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  containerCarregamento: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  textoCarregamento: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  conteudoLista: {
    padding: 20,
    paddingBottom: 80,
  },
  containerVazio: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textoVazio: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
});