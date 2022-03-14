import React, { useCallback, useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

// Importing useSelector for selecting the data
import { useSelector, useDispatch } from "react-redux";

// Importing PostActions
import * as postsActions from "../store/actions/post";

//button component
import AwesomeButton from "react-native-really-awesome-button";

// responsiveness
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import AddPostModal from "../components/Modals/AddPostModal/AddPostModal";

//post component
import PostCard from "../components/UI/PostCard";

//constants
import Colors from "../constants/Colors";

const Posts = ({ route }) => {
  // Modal state
  const [modalVisible, setModalVisible] = useState(false);

  // states...
  const [loading, setLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState(null);

  // setting the posts
  const posts = useSelector((state) => state.posts.posts);
  // Initializing the dispatch function
  const dispatch = useDispatch();

  // Load posts handler
  const loadPostsHandler = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      dispatch(postsActions.fetchPosts(route?.category));
    } catch (error) {
      setError(error);
    }
    setIsRefreshing(false);
  }, [dispatch]);

  useEffect(() => {
    setLoading(true);
    loadPostsHandler().then(() => setLoading(false));
  }, [loadPostsHandler]);

  return (
    <View style={styles.screen}>
      <AwesomeButton
        style={styles.button}
        stretch={true}
        onPress={() => setModalVisible(true)}
        backgroundColor={Colors.defaultGreen}
      >
        <Text style={styles.buttonText}>Ajouter un poste</Text>
      </AwesomeButton>

      {!loading && posts.length > 0 ? (
        <FlatList
          contentContainerStyle={styles.postsContainer}
          numColumns={2}
          data={posts}
          renderItem={(itemData) => <PostCard post={itemData.item} />}
          keyExtractor={(item) => item.id}
          refreshing={isRefreshing}
          onRefresh={loadPostsHandler}
        />
      ) : (
        <View style={styles.centerContent}>
          <Text style={styles.contentMessage}>
            No posts found, start adding some!
          </Text>
        </View>
      )}

      <AddPostModal
        category={route?.category}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: hp("2%"),
  },

  postsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },

  button: {
    width: wp("90%"),
    height: hp("7.8%"),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp("2%"),
  },
  buttonText: {
    fontFamily: "Hubballi",
    fontSize: wp("6.5%"),
    textAlign: "center",
  },
  centerContent: {
    height: "90%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  contentMessage: {
    fontFamily: "Hubballi",
    fontSize: wp("5%"),
  },
});

export default Posts;
