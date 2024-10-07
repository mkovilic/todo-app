import React from 'react';
import { useTheme } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';
import { ThemedView } from '../compoonents/ThemedView';
import { ThemedText } from '../compoonents/ThemedText';

export default function Index() {
  const theme = useTheme();

  return (
    <ThemedView style={[styles.container]}>
      <ThemedText type='defaultSemiBold'>Home</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
