import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

const GameOverScreen = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/hisoka2.jpg")}
        resizeMode="cover"
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
        imageStyle={styles.backGroundImage}
      >
        <Title style={{color:'#FFFF00',fontSize:80}}>{props.countGuessed}</Title>
        <PrimaryButton onPress={props.newGame}>New Game</PrimaryButton>
      </ImageBackground>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 100,
    marginHorizontal: 24,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  backGroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
