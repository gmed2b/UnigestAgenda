import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import {Ionicons} from "@expo/vector-icons"
import colors from "../assets/colors"

interface ActivityItemProps {
  id: number,
  title: string,
  location: string,
  image: any,
  numOfItems: number,
}

export const ActivityItem: React.FC<ActivityItemProps> = (props) => {
  return (
    <View
      style={
        [
          styles.backgroundImage,
          props.id == 1 ? {marginLeft: 0} : {},
          props.id == props.numOfItems ? {marginRight: 0} : {},
        ]
      }
    >
      <View style={styles.container}>
        <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
        <View style={styles.locationWrapper}>
          <Ionicons name="md-location" size={18} color="white" />
          <Text style={styles.location}>{props.location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: 125,
    height: 160,
    marginHorizontal: 8,
    borderRadius: 50,
    backgroundColor: "red",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 10,
    backgroundColor: "#0006",
  },
  title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
  },
  locationWrapper: {
    flexDirection: "row",
  },
  location: {
    color: colors.white,
    marginVertical: 5,
    paddingLeft: 5,
    fontSize: 12,
  },
})