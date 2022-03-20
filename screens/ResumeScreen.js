import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

// TabView & SceneMap
import { TabView, SceneMap } from "react-native-tab-view";
import Arab from "./Resume-Languages/Arab";
import French from "./Resume-Languages/French";
import English from "./Resume-Languages/English";

// Initializing the renderScene
const renderScene = SceneMap({
  first: Arab,
  second: French,
  third: English,
});

const ResumeScreen = () => {
  // States
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Arabe" },
    { key: "second", title: "Français" },
    { key: "third", title: "Anglais" },
  ]);
  return (
    <View style={styles.screen}>
      <TabView
        style={{ width: "100%" }}
        renderScene={renderScene}
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
      />
    </View>
  );
};

export default ResumeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
