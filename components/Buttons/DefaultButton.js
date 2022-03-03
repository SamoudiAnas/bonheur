import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

//responsive
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../../constants/Colors";

export default function DefaultButton(props) {
  return (
    <TouchableOpacity onPress={() => console.log("clicked")}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.text}</Text>
        <View style={styles.bottomBorder}>
          <Text style={styles.buttonText}></Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "relative",
    borderRadius: wp("3%"),
    paddingVertical: hp("1%"),
    margin: hp("2%"),
    marginHorizontal: 50,
    paddingHorizontal: wp("15%"),
    marginBottom: hp("1%"),
    backgroundColor: COLORS.defaultGreen,
    borderColor: "black",
    borderWidth: 1.5,
  },
  buttonText: {
    color: "black",
    fontFamily: "Hubballi",
    fontSize: wp("6%"),
    textAlign: "center",
  },

  bottomBorder: {
    position: "absolute",
    bottom: wp("-3%"),
    zIndex: -10,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "#276464",
    borderColor: "black",
    borderWidth: 1.5,
    borderRadius: wp("3%"),
  },
});
