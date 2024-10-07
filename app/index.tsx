import React from 'react';
import { useTheme } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';


export default function Index() {
  const theme = useTheme();
  
  return (
    <View style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Text style={{color:"white"}}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
