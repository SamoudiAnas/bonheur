import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

//button component
import AwesomeButton from "react-native-really-awesome-button";

// Responsiveness
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

//colors
import Colors from "../../constants/Colors";

const EventCard = ({ event }) => {
  return (
    <View style={styles.screen}>
      <Image style={styles.image} source={{ uri: event.imageUri }} />
      <View style={styles.eventInfo}>
        <View>
          <Text style={styles.eventTitle}>{event.title}</Text>
          <Text style={styles.eventParticipants}>
            {event.participants} participants
          </Text>
        </View>
        <AwesomeButton
          style={styles.button}
          stretch={true}
          onPress={() => {}}
          backgroundColor={Colors.blue}
        >
          <Text style={styles.buttonText}>Participer</Text>
        </AwesomeButton>
      </View>
    </View>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  screen: {
    width: "98%",
    height: hp("28%"),
    borderRadius: wp("2%"),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 1,
    overflow: "hidden",
    marginBottom: wp("4%"),
  },
  image: {
    width: "100%",
    height: hp("15%"),
    borderColor: "orange",
  },
  eventInfo: {
    padding: wp("3%"),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  eventTitle: {
    fontSize: wp("5%"),
  },
  button: {
    width: wp("20%"),
    padding: hp("0.25%"),
    paddingVertical: hp("0.25%"),
  },

  buttonText: {
    color: "#fff",
  },

  eventParticipants: {
    color: "#555",
  },

  eventDate: {
    color: "#555",
  },
});
