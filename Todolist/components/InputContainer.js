import { View, TextInput, StyleSheet, Modal } from "react-native";
import React from "react";
import ButtonCustom from "./ButtonCustom";
import KeyboardAvoidingComponent from "./KeyboardAvoidingComponent";
import IconBackground from "./IconBackground";

const InputContainer = (props) => {
  const [goalInputHandler, enteredGoal, addGoalHandler, visible, setVisible] = [
    props.goalInputHandler,
    props.enteredGoal,
    props.addGoalHandler,
    props.visible,
    props.setVisible,
  ];
  return (
    <Modal visible={visible} animationType="slide">
      <IconBackground />
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Your course goal!"
            onChangeText={goalInputHandler}
            value={enteredGoal}
          />
          <ButtonCustom
            style={styles.addButton}
            color="green"
            text="+"
            onPress={addGoalHandler}
          />
        </View>

        <View style={styles.bottomContainer}>
          <KeyboardAvoidingComponent>
            <ButtonCustom
              style={styles.backButton}
              color="purple"
              text="←"
              onPress={setVisible}
            />
          </KeyboardAvoidingComponent>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  inputContainer: {
    flex: 0.9,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    marginTop: 40,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 15,
    padding: 8,
  },
  addButton: {
    marginHorizontal: 10,
  },
  bottomContainer: {
    flex: 0.1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  backButton: {
    paddingHorizontal: 20,
    width: "100%",
  },
});

export default InputContainer;
