import { StyleSheet, Text, View, Modal, Alert } from "react-native";
import React from "react";

// responsiveness
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

// AddLivre
import AddLivre from "../../Adding/AddLivre";

const LivreModal = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Add a resume</Text>

        <AddLivre setModalVisible={setModalVisible} />
      </View>
    </Modal>
  );
};

export default LivreModal;

const styles = StyleSheet.create({
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
