import { Pressable, Text, StyleSheet, ViewStyle } from "react-native";
import { useTheme } from "react-native-paper";

type ButtonPrimaryProps = {
  text: string;
  isDisabled: boolean;
  style?: ViewStyle;
  onPress: () => void;
};

export default function ButtonPrimary({
  text,
  isDisabled,
  style,
  onPress,
}: ButtonPrimaryProps) {
  const theme = useTheme();

  return (
    <Pressable
    android_ripple={{ color: theme.colors.primary }}
      style={[
        styles.button,
        { backgroundColor: theme.colors.primaryContainer },
        style,
      ]}
      disabled= {isDisabled}
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
