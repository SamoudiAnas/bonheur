import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

// useSelector import
import { useSelector, useDispatch } from "react-redux";

//button component
import AwesomeButton from "react-native-really-awesome-button";

// responsiveness
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

// The event modal
import AddEventModal from "../components/Modals/AddEventModal/AddEventModal";
// The EventCard Component
import EventCard2 from "../components/UI/EventCard2";

// Event actions
import * as eventActions from "../store/actions/event";

//constants
import Colors from "../constants/Colors";

const Events = (props) => {
  // Modal state
  const [modalVisible, setModalVisible] = useState(false);
  // states...
  const [loading, setLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState(null);

  // Initializing the dispatch function
  const dispatch = useDispatch();

  // Selecting events
  const events = useSelector((state) => state.events.events);

  // Load posts handler
  const loadEventsHandler = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      dispatch(eventActions.fetchEvents(props.route.category));
    } catch (error) {
      setError(error);
    }
    setIsRefreshing(false);
  }, [dispatch]);

  useEffect(() => {
    setLoading(true);
    loadEventsHandler().then(() => setLoading(false));
  }, [loadEventsHandler]);

  return (
    <View style={styles.screen}>
      <AwesomeButton
        style={styles.button}
        stretch={true}
        onPress={() => setModalVisible(true)}
        backgroundColor={Colors.defaultGreen}
      >
        <Text style={styles.buttonText}>Ajouter un événement</Text>
      </AwesomeButton>

      <View style={styles.postsContainer}>
        {/* Event Item */}
        {!loading && events.length > 0 ? (
          <FlatList
            data={events}
            refreshing={isRefreshing}
            onRefresh={loadEventsHandler}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => <EventCard2 event={itemData.item} />}
          />
        ) : (
          <View style={styles.centerContent}>
            <Text style={styles.contentMessage}>
              No events found, start adding some!
            </Text>
          </View>
        )}
      </View>
      <AddEventModal
        category={props.route.category}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: hp("100%"),
    width: wp("100%"),
    padding: hp("2%"),
  },

  postsContainer: {
    height: hp("70%"),
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

export default Events;
