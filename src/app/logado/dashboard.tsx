import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { LineChart } from 'react-native-chart-kit';
import { COLORS } from '../../theme/colors';

export default function DashboardScreen() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [habitosSemana, setHabitosSemana] = useState([2, 3, 1, 4, 5]);

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
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={handleLogout} style={styles.logout}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>Dashboard de Saúde</Text>
      <Text style={styles.subtitulo}>Olá, {nome}! Aqui está seu resumo da semana:</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}> Evolução dos Hábitos</Text>
        <LineChart
          data={{
            labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
            datasets: [{ data: habitosSemana }],
          }}
          width={Dimensions.get('window').width - 40}
          height={220}
          chartConfig={{
            backgroundColor: COLORS.white,
            backgroundGradientFrom: '#f0f8ff',
            backgroundGradientTo: '#e0ffff',
            color: () => COLORS.primary,
            labelColor: () => COLORS.text,
            strokeWidth: 2,
            propsForDots: { r: '4', strokeWidth: '2', stroke: COLORS.accent },
          }}
          bezier
          style={{ borderRadius: 12 }}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}> Resumo de Hoje</Text>
        <Text style={styles.cardText}> Água: </Text>
        <Text style={styles.cardText}> Exercício: </Text>
        <Text style={styles.cardText}> Sono: </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: COLORS.bg },
  titulo: { fontSize: 24, fontWeight: 'bold', color: COLORS.primary, marginBottom: 8 },
  subtitulo: { fontSize: 16, color: COLORS.text, marginBottom: 20 },
  card: {
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  cardText: { fontSize: 14, color: COLORS.text, marginBottom: 4 },
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
