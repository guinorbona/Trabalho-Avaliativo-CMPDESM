import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ContextoGastos = createContext();

export const ProvedorGastos = ({ children }) => {
  const [gastos, setGastos] = useState([]);
  const [perfil, setPerfil] = useState({ nome: '', email: '', uriAvatar: null });
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const gastosArmazenados = await AsyncStorage.getItem('@gestorDeGastos:gastos');
        if (gastosArmazenados) {
          setGastos(JSON.parse(gastosArmazenados));
        }
        const perfilArmazenado = await AsyncStorage.getItem('@gestorDeGastos:perfil');
        if (perfilArmazenado) {
          setPerfil(JSON.parse(perfilArmazenado));
        }
      } catch (error) {
        console.error('Erro ao carregar dados do AsyncStorage:', error);
      } finally {
        setCarregado(true);
      }
    };
    carregarDados();
  }, []);

  useEffect(() => {
    if (carregado) {
      const salvarGastos = async () => {
        try {
          console.log('ContextoGastos: Salvando gastos no AsyncStorage:', gastos);
          await AsyncStorage.setItem('@gestorDeGastos:gastos', JSON.stringify(gastos));
          console.log('Gastos salvos no AsyncStorage.');
        } catch (error) {
          console.error('Erro ao salvar gastos no AsyncStorage:', error);
        }
      };
      salvarGastos();
    }
  }, [gastos, carregado]);

  useEffect(() => {
    if (carregado) {
      const salvarPerfil = async () => {
        try {
          console.log('ContextoGastos: Salvando perfil no AsyncStorage:', perfil);
          await AsyncStorage.setItem('@gestorDeGastos:perfil', JSON.stringify(perfil));
          console.log('Perfil salvo no AsyncStorage.');
        } catch (error) {
          console.error('Erro ao salvar perfil no AsyncStorage:', error);
        }
      };
      salvarPerfil();
    }
  }, [perfil, carregado]); 

  const adicionarGasto = (novoGasto) => {
    console.log('ContextoGastos: Adicionando novo gasto:', novoGasto);
    setGastos((gastosAnteriores) => [{ ...novoGasto, id: Date.now().toString() }, ...gastosAnteriores]);
  };

  const atualizarPerfil = (novoPerfil) => {
    setPerfil(novoPerfil);
  };

  return (
    <ContextoGastos.Provider value={{ gastos, adicionarGasto, perfil, atualizarPerfil, carregado }}>
      {children}
    </ContextoGastos.Provider>
  );
};

export const usarGastos = () => {
  const contexto = useContext(ContextoGastos);
  if (contexto === undefined) {
    throw new Error('usarGastos deve ser usado dentro de um ProvedorGastos');
  }
  return contexto;
};