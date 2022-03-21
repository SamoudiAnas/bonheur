import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";

// Responsiveness
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

// Importing useDispatch
import { useDispatch } from "react-redux";

//uuid
import uuid from "react-native-uuid";

// Image Picker
import * as ImagePicker from "expo-image-picker";

//button component
import AwesomeButton from "react-native-really-awesome-button";

// ignore firebase timer warning
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Setting a timer"]);

//firebase
import { storage } from "../../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

// Colors
import Colors from "../../constants/Colors";

// livreActions
import * as livreActions from "../../store/actions/livre";

const AddLivre = ({ setModalVisible }) => {
  // fields state
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  // Fields handler...
  const urlChangeHandler = (text) => {
    setUrl(text);
  };

  // Image picker handler...
  const imagePickerHandler = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [6, 6],
      quality: 1,
    });

    if (!result.cancelled) {
      uploadFiles(result);
    }
  };

  const uploadFiles = async (image) => {
    try {
      const storageRef = ref(storage, `images/Livres/${uuid.v4()}`);

      //convert image to array of bytes
      const img = await fetch(image.uri);
      const bytes = await img.blob();

      const uploadTask = uploadBytesResumable(storageRef, bytes);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(prog);
        },
        (error) => console.log(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImage(downloadURL);
          });
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  // Initializing the dispatch function
  const dispatch = useDispatch();

  // Add post handler
  const addLivreHandler = () => {
    dispatch(livreActions.addLivre(image, url));
    setModalVisible(false);
  };
  return (
    <View style={styles.screen}>
      {/* The Image */}
      <View style={styles.imageContainer}>
        <Text style={styles.imageTitle}>Choisir une image:</Text>

        <TouchableOpacity activeOpacity={0.8} onPress={imagePickerHandler}>
          <View style={styles.image}>
            {!image ? (
              <Text style={styles.imageText}>
                Aucune image a été séléctionné, taper pour ajouter une
              </Text>
            ) : (
              <View style={styles.styledImage}>
                <Image
                  source={{ uri: image }}
                  style={{ width: 150, height: 150 }}
                />
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>

      {progress > 0 && (
        <Text style={styles.loadingImageText}>
          {progress}% downloading the image
        </Text>
      )}

      {/* The URL of downloading the book */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>URL:</Text>
        <TextInput
          style={styles.titleTextInput}
          onChangeText={urlChangeHandler}
        />
      </View>

      {/* Buttons Container */}
      <View style={styles.buttonsContainer}>
        <AwesomeButton
          style={styles.button}
          stretch={true}
          onPress={addLivreHandler}
          backgroundColor={Colors.defaultGreen}
        >
          <Text style={styles.buttonText}>Add</Text>
        </AwesomeButton>
        <AwesomeButton
          style={styles.cancelButton}
          stretch={true}
          onPress={() => setModalVisible(false)}
          backgroundColor={Colors.danger}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </AwesomeButton>
      </View>
    </View>
  );
};

export default AddLivre;

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "80%",
  },

  imageContainer: {
    width: wp("90%"),
    height: hp("30%"),
    marginBottom: hp("3%"),
  },
  imageTitle: {
    fontFamily: "Hubballi",
    fontSize: wp("6%"),
    marginBottom: hp("1%"),
  },
  image: {
    width: "93.5%",
    height: "85%",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  imageText: {
    fontFamily: "Hubballi",
    fontSize: wp("4%"),
    textAlign: "center",
  },
  styledImage: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  titleContainer: {
    height: hp("10%"),
    width: "100%",
    marginBottom: hp("20%"),
  },
  title: {
    fontFamily: "Hubballi",
    fontSize: wp("6%"),
  },
  titleTextInput: {
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

  loadingImageText: {
    position: "absolute",
    top: hp("28%"),
  },
});
