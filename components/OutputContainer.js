import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ButtonContainer from "./ButtonContainer";
import GoalList from "./GoalList";

const OutputContainer = (props) => {
  const [listGoal, selectedItem, setSelectedItem, deleteGoalHandler] = [
    props.listGoal,
    props.selectedItem,
    props.setSelectedItem,
    props.deleteGoalHandler,
  ];
  return (
    <View style={styles.outputContainer}>
      <View style={{ flex: 5 }}>
        <Text style={styles.title}>List goals!</Text>
        <GoalList
          listGoal={listGoal}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </View>
      <ButtonContainer deleteGoalHandler={deleteGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  outputContainer: {
    flex: 6,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default OutputContainer;
