import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeStack } from "./HomeStack";
import { ProfileScreen } from "./Screens/AppTabsScreens/ProfileScreen";
import { SettingScreen } from "./Screens/AppTabsScreens/SettingScreen";

interface AppTabsProps {}

export type AppTabsParamList = {
  Profile: undefined;
  HomeStack: undefined;
  Setting: undefined;
};

const Tabs = createBottomTabNavigator<AppTabsParamList>();

export const AppTabs: React.FC<AppTabsProps> = (props) => {
  return (
    <Tabs.Navigator
      initialRouteName="HomeStack"
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 60,
          justifyContent: "center",
          paddingBottom: 5,
        },
        header: () => null,
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case "Profile":
              return <AntDesign name={"user"} size={size} color={color} />;
            case "HomeStack":
              return <AntDesign name={"home"} size={size} color={color} />;
            case "Setting":
              return <AntDesign name={"setting"} size={size} color={color} />;
            default:
              return;
          }
        },
        tabBarActiveTintColor: "#e91e63",
        tabBarInactiveTintColor: "#000",
      })}
    >
      <Tabs.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: "Mon compte" }} />
      <Tabs.Screen name="HomeStack" component={HomeStack} options={{ tabBarLabel: "Accueil" }} />
      <Tabs.Screen name="Setting" component={SettingScreen} options={{ tabBarLabel: "Paramètres" }} />
    </Tabs.Navigator>
  );
};
