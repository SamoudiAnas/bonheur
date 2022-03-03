import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

//font
import * as Font from "expo-font";
import Apploading from "expo-app-loading";

//responsive
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

//image
import Smiley from "./assets/images/Smiley.svg";

//button
import AwesomeButton from "react-native-really-awesome-button";

function Button() {
  return (
    <AwesomeButton
      progress
      onPress={(next) => {
        /** Do Something **/
        next();
      }}
    >
      Text
    </AwesomeButton>
  );
}

const getFonts = () =>
  Font.loadAsync({
    Hubballi: require("./assets/fonts/Hubballi-Regular.ttf"),
  });

export default function App() {
  const [fontsloaded, setFontsLoaded] = useState(false);

  if (fontsloaded) {
    return (
      <View style={styles.container}>
        <Smiley width={150} height={150} />
        <Text style={styles.text}>Comment trouver le bonheur?</Text>
        <Button />
      </View>
    );
  } else {
    return (
      <Apploading
        startAsync={getFonts}
        onFinish={() => {
          setFontsLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: wp("2%"),
  },
  text: {
    textAlign: "center",
    fontFamily: "Hubballi",
    fontSize: hp("4%"),
    marginBottom: hp("5%"),
  },
});
