import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

// Tab View
import { TabView, SceneMap } from "react-native-tab-view";
import Events from "./Events";
import Posts from "./Postes";
import Formation from "./Formation";

// responsiveness
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// the tabs
const renderScene = SceneMap({
  first: Formation,
  second: Posts,
  third: Events,
});

const Category = () => {
  // the index of the screen tab
  const [index, setIndex] = useState(0);

  // the screens of the tab
  const [routes, setRoutes] = useState([
    { key: "first", title: "Formation" },
    { key: "second", title: "Posts" },
    { key: "third", title: "Events" },
  ]);
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: wp("100%") }}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Category;
