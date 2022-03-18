import { Image } from "react-native";

export const CATEGORIES = [
  {
    categoryName: "Art",
    categoryIcon: (
      <Image
        style={{ height: "100%", width: "100%" }}
        source={require("../assets/images/starry-night.png")}
      />
    ),
  },

  {
    categoryName: "Travail Associatif",
    categoryIcon: (
      <Image
        style={{ height: "100%", width: "100%" }}
        source={require("../assets/images/unity.png")}
      />
    ),
  },

  {
    categoryName: "Lecture",
    categoryIcon: (
      <Image
        style={{ height: "100%", width: "100%" }}
        source={require("../assets/images/book.png")}
      />
    ),
  },
];
