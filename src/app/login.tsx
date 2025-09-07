import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { COLORS } from '../theme/colors';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    try {
      // Simulação de validação (pode ser substituída por backend futuramente)
      const usuarioSalvo = await AsyncStorage.getItem('usuario');
      if (!usuarioSalvo) {
        Alert.alert('Acesso negado', 'Usuário não encontrado. Faça o cadastro.');
        return;
      }

      const usuario = JSON.parse(usuarioSalvo);
      if (usuario.email !== email || usuario.senha !== senha) {
        Alert.alert('Acesso negado', 'Email ou senha incorretos.');
        return;
      }

      // Login bem-sucedido
      await AsyncStorage.setItem('usuario', JSON.stringify(usuario));
      router.push('/logado/dashboard');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      Alert.alert('Erro', 'Não foi possível fazer login.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.botao} onPress={handleLogin}>
        <Text style={styles.botaoTexto}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/cadastro')}>
        <Text style={styles.link}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', backgroundColor: COLORS.bg },
  titulo: { fontSize: 28, fontWeight: 'bold', color: COLORS.primary, marginBottom: 24, textAlign: 'center' },
  input: {
    backgroundColor: COLORS.white,
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
    color: COLORS.text,
  },
  botao: {
    backgroundColor: COLORS.accent,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  botaoTexto: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  link: { color: COLORS.primary, textAlign: 'center', textDecorationLine: 'underline' },
});
