import { Image } from "react-native";

export const ART_SCREENS = [
  {
    screenName: "Design",
    screenIcon: (
      <Image
        style={{ height: "100%", width: "100%" }}
        source={require("../assets/images/web-design.png")}
      />
    ),
  },
  {
    screenName: "Guitar",
    screenIcon: (
      <Image
        style={{ height: "100%", width: "100%" }}
        source={require("../assets/images/guitar-playing.png")}
      />
    ),
  },
  {
    screenName: "Photographie",
    screenIcon: (
      <Image
        style={{ height: "100%", width: "100%" }}
        source={require("../assets/images/photography.png")}
      />
    ),
  },
];
