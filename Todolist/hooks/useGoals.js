import React, { useState } from "react";

const useGoals = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [enteredGoal, setEnteredGoal] = useState("");
  const [listGoal, setListGoal] = useState([]);
  return [
    selectedItem,
    setSelectedItem,
    enteredGoal,
    setEnteredGoal,
    listGoal,
    setListGoal,
  ];
};

export default useGoals;
