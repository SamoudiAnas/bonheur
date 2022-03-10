import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Smiley from "../assets/images/Smiley.svg";

// responsiveness
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// awesome button
import AwesomeButton from "react-native-really-awesome-button";

// Colors
import { COLORS } from "../constants/colors";

const WelcomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Smiley width={150} height={150} />
      </View>

      <View style={styles.actionContainer}>
        <Text style={styles.text}>Comment trouver le bonheur?</Text>
        <AwesomeButton
          style={styles.button}
          stretch={true}
          onPress={() => props.navigation.navigate("Categories")}
          backgroundColor={COLORS.defaultGreen}
        >
          <Text style={styles.buttonText}>En savoir plus</Text>
        </AwesomeButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: wp("2%"),
  },
  iconContainer: {
    width: wp("100%"),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: hp("15%"),
  },
  text: {
    textAlign: "center",
    fontFamily: "Hubballi",
    fontSize: hp("4%"),
    marginBottom: hp("5%"),
  },
  actionContainer: {
    width: wp("100%"),
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: wp("65%"),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Hubballi",
    fontSize: wp("7%"),
    color: "#fff",
  },
});

export default WelcomeScreen;
