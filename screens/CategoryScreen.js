import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

// responsiveness
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// images
import Art from "../assets/images/Art.svg";
import People from "../assets/images/Group.svg";
import { CATEGORIES } from "../constants/categories";

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

      <ScrollView>
        <View style={styles.cardContainer}>
          {CATEGORIES.map((category) => (
            <TouchableOpacity
              key={category.categoryName}
              activeOpacity={0.6}
              onPress={() =>
                props.navigation.navigate(
                  "ChoosedCategory",
                  category.categoryName
                )
              }
            >
              <View style={styles.card}>
                <View style={styles.cardImage}>{category.categoryIcon}</View>

                <Text style={styles.cardText}>{category.categoryName}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: wp("100%"),
    height: hp("100%"),
  },
  textContainer: {
    width: wp("100%"),
    padding: wp("10%"),
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: wp("10%"),
    fontFamily: "Hubballi",
  },
  cardContainer: {
    width: wp("100%"),
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  card: {
    height: hp("30%"),
    width: wp("40%"),
    backgroundColor: Colors.defaultGreen,
    borderWidth: 2,
    borderRadius: wp("2%"),
    marginBottom: wp("2%"),
  },
  cardImage: {
    width: "100%",
    padding: wp("2%"),
    justifyContent: "center",
    alignItems: "center",
    height: "60%",
  },
  cardText: {
    height: "30%",
    textAlign: "center",
    fontFamily: "Hubballi",
    fontSize: wp("8%"),
  },
});

export default CategoryScreen;
