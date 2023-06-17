import { StatusBar } from "expo-status-bar";
import { Modal, StyleSheet, View } from "react-native";
import useGoals from "./hooks/useGoals";
import OutputContainer from "./components/OutputContainer";
import InputContainer from "./components/InputContainer";

export default function App() {
  const [
    selectedItem,
    setSelectedItem,
    enteredGoal,
    setEnteredGoal,
    listGoal,
    setListGoal,
  ] = useGoals();

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }
  function addGoalHandler() {
    setListGoal((currentGoals) => {
      if (
        enteredGoal === "" ||
        currentGoals.find((goal) => goal.text === enteredGoal)
      )
        return currentGoals;
      return [
        ...currentGoals,
        { text: enteredGoal, id: Math.random().toString() },
      ];
    });
    setEnteredGoal("");
  }
  function deleteGoalHandler() {
    const filteredItems = listGoal.filter((item) => item.id !== selectedItem);
    setListGoal(filteredItems);
    setSelectedItem(null);
  }

  return (
    <View style={styles.appContainer}>
      <InputContainer
        goalInputHandler={goalInputHandler}
        enteredGoal={enteredGoal}
        addGoalHandler={addGoalHandler}
      />
      <OutputContainer
        listGoal={listGoal}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        deleteGoalHandler={deleteGoalHandler}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
});
