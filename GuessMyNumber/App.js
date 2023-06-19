import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessedNumber, setGuessedNumber] = useState(
    Math.floor(Math.random() * 100)
  );
  const [countGuessed, setCountGuessed] = useState(1);

  function pickedNumberHandler(input) {
    setUserNumber(input);
  }
  function newGame() {
    setUserNumber(undefined);
    setCountGuessed(0);
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen =
      parseInt(userNumber) === guessedNumber ? (
        <GameOverScreen userNumber={userNumber} newGame={newGame} countGuessed={countGuessed} />
      ) : (
        <GameScreen
          pickedNumber={userNumber}
          guessedNumber={guessedNumber}
          setGuessedNumber={setGuessedNumber}
          countGuessed={countGuessed}
          setCountGuessed={setCountGuessed}
        />
      );
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/hisoka1.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backGroundImage}
      >
        <SafeAreaView style={{ flex: 1 }}>{screen}</SafeAreaView>
        <StatusBar style="auto" />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backGroundImage: {
    opacity: 0.25,
  },
});
