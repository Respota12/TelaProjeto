import React from 'react';
import { Tabs } from 'expo-router/tabs' 
import { COLORS } from '../../theme/colors';
import { Feather } from '@expo/vector-icons';


export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Feather.glyphMap;

          if (route.name === 'habitos') iconName = 'check-square';
          else if (route.name === 'relatorios') iconName = 'bar-chart-2';
          else iconName = 'activity';

          return <Feather name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.accent,
        tabBarInactiveTintColor: COLORS.text,
        headerShown: false,
      })}
    >
      <Tabs.Screen name="habitos"  />
      <Tabs.Screen name="relatorio" />
      <Tabs.Screen name="dashboard" />
    </Tabs>
  );
}
