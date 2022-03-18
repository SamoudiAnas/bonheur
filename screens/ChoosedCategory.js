import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

// responsiveness
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

//screens constants
import { ART_SCREENS } from "../constants/artScreens";
import { READING_SCREENS } from "../constants/readingScreens";
import { WORK_SCREENS } from "../constants/workScreens";

const ChoosedCategory = (props) => {
  //this useState gets the routing params to determine
  //which screen is entered and display the according categories
  const [screens, setScreens] = useState(() => {
    switch (props.route.params) {
      case "Travail Associatif":
        return WORK_SCREENS;
      case "Lecture":
        return READING_SCREENS;
      default:
        return ART_SCREENS;
    }
  });

  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Vous trouvez que votre bonheur repose a l'intérieur de{" "}
          {props.route.params}
        </Text>
      </View>

      <View style={styles.optionsContainer}>
        {screens.map((screen) => (
          <TouchableOpacity
            key={screen.screenName}
            activeOpacity={0.6}
            onPress={() => {
              props.navigation.navigate("Category", {
                screenName: screen.screenName,
              });
            }}
          >
            <View style={styles.option}>
              <View style={styles.iconContainer}>
                <View style={styles.icon}>{screen.screenIcon}</View>
              </View>
              <View style={styles.buttonTextContainer}>
                <Text style={styles.buttonText}>{screen.screenName}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: hp("100%"),
    width: wp("100%"),
  },
  textContainer: {
    height: "35%",
    width: wp("100%"),
    paddingHorizontal: wp("5%"),
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: wp("10%"),
    fontFamily: "Hubballi",
  },
  optionsContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp("5%"),
  },
  option: {
    width: wp("90%"),
    height: hp("10%"),
    borderColor: "#ccc",
    borderWidth: 1,
    paddingVertical: hp("3%"),
    borderRadius: wp("5%"),
    marginVertical: hp("1%"),
    flexDirection: "row",
    position: "relative",
  },
  iconContainer: {
    position: "absolute",
    width: "25%",
    backgroundColor: "transparent",
    height: hp("10%"),
    top: hp("0%"),
    borderRadius: wp("5%"),
    overflow: "hidden",
  },
  icon: { height: hp("10%"), width: "100%" },
  buttonTextContainer: {
    width: "100%",
  },
  buttonText: {
    fontFamily: "Hubballi",
    fontSize: wp("7%"),
    paddingLeft: wp("30%"),
  },
});
export default ChoosedCategory;
