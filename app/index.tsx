import React from "react";
import { useTheme } from "react-native-paper";
import { View, Text, StyleSheet } from "react-native";
import ButtonSecondary from "../compoonents/ButtonSecondary";

export default function Index() {
  const theme = useTheme();

  return (
    <View style={[styles.container]}>
        <Text style={styles.text}>To-Do</Text>
        <View style={styles.buttonContainer}>
          <ButtonSecondary title="New Space" onPress={() => {}} icon="add" />
          <ButtonSecondary
            title="Join Space"
            onPress={() => {}}
            icon="people-alt"
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "white",
  },
});
