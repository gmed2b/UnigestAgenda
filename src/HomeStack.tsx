import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import { HomeScreen } from "./Screens/HomeStackScreens/HomeScreen";

export type HomeStackParamList = {
  Home: undefined;
};

interface HomeStackProps {}

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeStack: React.FC<HomeStackProps> = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      // screenOptions={{
      //   headerShown: false,
      // }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
