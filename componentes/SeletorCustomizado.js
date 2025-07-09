import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function SeletorCustomizado ({ rotulo, valorSelecionado, onValueChange, items, estilo }) {
  const itensParaRenderizar = items || [];

  return (
    <View style={[styles.container, estilo]}>
      {rotulo && <Text style={styles.rotulo}>{rotulo}</Text>}
      <View style={styles.wrapperSeletor}>
        <Picker
          selectedValue={valorSelecionado}
          onValueChange={onValueChange}
          style={[
            styles.seletor,
            Platform.OS === 'ios' && { color: '#333' }
          ]} 
          itemStyle={Platform.OS === 'ios' ? { color: '#333', fontSize: 16 } : {}} 
        >
          {itensParaRenderizar.map((item) => (
            <Picker.Item key={item.value} label={item.label} value={item.value} />
          ))}
        </Picker>
      </View>
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
  wrapperSeletor: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    overflow: 'hidden',
    justifyContent: 'center',
    minHeight: 50,
  },
  seletor: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
});