import React from "react";
import { View, Modal, StyleSheet, Text, Alert } from "react-native";

// responsiveness
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

// Add Post
import AddPost from "../../Adding/AddPost";

const AddPostModal = ({ category, modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Ajouter un Poste</Text>

        <AddPost setModalVisible={setModalVisible} category={category} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: hp("2%"),
  },

  modalView: {
    width: wp("100%"),
    height: hp("89.25%"),
    marginTop: hp("10.75%"),
    backgroundColor: "white",
    borderTopEndRadius: wp("5%"),
    borderTopStartRadius: wp("5%"),
    padding: wp("8"),
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: wp("7%"),
    fontFamily: "Hubballi",
  },
});

export default AddPostModal;
