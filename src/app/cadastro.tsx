import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from '../theme/colors';
import * as Yup from 'yup';

interface Usuario {
  nome: string;
  email: string;
  senha: string;
}

export default function CadastroScreen() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erros, setErros] = useState<Record<string, string>>({});

  const schema = Yup.object().shape({
    nome: Yup.string().required('Nome obrigatório'),
    email: Yup.string().email('Email inválido').required('Email obrigatório'),
    senha: Yup.string().min(6, 'Mínimo 6 caracteres').required('Senha obrigatória'),
  });

  const handleCadastro = async () => {
    try {
      await schema.validate({ nome, email, senha }, { abortEarly: false });

      const usuario: Usuario = { nome, email, senha };
      await AsyncStorage.setItem('usuario', JSON.stringify(usuario));

      Alert.alert('Cadastro realizado', `Bem-vindo, ${nome}!`);
      router.push('/login');
    } catch (err: unknown) {
      if (err instanceof Yup.ValidationError) {
        const novoErros: Record<string, string> = {};
        err.inner.forEach((e: Yup.ValidationError) => {
          if (e.path) novoErros[e.path] = e.message;
        });
        setErros(novoErros);
      } else {
        Alert.alert('Erro inesperado', 'Não foi possível realizar o cadastro.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      {erros.nome && <Text style={styles.error}>{erros.nome}</Text>}

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      {erros.email && <Text style={styles.error}>{erros.email}</Text>}

      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        style={styles.input}
        secureTextEntry
      />
      {erros.senha && <Text style={styles.error}>{erros.senha}</Text>}

      <Text style={styles.botao} onPress={handleCadastro}>Cadastrar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: {
    borderWidth: 1,
    borderColor: COLORS.accent,
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
  },
  error: { color: 'red', marginBottom: 8 },
  botao: {
    backgroundColor: COLORS.accent,
    color: '#fff',
    textAlign: 'center',
    padding: 12,
    borderRadius: 8,
    fontWeight: 'bold',
  },
});
