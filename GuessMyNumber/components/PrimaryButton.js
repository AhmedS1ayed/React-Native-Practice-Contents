import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const PrimaryButton = ({ children,onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    overflow: "hidden",
    borderRadius: 28,
    width: "50%",
  },
  buttonInnerContainer: {
    backgroundColor: "#4e0329",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize:20
  },
  pressed: {
    opacity: 0.75,
  },
});
