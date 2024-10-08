import { View, TouchableHighlight, Text, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

type ButtonSecondaryProps = {
  title: string;
  onPress: () => void;
  icon: string;
  disabled?: boolean;
};

export default function ButtonSecondary({
  title,
  icon,
  onPress,
  disabled,
}: ButtonSecondaryProps) {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          flex: 1,
          padding: 4,
          margin: 8,
          backgroundColor: theme.colors.onBackground,
          borderColor: theme.colors.outline,
        },
      ]}
    >
      <TouchableHighlight
        style={[
          styles.button,
          { backgroundColor: disabled ? "#ccc" : theme.colors.onBackground },
        ]}
        onPress={onPress}
        disabled={disabled}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons name={icon} size={24} color="white" />
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 2,
  },
  button: {
    borderRadius: 8,
    padding: 10,
  },
  text: {
    fontSize: 16,
    marginLeft: 8,
    fontWeight: "500",
    color: "white",
  },
});
