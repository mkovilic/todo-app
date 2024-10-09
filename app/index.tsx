import React, { useCallback, useMemo, useRef, useState } from "react";
import { useTheme } from "react-native-paper";
import { View, Text, StyleSheet } from "react-native";
import ButtonSecondary from "../compoonents/ButtonSecondary";
import SpaceSectionItem from "../compoonents/SpaceSectionItem";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  const theme = useTheme();
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["45%", "100%"], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <View style={[styles.container]}>
      <Text style={[styles.headerText, { color: theme.colors.onBackground }]}>
        To-Do
      </Text>
      <View style={styles.buttonContainer}>
        <ButtonSecondary title="New Space" onPress={() => {}} icon="add" />
        <ButtonSecondary
          title="Join Space"
          onPress={() => {
            setBottomSheetVisible(true);
            console.log(isBottomSheetVisible);
          }}
          icon="people-alt"
        />
      </View>
      <View style={styles.sectionContainer}>
        <Text
          style={[styles.sectionText, { color: theme.colors.onBackground }]}
        >
          Spaces
        </Text>
        <SpaceSectionItem
          title="Nyes"
          description="1 task, 4 members"
          onPress={() => {}}
        />
      </View>

      {isBottomSheetVisible && (
          <BottomSheet
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            //enableDynamicSizing={true}
            onChange={handleSheetChanges}
            enablePanDownToClose={true}
          >
            <BottomSheetView style={styles.contentContainer}>
              <Text>Awesome 🎉</Text>
            </BottomSheetView>
          </BottomSheet>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
  },
  sectionContainer: {
    width: "100%",
    padding: 16,
    marginVertical: 8,
  },
  sectionText: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
