import React from "react";
import { Text } from "react-native";
import { Center } from "../../Components/Center";

interface SettingScreenProps {}

export const SettingScreen: React.FC<SettingScreenProps> = (props) => {
  return (
    <Center>
      <Text>Setting screen</Text>
    </Center>
  );
};
