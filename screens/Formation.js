import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

//button component
import AwesomeButton from "react-native-really-awesome-button";

// responsiveness
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

//constants
import Colors from "../constants/Colors";

const Formation = () => {
  return (
    <View style={styles.screen}>
      <AwesomeButton
        style={styles.button}
        stretch={true}
        onPress={() => {}}
        backgroundColor={Colors.defaultGreen}
      >
        <Text style={styles.buttonText}>Ajouter une formation</Text>
      </AwesomeButton>

      <ScrollView>
        <View style={styles.binariesContainer}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: hp("2%"),
  },
  binariesContainer: {
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

export default Formation;
