import React, { useState } from "react";

//font
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

// react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "./screens/FirstScreen";
import SecondScreen from "./screens/SecondScreen";
import ThirdScreen from "./screens/ThirdScreen";
import FourthScreen from "./screens/FourthScreen";

const getFonts = () =>
  Font.loadAsync({
    Hubballi: require("./assets/fonts/Hubballi-Regular.ttf"),
  });

// creating the native stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => {
          setFontsLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Sorry for the naming convention, because i do not know how to call them with the shitty french */}
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ThirdScreen"
          component={ThirdScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="FourthScreen"
          component={FourthScreen}
          options={({ route }) => ({
            title: route.params.screenName,
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Hubballi",
              fontSize: 25,
              fontWeight: "bold",
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
