import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState, useCallback, useEffect } from "react";

// useSelector
import { useSelector, useDispatch } from "react-redux";

//button component
import AwesomeButton from "react-native-really-awesome-button";

// Colors
import Colors from "../constants/Colors";

// responsiveness
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

// LivreModal
import LivreModal from "../components/Modals/Book/LivreModal";
import LivreCard from "../components/UI/LivreCard";

// livreActions
import * as livreActions from "../store/actions/livre";

const BookScreen = () => {
  // modal state
  const [modalVisible, setModalVisible] = useState(false);

  // states...
  const [loading, setLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState(null);

  // getting the books
  const livres = useSelector((state) => state.livres.livres);

  // Initializing the dispatch function
  const dispatch = useDispatch();

  const loadedLivres = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      dispatch(livreActions.fetchLivre());
    } catch (error) {
      setError(error);
    }

    setIsRefreshing(false);
  }, [dispatch]);

  useEffect(() => {
    setLoading(true);
    loadedLivres().then(() => setLoading(false));
  }, [loadedLivres]);

  return (
    <View style={styles.screen}>
      <AwesomeButton
        style={styles.button}
        stretch={true}
        onPress={() => setModalVisible(true)}
        backgroundColor={Colors.defaultGreen}
      >
        <Text style={styles.buttonText}>Ajouter un livre</Text>
      </AwesomeButton>

      {!loading && livres.length > 0 ? (
        <FlatList
          data={livres}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => <LivreCard item={itemData.item} />}
          refreshing={isRefreshing}
          onRefresh={loadedLivres}
        />
      ) : (
        <View style={styles.centerContent}>
          <Text style={styles.contentMessage}>Il n'y a pas des livres</Text>
        </View>
      )}

      {/* Book Modal */}
      <LivreModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

export default BookScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },

  button: {
    width: wp("90%"),
    height: hp("7.8%"),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp("2%"),
    marginTop: hp("1%"),
  },
  buttonText: {
    fontFamily: "Hubballi",
    fontSize: wp("6%"),
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
