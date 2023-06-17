import { FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./GoalItem";

const GoalList = (props) => {
  const [listGoal, selectedItem, setSelectedItem] = [
    props.listGoal,
    props.selectedItem,
    props.setSelectedItem,
  ];
  return (
    <View style={styles.list}>
      <FlatList
        data={listGoal}
        renderItem={(itemData) => {
          return (
            <GoalItem
              itemData={itemData}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: "space-between",
  },
});

export default GoalList;
