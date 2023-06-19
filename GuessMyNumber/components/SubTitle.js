import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SubTitle = ({children}) => {
  return <Text style={styles.subTitle}>{children}</Text>;
};

export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    padding: 12,
    textAlign: "center",
  },
});
