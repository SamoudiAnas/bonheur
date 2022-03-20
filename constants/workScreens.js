// Icons
import EsignIcon from "../assets/images/design.png";

// Image
import { Image } from "react-native";

export const WORK_SCREENS = [
  {
    screenName: "Projets",
    screenIcon: (
      <Image style={{ width: "100%", height: "100%" }} source={EsignIcon} />
    ),
  },
  {
    screenName: "Réunion",
    screenIcon: (
      <Image style={{ width: "100%", height: "100%" }} source={EsignIcon} />
    ),
  },
];
