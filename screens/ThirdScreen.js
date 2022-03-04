import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

// responsiveness
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../constants/Colors";

const ThirdScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Vous trouvez que votre bonheur repose a l'intérieur de l'Art
        </Text>
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            props.navigation.navigate("FourthScreen", {
              screenName: "Design",
            });
          }}
        >
          <View style={styles.option}>
            <View style={styles.icon} />
            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonText}>Design</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            props.navigation.navigate("FourthScreen", {
              screenName: "Guitar",
            });
          }}
        >
          <View style={styles.option}>
            <View style={styles.icon} />
            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonText}>Guitar</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            props.navigation.navigate("FourthScreen", {
              screenName: "Photographie",
            });
          }}
        >
          <View style={styles.option}>
            <View style={styles.icon} />
            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonText}>Photographie</Text>
            </View>
          </View>
        </TouchableOpacity>
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
    height: "70%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  option: {
    width: wp("80%"),
    height: hp("10%"),
    backgroundColor: "#ccc",
    paddingVertical: hp("3%"),
    borderRadius: wp("5%"),
    marginVertical: hp("3%"),
    flexDirection: "row",
    position: "relative",
  },
  icon: {
    width: "25%",
    backgroundColor: COLORS.defaultGreen,
    height: hp("10%"),
    top: -21,
    borderRadius: wp("5%"),
  },
  buttonTextContainer: {
    width: "75%",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Hubballi",
    fontSize: wp("7%"),
  },
});
export default ThirdScreen;
