import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

// responsiveness
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// Colors
import Colors from "../../constants/Colors";

const PostCard = ({ post, style }) => {
  return (
    <View style={{ ...styles.card, ...style }}>
      <Image
        source={{ uri: post.imageUri }}
        style={{ height: "100%", width: "100%" }}
      />

      <View style={styles.details}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.description}>{post.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: hp("30%"),
    width: wp("45%"),
    backgroundColor: Colors.defaultGreen,
    borderWidth: 2,
    marginBottom: wp("2%"),
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
  },

  imageContainer: {
    height: "40%",
    width: "100%",
    borderRadius: wp("50%"),
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  details: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Hubballi",
    fontSize: wp("5.5%"),
  },
  description: {
    fontFamily: "Hubballi",
    fontSize: wp("4.5%"),
    textAlign: "center",
  },
});
export default PostCard;
