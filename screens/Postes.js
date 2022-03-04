import React from "react";
import { View, StyleSheet, Text } from "react-native";

// responsiveness
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import PostCard from "../components/UI/PostCard";

const Posts = () => {
  return (
    <View style={styles.screen}>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: hp("2%"),
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default Posts;
