import React, { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeStackParamList } from "../../HomeStack";
import { TextInput } from "react-native-gesture-handler";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../assets/colors";
import favoriteData from "../../assets/data/FavoriteData"
import {ActivityItem} from "../../Components/ActivityItem"
import {dataInterface} from "../../assets/interfaces/interfaces"

interface HomeScreenProps {}

export type HomeNavigationProps<T extends keyof HomeStackParamList> = {
  navigation: NativeStackNavigationProp<HomeStackParamList, T>;
};

export const HomeScreen = ({ navigation }: HomeNavigationProps<"Home">) => {
  const [searchInputText, onSearchInputTextChange] = useState("");
  const FavoriteDATA: dataInterface[] = favoriteData;

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
          <FlatList
            style={styles.favoriteItemsWrapper}
            data={FavoriteDATA}
            renderItem={({item, index}) => (
              <ActivityItem key={item.id} id={item.id} title={item.title} location={item.location} image={item.image} numOfItems={FavoriteDATA.length} />
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  brandWrapper: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#8884',
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
    alignItems: "center",
    justifyContent: "center",
  },

  contentWrapper: {
    paddingHorizontal: 25,
  },
  favoriteWrapper: {

  },
  favoriteTitle: {
    color: colors.black,
    marginVertical: 15,
    fontSize: 22,
    fontWeight: "700"
  },
  favoriteItemsWrapper: {
  },
});
