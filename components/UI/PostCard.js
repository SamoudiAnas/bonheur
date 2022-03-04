import React from "react";
import { View, StyleSheet, Text } from "react-native";

// responsiveness
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// Colors
import { COLORS } from "../../constants/Colors";

const PostCard = (props) => {
  return <View style={{ ...styles.card, ...props.style }}></View>;
};

const styles = StyleSheet.create({
  card: {
    height: hp("25%"),
    width: wp("45%"),
    backgroundColor: COLORS.defaultGreen,
    borderWidth: 2,
    marginBottom: wp("2%"),
  },
});
export default PostCard;
