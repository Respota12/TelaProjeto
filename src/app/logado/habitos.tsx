import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, Switch, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { COLORS } from '../../theme/colors';

export default function HabitosScreen() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [agua, setAgua] = useState(false);
  const [exercicio, setExercicio] = useState(false);
  const [sono, setSono] = useState(false);

  useEffect(() => {
    const verificarLogin = async () => {
      const dados = await AsyncStorage.getItem('usuario');
      if (!dados) {
        Alert.alert('Acesso negado', 'Você precisa estar logado.');
        router.push('/login');
      } else {
        const usuario = JSON.parse(dados);
        setNome(usuario.nome);
      }
    };
    verificarLogin();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('usuario');
    Alert.alert('Logout', 'Você saiu da sua conta.');
    router.push('/login');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogout} style={styles.logout}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>

      <Text style={styles.boasVindas}>Olá, {nome}! </Text>
      <Text style={styles.subtitulo}>Como estão seus hábitos hoje?</Text>

      <ScrollView contentContainerStyle={styles.cards}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}> Hidratação</Text>
          <Text style={styles.cardText}>Você bebeu água suficiente?</Text>
          <Switch value={agua} onValueChange={setAgua} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}> Atividade Física</Text>
          <Text style={styles.cardText}>Fez algum exercício hoje?</Text>
          <Switch value={exercicio} onValueChange={setExercicio} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}> Qualidade do Sono</Text>
          <Text style={styles.cardText}>Dormiu bem esta noite?</Text>
          <Switch value={sono} onValueChange={setSono} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: COLORS.bg },
  boasVindas: { fontSize: 20, fontWeight: 'bold', marginBottom: 8, color: COLORS.primary },
  subtitulo: { fontSize: 16, marginBottom: 20, color: COLORS.text },
  cards: { paddingBottom: 40 },
  card: {
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  cardText: { fontSize: 14, color: COLORS.text, marginBottom: 8 },
  logout: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: COLORS.accent,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    zIndex: 10,
  },
  logoutText: { color: '#fff', fontWeight: 'bold' },
});
