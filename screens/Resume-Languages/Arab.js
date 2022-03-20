import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState, useEffect, useCallback } from "react";

// useSelector
import { useSelector, useDispatch } from "react-redux";

//button component
import AwesomeButton from "react-native-really-awesome-button";

// Colors
import Colors from "../../constants/Colors";

// responsiveness
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

// Book Modal
import BookModal from "../../components/Modals/Book/BookModal";
import BookCard from "../../components/UI/BookCard";

import * as bookActions from "../../store/actions/book";

const Arab = () => {
  // modal state
  const [modalVisible, setModalVisible] = useState(false);

  // states...
  const [loading, setLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState(null);

  // getting the books
  const books = useSelector((state) => state.books.books);

  // Initializing the dispatch function
  const dispatch = useDispatch();

  const loadedBooks = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      dispatch(bookActions.fetchBooks("Arab"));
    } catch (error) {
      setError(error);
    }

    setIsRefreshing(false);
  }, [dispatch]);

  useEffect(() => {
    setLoading(true);
    loadedBooks().then(() => setLoading(false));
  }, [loadedBooks]);

  return (
    <View style={styles.screen}>
      <AwesomeButton
        style={styles.button}
        stretch={true}
        onPress={() => setModalVisible(true)}
        backgroundColor={Colors.defaultGreen}
      >
        <Text style={styles.buttonText}>اضف تلخيص كتاب</Text>
      </AwesomeButton>

      {!loading && books.length > 0 ? (
        <FlatList
          data={books}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => <BookCard item={itemData.item} />}
        />
      ) : (
        <View style={styles.centerContent}>
          <Text style={styles.contentMessage}>
            No books reviews were found, start adding some!
          </Text>
        </View>
      )}

      {/* Book Modal */}
      <BookModal
        category="Arab"
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

export default Arab;

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
