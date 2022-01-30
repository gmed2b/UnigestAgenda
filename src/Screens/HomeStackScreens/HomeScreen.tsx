import React, { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeStackParamList } from "../../HomeStack";
import { TextInput } from "react-native-gesture-handler";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../assets/colors";

interface HomeScreenProps {}

export type HomeNavigationProps<T extends keyof HomeStackParamList> = {
  navigation: NativeStackNavigationProp<HomeStackParamList, T>;
};

export const HomeScreen = ({ navigation }: HomeNavigationProps<"Home">) => {
  const [searchInputText, onSearchInputTextChange] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.brandWrapper}>
        <Text style={styles.brandTitle}>Unigest</Text>
      </View>

      {/* HEADER */}
      <View style={styles.headerWrapper}>
        <Text style={styles.headerTitle}>Explorer les{"\n"}activités</Text>
        <View style={styles.searchWrapper}>
          <MaterialCommunityIcons style={styles.searchIcon} name="map-search-outline" size={24} color={colors.grey} />
          <TextInput style={styles.searchInput} onChangeText={onSearchInputTextChange} placeholder="Rechercher ..." />
          <TouchableOpacity style={styles.filterButton}>
            <AntDesign name="filter" size={24} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>

      {/* CONTENT */}
      <ScrollView style={styles.contentWrapper}>
        <View style={styles.favoriteWrapper}>
          <Text style={styles.favoriteTitle}>Favoris</Text>
          <ScrollView style={styles.favoriteItemsWrapper}>
            <Text>adazd</Text>
            <Text>adazdghy</Text>
            <Text>adazdza</Text>
            <Text>adazd&zad</Text>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  brandWrapper: {
    backgroundColor: "#ccc",
    paddingHorizontal: 25,
    paddingBottom: 20,
  },
  brandTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
  headerWrapper: {
    paddingHorizontal: 25,
    paddingTop: 10,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "700",
    paddingBottom: 20,
  },
  searchWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchIcon: {
    position: "absolute",
    top: "50%",
    left: 10,
    transform: [{ translateY: -12 }],
  },
  searchInput: {
    flex: 1,
    marginRight: 20,
    paddingLeft: 40,
    paddingVertical: 8,
    borderColor: colors.grey,
    borderWidth: 2,
    borderRadius: 8,
  },
  filterButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },

  contentWrapper: {
    backgroundColor: colors.grey,
    paddingHorizontal: 25,
  },
  favoriteWrapper: {},
  favoriteTitle: {},
  favoriteItemsWrapper: {},
});
