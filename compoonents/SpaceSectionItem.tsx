import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";

type SpaceSectionItemProps = {
  title: string;
  description: string;
  onPress: () => void;
};

export default function SpaceSectionItem({
  title,
  description,
  onPress,
}: SpaceSectionItemProps) {
  const theme = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[style.container]}>
        <View
          style={[
            style.iconContainer,
            { backgroundColor: theme.colors.onPrimary },
          ]}
        >
          <MaterialIcons
            name="people-alt"
            size={24}
            color={theme.colors.surface}
          />
        </View>
        <View style={style.textContainer}>
          <Text style={[style.title, { color: theme.colors.onBackground }]}>
            {title}
          </Text>
          <Text style={[style.description, { color: theme.colors.onSurface }]}>
            {description}
          </Text>
        </View>
        <View style={style.trailingIcon}>
          <MaterialIcons
            name="arrow-forward"
            size={32}
            color={theme.colors.surface}
          />
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
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "300",
  },
  description: {
    fontWeight: "300",
  },
  trailingIcon: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
