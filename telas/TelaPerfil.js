import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import Cabecalho from '../componentes/Cabecalho';
import CampoEntrada from '../componentes/CampoEntrada';
import Botao from '../componentes/Botao';
import Avatar from '../componentes/Avatar';
import RodapeApp from '../componentes/RodapeApp';
import TituloSecao from '../componentes/TituloSecao';
import { usarGastos } from '../contexto/ContextoGastos';
import * as ImagePicker from 'expo-image-picker';

export default function TelaPerfil () {
  const { perfil, atualizarPerfil } = usarGastos();
  const [nome, setNome] = useState(perfil.nome);
  const [email, setEmail] = useState(perfil.email);
  const [uriAvatar, setUriAvatar] = useState(perfil.uriAvatar);

  useEffect(() => {
    setNome(perfil.nome);
    setEmail(perfil.email);
    setUriAvatar(perfil.uriAvatar);
  }, [perfil]);

  const lidarSalvarPerfil = () => {
    atualizarPerfil({ nome, email, uriAvatar });
    Alert.alert('Sucesso', 'Perfil salvo com sucesso!');
  };

  const selecionarImagem = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão Necessária', 'Precisamos da permissão para acessar sua galeria para carregar a imagem.');
      return;
    }

    let resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!resultado.canceled) {
      setUriAvatar(resultado.assets[0].uri);
    }
  };

  const carregarAvatarAleatorio = () => {
    const idAleatorio = Math.floor(Math.random() * 1000) + 1;
    setUriAvatar(`https://picsum.photos/200?random=${idAleatorio}`);
  };

  return (
    <View style={styles.container}>
      <Cabecalho titulo="Meu Perfil" />
      <ScrollView contentContainerStyle={styles.conteudo}>
        <TituloSecao titulo="Informações do Perfil" /> 
        <View style={styles.containerAvatar}>
          <Avatar uri={uriAvatar} size={120} />
          <View style={styles.botoesAvatar}>
            <Botao titulo="Carregar da Galeria" aoPressionar={selecionarImagem} estilo={styles.botaoAvatar} estiloTexto={styles.textoBotaoAvatar} />
            <Botao titulo="Avatar Aleatório" aoPressionar={carregarAvatarAleatorio} estilo={styles.botaoAvatar} estiloTexto={styles.textoBotaoAvatar} />
          </View>
        </View>
        <CampoEntrada 
          rotulo="Nome"
          placeholder="Seu nome"
          value={nome}
          onChangeText={setNome}
        />
        <CampoEntrada
          rotulo="E-mail"
          placeholder="seu.email@exemplo.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Botao titulo="Salvar Perfil" aoPressionar={lidarSalvarPerfil} estilo={styles.botaoSalvar} />
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
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    paddingBottom: 80,
  },
  containerAvatar: {
    marginBottom: 30,
    alignItems: 'center',
  },
  botoesAvatar: {
    flexDirection: 'row',
    marginTop: 15,
    gap: 10,
  },
  botaoAvatar: {
    backgroundColor: '#6c757d',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  textoBotaoAvatar: {
    fontSize: 14,
  },
  botaoSalvar: {
    marginTop: 20,
    width: '100%',
  },
});