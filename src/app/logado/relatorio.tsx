import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { Alert } from 'react-native';

const router = useRouter();

useEffect(() => {
  const verificarLogin = async () => {
    const dados = await AsyncStorage.getItem('usuario');
    if (!dados) {
      Alert.alert('Acesso negado', 'Você precisa estar logado.');
      router.push('/login');
    }
  };
  verificarLogin();
}, []);

export default function RelatorioScreen() {
  const progresso = 0.75;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progresso semanal</Text>
      <View style={styles.bar}>
        <View style={[styles.fill, { width: `${progresso * 100}%` }]} />
      </View>
      <Text>{Math.round(progresso * 100)}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: COLORS.white, flex: 1 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  bar: { height: 20, backgroundColor: '#ddd', borderRadius: 10 },
  fill: { height: 20, backgroundColor: COLORS.accent, borderRadius: 10 },
});
