import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

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
import { COLORS } from "../constants/colors";

const Posts = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.screen}>
      <AwesomeButton
        style={styles.button}
        stretch={true}
        onPress={() => setModalVisible(true)}
        backgroundColor={COLORS.defaultGreen}
      >
        <Text style={styles.buttonText}>Ajouter un poste</Text>
      </AwesomeButton>

      <ScrollView>
        <View style={styles.postsContainer}>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </View>
      </ScrollView>

      <AddPostModal
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
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  button: {
    width: wp("90%"),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp("2%"),
  },
});

export default Posts;
