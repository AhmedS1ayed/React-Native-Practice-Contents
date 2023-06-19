import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import SubTitle from "../components/SubTitle";
import { Alert } from "react-native";

const GameScreen = (props) => {
  const pickedNumber = props.pickedNumber;
  const guessedNumber = props.guessedNumber;
  const setGuessedNumber = props.setGuessedNumber;
  const countGuessed = props.countGuessed;
  const setCountGuessed = props.setCountGuessed;
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(99);

  function higher() {
    if(pickedNumber < guessedNumber)
    {
      Alert.alert("Don't Lie!", "You know you are lying.", [
        { text: "Okay", style: "destructive"},
      ]);
      return;
    }
    setMin(guessedNumber+1);
    const newGuess = getRandomNumber(guessedNumber+1, max);
    setGuessedNumber(newGuess);
    setCountGuessed(countGuessed+1);
  }
  function lower() {
    if(pickedNumber > guessedNumber)
    {
      Alert.alert("Don't Lie!", "You know you are lying.", [
        { text: "Okay", style: "destructive"},
      ]);
      return;
    }
    setMax(guessedNumber-1);
    const newGuess = getRandomNumber(min, guessedNumber-1);
    setGuessedNumber(newGuess);
    setCountGuessed(countGuessed+1);
  }
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <Text style={styles.guessedNumber}>{props.guessedNumber}</Text>
      <View>
        <SubTitle>Higher or Lower?</SubTitle>
        <View style={styles.answerContainer}>
          <PrimaryButton onPress={higher}>+</PrimaryButton>
          <PrimaryButton onPress={lower}>-</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    // backgroundColor: "#72063c",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  answerContainer: {
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
    paddingHorizontal: 4,
    width: "50%",
  },
  guessedNumber: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
