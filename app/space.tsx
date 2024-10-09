import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Space() {
  const params = useLocalSearchParams();

  return (
    <View style={[styles.container]}>
      <Text>{params.spaceName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: "center",
  },
});
