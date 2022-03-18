import { StyleSheet, Text, View, Modal, TextInput } from "react-native";
import React, { useState } from "react";

// Responsiveness
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

//button component
import AwesomeButton from "react-native-really-awesome-button";

// Colors
import Colors from "../../../constants/Colors";

// Importing the binary event
import * as binaryActions from "../../../store/actions/binary";

// Importing useDispatch
import { useDispatch } from "react-redux";

const ParticipateModal = ({ modalVisible, setModalVisible, id, category }) => {
  // TextInputs states
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Initializing dispatch function...
  const dispatch = useDispatch();

  // TextInputs handlers
  const nameChangeHandler = (text) => {
    setName(text);
  };
  const phoneNumberChangeHandler = (text) => {
    setPhoneNumber(text);
  };

  const addParticipantHandler = () => {
    switch (category) {
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Ajouter des participants</Text>

        <View style={styles.form}>
          <View style={styles.formControl}>
            <Text style={styles.label}>le Nom de participant:</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={nameChangeHandler}
              keyboardType="default"
            />
          </View>

          <View style={styles.formControl}>
            <Text style={styles.label}>Son numéro de téléphone:</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={phoneNumberChangeHandler}
              keyboardType="number-pad"
            />
          </View>
        </View>

        {/* Buttons Container */}
        <View style={styles.buttonsContainer}>
          <AwesomeButton
            style={styles.button}
            stretch={true}
            onPress={() => {}}
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

export default ParticipateModal;

const styles = StyleSheet.create({
  modalView: {
    width: wp("100%"),
    height: hp("80%"),
    backgroundColor: "white",
    marginTop: hp("16.75%"),
    borderTopEndRadius: wp("5%"),
    borderTopStartRadius: wp("5%"),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: wp("8"),
    alignItems: "center",
  },
  modalText: {
    fontSize: wp("7%"),
    fontFamily: "Hubballi",
  },

  form: {
    height: "60%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp("18%"),
  },
  formControl: {
    width: "100%",
    height: "25%",
    marginBottom: hp("2%"),
  },
  label: {
    fontSize: wp("6%"),
    fontFamily: "Hubballi",
    marginBottom: 5,
  },
  inputText: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    fontSize: wp("4.3%"),
    fontFamily: "Hubballi",
  },

  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  button: {
    width: wp("41%"),
    height: hp("7.8%"),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Hubballi",
    fontSize: wp("5.5%"),
  },
  cancelButton: {
    width: wp("41%"),
    marginLeft: wp("2%"),
    justifyContent: "center",
    alignItems: "center",
    height: hp("7.8%"),
  },
  cancelButtonText: {
    color: "white",
    fontFamily: "Hubballi",
    fontSize: wp("5.5%"),
  },
});
