import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

// responsiveness
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// images
import Art from "../assets/images/Art.svg";
import People from "../assets/images/Group.svg";

// colors
import Colors from "../constants/Colors";

const CategoryScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          En fait, il est possible de trouver ton bonheur, il suffit de choisir
          ton penchant
        </Text>
      </View>

      <View style={styles.cardContainer}>
        <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
          <View style={styles.cardTwo}>
            <View style={styles.cardImageTwo}>
              <People width={150} height={90} />
            </View>

            <Text style={styles.cardTextTwo}>Travail Associative</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
          <View style={styles.cardTwo}>
            <View style={styles.cardImageTwo}>
              <People width={150} height={90} />
            </View>

            <Text style={styles.cardTextTwo}>Lectures</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            props.navigation.navigate("ChoosedCategory", "Art");
          }}
        >
          <View style={styles.card}>
            <View style={styles.cardImage}>
              <Art width={200} height={100} />
            </View>

            <Text style={styles.cardText}>Art</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: wp("100%"),
    height: hp("100%"),
  },
  textContainer: {
    height: "45%",
    width: wp("100%"),
    paddingHorizontal: wp("10%"),
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: wp("10%"),
    fontFamily: "Hubballi",
  },
  cardContainer: {
    height: hp("50%"),
    width: wp("100%"),
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card: {
    height: hp("25%"),
    width: wp("40%"),
    backgroundColor: Colors.defaultGreen,
    borderWidth: 2,
    borderRadius: 25,
    marginTop: 10,
  },
  cardImage: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
  },
  cardText: {
    height: "20%",
    textAlign: "center",
    fontFamily: "Hubballi",
    fontSize: wp("8%"),
  },
  cardTwo: {
    height: hp("30%"),
    width: wp("40%"),
    backgroundColor: Colors.defaultGreen,
    borderWidth: 2,
    borderRadius: 25,
  },
  cardImageTwo: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: "60%",
  },
  cardTextTwo: {
    height: "30%",
    textAlign: "center",
    fontFamily: "Hubballi",
    fontSize: wp("8%"),
  },
});

export default CategoryScreen;
