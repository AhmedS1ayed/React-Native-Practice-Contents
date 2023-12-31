import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const ButtonCustom = (props) => {
  const [color, onPress, text , style] = [props.color, props.onPress, props.text,props.style];
  return (
    <TouchableOpacity
      style={[{ backgroundColor: color }, styles.button ,style]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    flex: 0.5,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
});

export default ButtonCustom;
