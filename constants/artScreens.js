import { Image } from "react-native";
// Icons
import DesignIcon from "../assets/images/design.svg";
import GuitarIcon from "../assets/images/guitar.svg";
import PhotographyIcon from "../assets/images/photographie.svg";

// Responsiveness
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

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
