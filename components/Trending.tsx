import { Suspense } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

import { TrendingCard } from "./common";
import { Loader } from "./common/loader";
import { getTrendingBooks } from "../api/common";

export const Trending = () => {
  const { data, isLoading, error, refetch } = getTrendingBooks("daily");

  //if (isLoading) return(<Loader />);
  if (error) return <Text>Something went wrong</Text>;
  return (
    <View style={styles.trendingList}>
      <Suspense fallback={<Text>Amu no</Text>}>
        <FlatList
          data={data.works}
          numColumns={2}
          renderItem={({ item }) => <TrendingCard item={item} />}
          keyExtractor={(item) => item.key}
          refreshing={isLoading}
          onRefresh={() => refetch()}
        />
      </Suspense>
    </View>
  );
};

const styles = StyleSheet.create({
  trendingList: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
  },
});
