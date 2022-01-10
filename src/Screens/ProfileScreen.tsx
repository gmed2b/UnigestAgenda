import React from "react";
import { Text } from "react-native";
import { TextCenter } from "../Components/TextCenter";

interface ProfileScreenProps {}

export const ProfileScreen: React.FC<ProfileScreenProps> = (props) => {
  return (
    <TextCenter>
      <Text>Profile screen</Text>
    </TextCenter>
  );
};
