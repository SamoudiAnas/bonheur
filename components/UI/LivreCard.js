import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

// Responsiveness
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const LivreCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.coverImage}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.details}>
        <Text style={styles.title}>Visiter ce lien pour le télécharger:</Text>
        <Text style={styles.url}>{item.url}</Text>
      </View>
    </View>
  );
};

export default LivreCard;

const styles = StyleSheet.create({
  card: {
    width: wp("90%"),
    backgroundColor: "#ccc",
    height: hp("30%"),
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
  },

  details: {
    width: "100%",
    height: "40%",
    marginTop: 10,
  },
  title: {
    textAlign: "center",
    fontFamily: "Hubballi",
    fontSize: wp("5%"),
  },
  url: {
    textAlign: "center",
    fontFamily: "Hubballi",
    fontSize: wp("4.8%"),
    color: "orange",
  },
});
