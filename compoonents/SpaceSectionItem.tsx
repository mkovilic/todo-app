import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";

export default function SpaceSectionItem() {
  const theme = useTheme();

  return (
      <TouchableOpacity style={[style.container]}>
      <View style={[style.container]}>
      <View
        style={[
          style.iconContainer,
          { backgroundColor: theme.colors.onBackground },
        ]}
      >
        <MaterialIcons name="people-alt" size={24} color="white" />
      </View>
      <View style={style.textContainer}>
        <Text style={style.title}>Space Name</Text>
        <Text style={style.description}>Space Description</Text>
      </View>
      <View style={style.trailingIcon}>
        <MaterialIcons name="arrow-forward" size={32} color="white" />
      </View>
    </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",

    paddingRight: 16,
    marginVertical: 8,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    justifyContent: "center",
    alignContent: "center",
    marginLeft: 12,
  },
  title: {
    fontSize: 20,
    color: "white",
  },
  description: {
    color: "gray",
  },
  sectionText: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 8,
    color: "white",
  },
  trailingIcon: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
