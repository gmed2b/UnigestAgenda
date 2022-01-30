import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppTabs } from "./AppTabs";

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = (props) => {
  return (
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  );
};
