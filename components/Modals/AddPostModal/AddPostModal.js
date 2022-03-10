import React from "react";
import { View, Modal, StyleSheet, Text, Pressable } from "react-native";

//button component
import AwesomeButton from "react-native-really-awesome-button";

// responsiveness
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { COLORS } from "../../../constants/colors";

const AddPostModal = ({ modalVisible, setModalVisible }) => {
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

        <View style={styles.buttons_container}>
          <AwesomeButton
            style={styles.button}
            stretch={true}
            onPress={() => setModalVisible(true)}
            backgroundColor={COLORS.defaultGreen}
          >
            <Text style={styles.buttonText}>Ajouter un poste</Text>
          </AwesomeButton>
          <AwesomeButton
            style={styles.cancelButton}
            stretch={true}
            onPress={() => setModalVisible(false)}
            backgroundColor={COLORS.danger}
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
  buttons_container: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    bottom: hp("4%"),
  },

  button: {
    width: wp("45%"),
    marginRight: wp("2%"),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp("2%"),
  },
  cancelButton: {
    width: wp("45%"),
    marginLeft: wp("2%"),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp("2%"),
  },
  cancelButtonText: {
    color: "white",
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
    fontSize: wp("5%"),
  },
});

export default AddPostModal;
