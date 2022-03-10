import React from "react";
import { View, Modal, StyleSheet, Text, Alert } from "react-native";

// Importing useDispatch
import { useDispatch } from "react-redux";

// Importing the postActions
import * as postActions from "../../../store/actions/post";

//button component
import AwesomeButton from "react-native-really-awesome-button";

// responsiveness
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

// Colors
import Colors from "../../../constants/Colors";
import AddPost from "../../Adding/AddPost";

const AddPostModal = ({ modalVisible, setModalVisible }) => {
  // Initializing the dispatch function
  const dispatch = useDispatch();

  // Add post handler
  const onAddPostHandler = (title, description, imageUri) => {
    dispatch(postActions.addPost(title, description, imageUri));
    setModalVisible(false);
  };

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

        <AddPost onAddPost={onAddPostHandler} />

        <View style={styles.buttonsContainer}>
          <AwesomeButton
            style={styles.button}
            stretch={true}
            onPress={() => setModalVisible(true)}
            backgroundColor={Colors.defaultGreen}
          >
            <Text style={styles.buttonText}>Ajouter</Text>
          </AwesomeButton>
          <AwesomeButton
            style={styles.cancelButton}
            stretch={true}
            onPress={() => setModalVisible(false)}
            backgroundColor={Colors.danger}
          >
            <Text style={styles.cancelButtonText}>Annuler</Text>
          </AwesomeButton>
        </View>
      </View>
    </Modal>
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
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    bottom: hp("4%"),
  },
  button: {
    width: wp("45%"),
    height: hp("7.8%"),
    marginRight: wp("2%"),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp("2%"),
  },
  buttonText: {
    fontFamily: "Hubballi",
    fontSize: wp("5.5%"),
  },
  cancelButton: {
    width: wp("45%"),
    marginLeft: wp("2%"),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp("2%"),
    height: hp("7.8%"),
  },
  cancelButtonText: {
    color: "white",
    fontFamily: "Hubballi",
    fontSize: wp("5.5%"),
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
