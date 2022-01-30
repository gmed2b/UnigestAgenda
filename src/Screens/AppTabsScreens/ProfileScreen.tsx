import React from "react";
import { Text } from "react-native";
import { Center } from "../../Components/Center";

interface ProfileScreenProps {}

export const ProfileScreen: React.FC<ProfileScreenProps> = (props) => {
  return (
    <Center>
      <Text>Profile screen</Text>
    </Center>
  );
};
