import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BookScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>BookScreen</Text>
    </View>
  );
};

export default BookScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
