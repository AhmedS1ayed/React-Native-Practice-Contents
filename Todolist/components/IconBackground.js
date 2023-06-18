import { View, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get("window");

const IconBackground = () => {
  return (
    <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={styles.image}
          source={require("../assets/images/Deadpool-logo.png")}
        />
      </View>
  )
}
const styles = StyleSheet.create({
    image: {
      position: "absolute",
      top: height / 2 - 50,
      left: width / 2 - 50,
      width: 100,
      height: 100,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
    },
  });

export default IconBackground