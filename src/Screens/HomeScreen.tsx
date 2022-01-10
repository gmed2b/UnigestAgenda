import React from "react";
import { Text } from "react-native";
import { TextCenter } from "../Components/TextCenter";

interface HomeScreenProps {}

export const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  return (
    <TextCenter>
      <Text>Home</Text>
    </TextCenter>
  );
};
