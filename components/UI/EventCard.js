import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

// Responsiveness
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Colors from "../../constants/Colors";

const EventCard = ({ event }) => {
  return (
    <View style={styles.screen}>
      <ImageBackground
        source={{ uri: event.imageUri }}
        style={styles.imageBackground}
        resizeMode="contain"
      >
        <View style={styles.details}>
          <Text style={styles.title}>{event.title}</Text>
          <Text style={styles.date}>{event.date}</Text>
          <Text style={styles.description}>{event.description}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  screen: {
    width: "98%",
    height: hp("25%"),
    borderRadius: wp("2%"),
    borderColor: "black",
    borderWidth: 2,
    overflow: "hidden",
  },

  imageBackground: {
    width: "100%",
    height: "100%",
  },
  details: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  title: {
    fontFamily: "Hubballi",
    fontSize: wp("8%"),
  },
  date: {
    position: "absolute",
    top: hp("1%"),
    right: wp("4%"),
    fontFamily: "Hubballi",
    fontSize: wp("6%"),
  },
  description: {
    fontFamily: "Hubballi",
    fontSize: wp("5.5%"),
    width: "80%",
    textAlign: "center",
  },
});
