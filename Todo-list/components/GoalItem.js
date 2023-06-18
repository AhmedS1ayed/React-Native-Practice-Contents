import { Text, TouchableOpacity, StyleSheet } from "react-native";

const GoalItem = (props) => {
  const [selectedItem, setSelectedItem] = [
    props.selectedItem,
    props.setSelectedItem,
  ];
  return (
    <TouchableOpacity
      style={
        selectedItem === props.itemData.item.id
          ? styles.item.hovered
          : styles.item.normal
      }
      onPress={() =>
        selectedItem !== props.itemData.item.id
          ? setSelectedItem(props.itemData.item.id)
          : setSelectedItem(null)
      }
      key={props.itemData.item.id}
    >
      <Text style={styles.item.itemText}>{`${props.itemData.item.text}`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    normal: {
      backgroundColor: "#FFFF00",
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
    hovered: {
      backgroundColor: "#FFFF8A",
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
  },
  itemText: {
    color: "white",
  },
});
export default GoalItem;
