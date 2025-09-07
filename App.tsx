import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import HabitosScreen from './src/screens/HabitosScreen';
import CadastroScreen from './src/screens/CadastroScreen';
import RelatorioScreen from './src/screens/RelatorioScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Hábitos" component={HabitosScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Relatório" component={RelatorioScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
