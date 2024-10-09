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
    <TouchableHighlight
      style={[
        styles.button,
        {
          backgroundColor: theme.colors.onPrimary,
          borderColor: theme.colors.outline,
        },
        ,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={[styles.container]}>
        <MaterialIcons name={icon} size={24} color={theme.colors.surface} />
        <Text style={[styles.text,{color:theme.colors.onBackground}]}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    borderWidth: 1,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  text: {
    fontSize: 16,
    marginLeft: 8,
    fontWeight: "500",
  },
});
