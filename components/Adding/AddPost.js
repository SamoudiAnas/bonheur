import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

// Importing useDispatch
import { useDispatch } from "react-redux";

// Importing the postActions
import * as postActions from "../../store/actions/post";

// Responsiveness
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

// Image Picker
import * as ImagePicker from "expo-image-picker";

//button component
import AwesomeButton from "react-native-really-awesome-button";

// Colors
import Colors from "../../constants/Colors";

const AddPost = ({ setModalVisible }) => {
  // fields state
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Fields handler...
  const titleChangeHandler = (text) => {
    setTitle(text);
  };
  const descriptionChangeHandler = (text) => {
    setDescription(text);
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
      setImage(result.uri);
    }
  };

  // Initializing the dispatch function
  const dispatch = useDispatch();

  // Add post handler
  const addPostHandler = () => {
    dispatch(postActions.addPost(title, description, image));
    setModalVisible(false);
  };

  return (
    <View style={styles.screen}>
      {/* The Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Titre:</Text>
        <TextInput
          style={styles.titleTextInput}
          onChangeText={titleChangeHandler}
        />
      </View>

      {/* The Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>Description:</Text>
        <TextInput
          style={styles.descriptionTextInput}
          multiline
          numberOfLines={5}
          onChangeText={descriptionChangeHandler}
        />
      </View>

      {/* The Image */}
      <View style={styles.imageContainer}>
        <Text style={styles.imageTitle}>Choisir une image:</Text>

        <TouchableOpacity activeOpacity={0.8} onPress={imagePickerHandler}>
          <View style={styles.image}>
            {!image ? (
              <Text style={styles.imageText}>
                Aucune image n'a été séléctionné, taper pour ajouter une
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

      {/* Buttons Container */}
      <View style={styles.buttonsContainer}>
        <AwesomeButton
          style={styles.button}
          stretch={true}
          onPress={addPostHandler}
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
  );
};

export default AddPost;

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "80%",
  },

  titleContainer: {
    height: hp("10%"),
    width: "100%",
    marginBottom: hp("2%"),
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

  descriptionContainer: {
    height: hp("10%"),
    width: "100%",
    marginBottom: hp("7%"),
  },
  description: {
    fontFamily: "Hubballi",
    fontSize: wp("6%"),
  },
  descriptionTextInput: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    fontSize: wp("4.3%"),
    fontFamily: "Hubballi",
    textAlignVertical: "top",
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
  },
  styledImage: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
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
