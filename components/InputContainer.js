import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import ButtonCustom from "./ButtonCustom";

const InputContainer = (props) => {
  const [goalInputHandler, enteredGoal, addGoalHandler] = [
    props.goalInputHandler,
    props.enteredGoal,
    props.addGoalHandler,
  ];
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <ButtonCustom color="green" text="+" onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});

export default InputContainer;
