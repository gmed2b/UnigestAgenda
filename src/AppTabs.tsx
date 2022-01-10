import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { HomeScreen } from "./Screens/HomeScreen";
import { Feather } from "@expo/vector-icons";
import { ProfileScreen } from "./Screens/ProfileScreen";

interface AppTabsProps {}

export type AppTabsParamList = {
  Home: undefined;
  Profile: undefined;
};

const Tabs = createBottomTabNavigator<AppTabsParamList>();

export const AppTabs: React.FC<AppTabsProps> = (props) => {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case "Home":
              return <Feather name={"home"} size={size} color={color} />;
            case "Profile":
              return <Feather name={"user"} size={size} color={color} />;
            default:
              return <Feather name={"info"} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: "#e91e63",
        tabBarInactiveTintColor: "#000",
      })}
    >
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};
