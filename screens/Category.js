import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

// Tab View
import { TabView, SceneMap } from "react-native-tab-view";
import Events from "./Events";
import Posts from "./Postes";
import Formation from "./Formation";

// the tabs
const renderScene = SceneMap({
  first: Formation,
  second: Posts,
  third: Events,
});

const Category = ({ route }) => {
  // the index of the screen tab
  const [index, setIndex] = useState(0);

  // the screens of the tab
  const [routes, setRoutes] = useState([
    { key: "first", title: "Formation", category: route.params.screenName },
    { key: "second", title: "Posts", category: route.params.screenName },
    { key: "third", title: "Events", category: route.params.screenName },
  ]);

  return (
    <View style={styles.screen}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: "100%" }}
        style={{ width: "100%" }}
      />
    </View>
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
