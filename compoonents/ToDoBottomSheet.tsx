import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Link } from "expo-router";
import React, { forwardRef, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, useTheme } from "react-native-paper";
import ButtonPrimary from "./ButtonPrimary";

type ToDoBottomSheetProps = {
  title: string;
  route: string;
  description: string;
  inputPlaceholder: string;
  inputText: string;
  buttonText: string;
  handleSheetChanges: (index: number) => void;
  inputOnChange: (text: string) => void;
};

const ToDoBottomSheet = forwardRef<BottomSheetModal, ToDoBottomSheetProps>(
  (
    {
      title,
      description,
      route,
      inputPlaceholder,
      inputText,
      inputOnChange,
      buttonText,
      handleSheetChanges,
    },
    ref
  ) => {
    const theme = useTheme();
    const snapPoints = useMemo(() => ["50%"], []);
    const isDisabled = inputText.length === 0;

    const handleButtonPress = () => {
      // Close the modal
      ref.current?.dismiss();
    };

    return (
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={ref}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          backgroundStyle={{ backgroundColor: theme.colors.secondary }}
          handleIndicatorStyle={{ backgroundColor: theme.colors.onBackground }}
          onDismiss={handleButtonPress}
        >
          <BottomSheetView
            style={[
              styles.contentContainer,
              { backgroundColor: theme.colors.secondary },
            ]}
          >
            <View style={styles.innerContainer}>
              <Text
                style={[styles.title, { color: theme.colors.onBackground }]}
              >
                {title}
              </Text>
              <Text
                style={[
                  styles.description,
                  { color: theme.colors.onBackground },
                ]}
              >
                {description}
              </Text>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: theme.colors.primary,
                    borderColor: theme.colors.onSurface,
                  },
                ]}
                activeUnderlineColor="transparent"
                cursorColor={theme.colors.onBackground}
                placeholderTextColor={theme.colors.onSurface}
                textColor={theme.colors.onBackground}
                value={inputText}
                placeholder={inputPlaceholder}
                onChangeText={inputOnChange}
              />
            </View>
            <Link
              href={{
                pathname: route,
                params: { spaceName: inputText },
              }}
              asChild
            >
              <ButtonPrimary
                text={buttonText}
                isDisabled={isDisabled}
                style={{
                  ...styles.button,
                  backgroundColor: theme.colors.primaryContainer,
                  opacity: isDisabled ? 0.5 : 1,
                }}
                onPress={() => ref.current?.dismiss()}
              />
            </Link>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    );
  }
);

export default ToDoBottomSheet;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    fontWeight: "300",
    marginVertical: 4,
    textAlign: "center",
  },
  input: {
    marginVertical: 16,
    borderRadius: 16,
    borderStyle: "solid",
    borderWidth: 1,
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
  },
  button: {
    width: "100%",
    marginVertical: 16,
  },
});
