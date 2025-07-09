import React, { useState } from 'react';
import { View, StyleSheet, Alert, ScrollView, Platform, KeyboardAvoidingView } from 'react-native';
import Cabecalho from '../componentes/Cabecalho';
import CampoEntrada from '../componentes/CampoEntrada';
import Botao from '../componentes/Botao';
import SeletorCustomizado from '../componentes/SeletorCustomizado';
import RodapeApp from '../componentes/RodapeApp';
import { usarGastos } from '../contexto/ContextoGastos';

export default function TelaNovoGasto ({ navigation }) {
  const { adicionarGasto } = usarGastos();
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [categoria, setCategoria] = useState('Outros');
  const [tipo, setTipo] = useState('despesa');

  const opcoesTipo = [
    { label: 'Despesa', value: 'despesa' },
    { label: 'Receita', value: 'receita' },
  ];

  const opcoesCategoria = [
    { label: 'Alimentação', value: 'Alimentacao' },
    { label: 'Transporte', value: 'Transporte' },
    { label: 'Moradia', value: 'Moradia' },
    { label: 'Lazer', value: 'Lazer' },
    { label: 'Saúde', value: 'Saude' },
    { label: 'Educação', value: 'Educacao' },
    { label: 'Salário', value: 'Salario' },
    { label: 'Investimentos', value: 'Investimentos' },
    { label: 'Outros', value: 'Outros' },
  ];

  const lidarAdicionarGasto = () => {
    if (!descricao.trim() || !valor.trim()) {
      Alert.alert('Erro', 'Por favor, preencha a descrição e o valor.');
      return;
    }

    const valorAnalisado = parseFloat(valor.replace(',', '.'));
    if (isNaN(valorAnalisado) || valorAnalisado <= 0) {
      Alert.alert('Erro', 'Por favor, insira um valor numérico válido e positivo.');
      return;
    }

    const gastoParaAdicionar = {
      descricao,
      valor: tipo === 'despesa' ? -valorAnalisado : valorAnalisado,
      categoria,
      tipo,
      data: new Date().toISOString(),
    };

    console.log('TelaNovoGasto: Objeto a ser adicionado:', gastoParaAdicionar);
    adicionarGasto(gastoParaAdicionar);
    Alert.alert('Sucesso', `${tipo === 'despesa' ? 'Despesa' : 'Receita'} adicionada com sucesso!`);
    setDescricao('');
    setValor('');
    setCategoria('Outros');
    setTipo('despesa');
    navigation.navigate('Histórico');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
    >
      <Cabecalho titulo="Novo Gasto" />
      <ScrollView contentContainerStyle={styles.container}>
        <CampoEntrada
          rotulo="Descrição do Gasto/Receita"
          placeholder="Ex: Aluguel, Salário, Conta de Luz"
          value={descricao}
          onChangeText={setDescricao}
        />
        <CampoEntrada
          rotulo="Valor"
          placeholder="Ex: 1500.00"
          value={valor}
          onChangeText={(texto) => setValor(texto.replace(/[^0-9.,]/g, ''))}
          keyboardType="numeric"
        />
        <SeletorCustomizado
          rotulo="Tipo:"
          valorSelecionado={tipo}
          onValueChange={(valorItem) => setTipo(valorItem)}
          items={opcoesTipo}
        />
        <SeletorCustomizado
          rotulo="Categoria:"
          valorSelecionado={categoria}
          onValueChange={(valorItem) => setCategoria(valorItem)}
          items={opcoesCategoria}
        />
        <Botao titulo="Adicionar" aoPressionar={lidarAdicionarGasto} />
      </ScrollView>
      <RodapeApp />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
    paddingBottom: 80,
  },
});