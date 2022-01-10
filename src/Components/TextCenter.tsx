import React from "react";
import { View } from "react-native";

interface TextCenterProps {}

export const TextCenter: React.FC<TextCenterProps> = ({ children }) => {
  return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>{children}</View>;
};
