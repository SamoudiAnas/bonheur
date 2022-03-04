import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Events = () => {
  return (
    <View style={styles.screen}>
      <Text>Events</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Events;
