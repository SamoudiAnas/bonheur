import React from "react";
import { View, Modal, StyleSheet, Text, Alert } from "react-native";

// responsiveness
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

//add binary
import AddBinary from "../../Adding/AddBinary";

const AddBinaryModal = ({ category, modalVisible, setModalVisible }) => {
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
        <Text style={styles.modalText}>Ajouter une formation</Text>

        <AddBinary setModalVisible={setModalVisible} category={category} />
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

export default AddBinaryModal;
