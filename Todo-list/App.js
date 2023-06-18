import { StatusBar } from "expo-status-bar";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import useGoals from "./hooks/useGoals";
import OutputContainer from "./components/OutputContainer";
import InputContainer from "./components/InputContainer";
import ButtonCustom from "./components/ButtonCustom";
import { useState } from "react";
import IconBackground from "./components/IconBackground";
export default function App() {
  const [
    selectedItem,
    setSelectedItem,
    enteredGoal,
    setEnteredGoal,
    listGoal,
    setListGoal,
  ] = useGoals();
  const [inputContainerModal, setInputContainerModal] = useState(false);

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
  function inputModalHandler() {
    inputContainerModal === true
      ? setInputContainerModal(false)
      : setInputContainerModal(true);
  }

  return (
    <View style={{flex:1}}>
      <IconBackground/>
      <View style={styles.appContainer}>
        <ButtonCustom
          color="purple"
          text="Add New Goal"
          onPress={inputModalHandler}
        />
        <InputContainer
          goalInputHandler={goalInputHandler}
          enteredGoal={enteredGoal}
          addGoalHandler={addGoalHandler}
          visible={inputContainerModal}
          setVisible={setInputContainerModal}
        />
        <OutputContainer
          listGoal={listGoal}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          deleteGoalHandler={deleteGoalHandler}
        />
        <StatusBar style="auto" />
      </View>
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
  }
});
