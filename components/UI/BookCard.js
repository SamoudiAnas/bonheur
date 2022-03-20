import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

// Responsiveness
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

// Colors
import Colors from "../../constants/Colors";

const BookCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.coverImage}>
        <Image
          source={{ uri: item.imageUrl }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  card: {
    width: wp("90%"),
    backgroundColor: Colors.defaultGreen,
    height: hp("40%"),
    marginBottom: hp("1"),
  },

  coverImage: {
    width: "100%",
    height: "60%",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.danger,
  },

  details: {
    width: "100%",
    height: "40%",
    marginTop: 10,
  },
  title: {
    textAlign: "center",
    fontFamily: "Hubballi",
    fontSize: wp("7%"),
  },
  description: {
    textAlign: "center",
    fontFamily: "Hubballi",
    fontSize: wp("4.8%"),
  },
});
