import React, { useState, useRef, useMemo, useCallback } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { TextInput, useTheme } from "react-native-paper";
import ButtonPrimary from "./ButtonPrimary";

type ToDoBottomSheetProps = {
  title: string;
  description: string;
  inputPlaceholder: string;
  inputText: string;
  inputOnChange: (text: string) => void;
  buttonText: string;
  handleSheetChanges: (index: number) => void;
  bottomSheetModalRef: React.RefObject<BottomSheetModal>;
};

export default function ToDoBottomSheet({
  title,
  description,
  inputPlaceholder,
  inputText,
  inputOnChange,
  buttonText,
  bottomSheetModalRef,
  handleSheetChanges,
}: ToDoBottomSheetProps) {
  const theme = useTheme();
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backgroundStyle={{ backgroundColor: theme.colors.secondary }}
        handleIndicatorStyle={{ backgroundColor: theme.colors.onBackground }}
      >
        <BottomSheetView
          style={[
            styles.contentContainer,
            { backgroundColor: theme.colors.secondary },
          ]}
        >
          <Text style={[styles.title, { color: theme.colors.onBackground }]}>
            {title}
          </Text>
          <Text
            style={[styles.description, { color: theme.colors.onBackground }]}
          >
            {description}
          </Text>
          <TextInput
            style={[
              styles.input,
              { backgroundColor: theme.colors.primary },
            ]}
            placeholderTextColor={theme.colors.onSurface}
            textColor={theme.colors.onBackground}
            value={inputText}
            placeholder={inputPlaceholder}
            onChangeText={inputOnChange}
          />
          <ButtonPrimary
            text={buttonText}
            style={{
              ...styles.button,
              backgroundColor: theme.colors.primaryContainer,
            }}
            onPress={() => {}}
          />
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 16,
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
  input:{
    marginVertical: 16,
    borderRadius: 8,
  },
  button: {
    width: "100%",
    position: "absolute",
    marginVertical: 32,
    marginHorizontal: 16,
    bottom: 0,
  },
});
