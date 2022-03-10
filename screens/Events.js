import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

//button component
import AwesomeButton from "react-native-really-awesome-button";

// responsiveness
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

//constants
import Colors from "../constants/Colors";

const Events = () => {
  return (
    <View style={styles.screen}>
      <AwesomeButton
        style={styles.button}
        stretch={true}
        onPress={() => {}}
        backgroundColor={Colors.defaultGreen}
      >
        <Text style={styles.buttonText}>Ajouter un événement</Text>
      </AwesomeButton>

      <ScrollView>
        <View style={styles.postsContainer}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: hp("2%"),
  },
  eventsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  button: {
    width: wp("90%"),
    height: hp("7.8%"),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp("2%"),
  },
  buttonText: {
    fontFamily: "Hubballi",
    fontSize: wp("6.5%"),
    textAlign: "center",
  },
});

export default Events;
