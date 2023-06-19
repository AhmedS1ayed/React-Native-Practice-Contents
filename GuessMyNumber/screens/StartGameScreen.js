import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

const StartGameScreen = (props) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  function resetHandleButton() {
    setEnteredNumber("");
  }
  function confirmHandleButton() {
    const number = parseInt(enteredNumber);
    if (isNaN(number) || number < 0 || number > 99) {
      Alert.alert("Invalid input", "problem in the input number", [
        { text: "Okay", style: "destructive", onPress: resetHandleButton },
      ]);
      return;
    }
    props.onPickNumber(enteredNumber);
  }
  function changeNumberHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  return (
    <View style={styles.inputContainer}>
      <Title>Put a Number :</Title>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        onChangeText={changeNumberHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={resetHandleButton}>Reset</PrimaryButton>
        <PrimaryButton onPress={confirmHandleButton}>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#72063c",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
