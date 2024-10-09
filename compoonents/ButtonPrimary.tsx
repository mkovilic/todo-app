import { Pressable, Text, StyleSheet, ViewStyle } from "react-native";
import { useTheme } from "react-native-paper";

type ButtonPrimaryProps = {
  text: string;
  style?: ViewStyle;
  onPress: () => void;
};

export default function ButtonPrimary({
  text,
  style,
  onPress,
}: ButtonPrimaryProps) {
  const theme = useTheme();

  return (
    <Pressable
      style={[
        styles.button,
        { backgroundColor: theme.colors.primaryContainer },
        style,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: theme.colors.onBackground }]}>
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 16,
  },
  text: {
    textAlign: "center",
  },
});
