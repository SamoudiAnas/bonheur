import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

// responsiveness
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ART_SCREENS } from "../constants/artScreens";

//colors
import { COLORS } from "../constants/colors";
import { READING_SCREENS } from "../constants/readingScreens";
import { WORK_SCREENS } from "../constants/workScreens";

const ChoosedCategory = (props) => {
  //this useState gets the routing params to determine
  //which screen is entered and display the according categories
  const [screens, setScreens] = useState(() => {
    switch (props.route.params) {
      case "Work":
        return WORK_SCREENS;
      case "Reading":
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
              <View style={styles.icon} />
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
    backgroundColor: "#ccc",
    paddingVertical: hp("3%"),
    borderRadius: wp("5%"),
    marginVertical: hp("1%"),
    flexDirection: "row",
    position: "relative",
  },
  icon: {
    position: "absolute",
    width: "25%",
    backgroundColor: COLORS.defaultGreen,
    height: hp("10%"),
    top: hp("0%"),
    borderRadius: wp("5%"),
  },
  buttonTextContainer: {
    width: "75%",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Hubballi",
    fontSize: wp("7%"),
    paddingLeft: wp("25%"),
  },
});
export default ChoosedCategory;
