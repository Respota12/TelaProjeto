import React from 'react';
import { Button } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

interface BotaoProps {
  title: string;
  icon?: any;
  onPress: () => void;
}

export default function Botao({ title, icon, onPress }: BotaoProps) {
  return (
    <Button
      title={title}
      icon={icon}
      type="outline"
      buttonStyle={styles.button}
      titleStyle={styles.title}
      onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: COLORS.accent,
    borderWidth: 1.5,
    borderRadius: 16,
    paddingVertical: 12,
    backgroundColor: 'transparent',
  },
  title: {
    color: COLORS.text,
    fontWeight: '700',
    marginLeft: 6,
  },
});
