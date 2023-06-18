import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ButtonCustom from "./ButtonCustom";

const ButtonContainer = (props) => {
    const deleteGoalHandler = props.deleteGoalHandler;
  return (
    <View style={styles.buttonsContainer}>
      <ButtonCustom color="black" onPress={deleteGoalHandler} text="Delete" />
      <ButtonCustom color="blue" onPress={deleteGoalHandler} text="Update" />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ButtonContainer;
