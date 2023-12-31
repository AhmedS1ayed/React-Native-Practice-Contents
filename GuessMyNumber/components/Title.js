import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Title = ({ children , style}) => {
  return <Text style={[styles.title,style]}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ddb52f",
    padding:12,
    textAlign: "center",
  },
});
