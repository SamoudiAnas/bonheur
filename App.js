import React, { useState } from "react";

// Importing the Provider of the store
import { Provider } from "react-redux";
// Importing createStore and combineReducers and middleWare helper functions
import { createStore, combineReducers, applyMiddleware } from "redux";
// Importing the ReduxThunk
import ReduxThunk from "redux-thunk";

// Importing the postReducer
import postsReducer from "./store/reducers/post";
// Importing the eventReducer
import eventReducer from "./store/reducers/event";

//font
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

// react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import WelcomeScreen from "./screens/WelcomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import ChoosedCategory from "./screens/ChoosedCategory";
import Category from "./screens/Category";

//font
const getFonts = () =>
  Font.loadAsync({
    Hubballi: require("./assets/fonts/Hubballi-Regular.ttf"),
  });

// creating the native stack navigator
const Stack = createNativeStackNavigator();

// Initializing the rootReducer
const rootReducer = combineReducers({
  posts: postsReducer,
  events: eventReducer,
});
// Initializing the store with the rootReducer
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

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
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Categories"
            component={CategoryScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="ChoosedCategory"
            component={ChoosedCategory}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Category"
            component={Category}
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
    </Provider>
  );
}
