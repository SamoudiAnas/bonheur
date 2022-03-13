import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";

// Importing useSelector for selecting the data
import { useSelector, useDispatch } from "react-redux";

//post component
import EventCard from "../components/UI/EventCard2";

//button component
import AwesomeButton from "react-native-really-awesome-button";

// Importing PostActions
import * as binariesActions from "../store/actions/binary";

// responsiveness
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

//constants
import Colors from "../constants/Colors";

import AddBinaryModal from "../components/Modals/AddBinary/AddBinaryModal";

const Formation = ({ route }) => {
  // Modal state
  const [modalVisible, setModalVisible] = useState(false);

  // states...
  const [loading, setLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState(null);

  // setting the binaries
  const binaries = useSelector((state) => state.binaries.binaries);
  // Initializing the dispatch function
  const dispatch = useDispatch();

  // Load posts handler
  const loadBinariesHandler = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      dispatch(binariesActions.fetchBinaries(route?.category));
    } catch (error) {
      setError(error);
    }
    setIsRefreshing(false);
  }, [dispatch]);

  useEffect(() => {
    setLoading(true);
    loadBinariesHandler().then(() => setLoading(false));
  }, [loadBinariesHandler]);

  return (
    <View style={styles.screen}>
      <AwesomeButton
        style={styles.button}
        stretch={true}
        onPress={() => setModalVisible(true)}
        backgroundColor={Colors.defaultGreen}
      >
        <Text style={styles.buttonText}>Ajouter une formation</Text>
      </AwesomeButton>
      <View style={styles.postsContainer}>
        {!loading && binaries.length > 0 ? (
          <FlatList
            numColumns={2}
            data={binaries}
            renderItem={(itemData) => <EventCard event={itemData.item} />}
            keyExtractor={(item) => item.id}
            refreshing={isRefreshing}
            onRefresh={loadBinariesHandler}
          />
        ) : (
          <View style={styles.centerContent}>
            <Text style={styles.contentMessage}>
              No posts found, start adding some!
            </Text>
          </View>
        )}
      </View>
      <AddBinaryModal
        category={route?.category}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: hp("2%"),
  },

  postsContainer: {
    height: hp("80%"),
  },
  button: {
    width: wp("90%"),
    height: hp("7.8%"),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp("2%"),
  },
  buttonText: {
    fontFamily: "Hubballi",
    fontSize: wp("6.5%"),
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

export default Formation;
