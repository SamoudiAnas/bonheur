import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

// responsiveness
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// Colors
import Colors from "../../constants/Colors";

// useDispatch
import { useDispatch } from "react-redux";

// postActions
import * as postActions from "../../store/actions/post";

const PostCard = ({ post, style, category }) => {
  // Initializing the dispatch function
  const dispatch = useDispatch();

  // Delete Post Handler
  const deletePostHandler = () => {
    dispatch(postActions.deletePost(post.id, category));
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={deletePostHandler}>
      <View style={{ ...styles.card, ...style }}>
        <Image
          source={{ uri: post.imageUri }}
          style={{ height: "100%", width: "100%" }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: hp("30%"),
    width: wp("45%"),
    backgroundColor: Colors.defaultGreen,
    borderWidth: 2,
    marginBottom: wp("2%"),
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
  },

  imageContainer: {
    height: "40%",
    width: "100%",
    borderRadius: wp("50%"),
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  details: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Hubballi",
    fontSize: wp("5.5%"),
  },
  description: {
    fontFamily: "Hubballi",
    fontSize: wp("4.5%"),
    textAlign: "center",
  },
});
export default PostCard;
