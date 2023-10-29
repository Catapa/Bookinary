import { ActivityIndicator, FlatList, View, Text, StyleSheet } from "react-native";
import { getTrendingBooks } from "../api/common";
import { TrendingCard } from "./common";

export const Trending = () => {
	const {data, isLoading, error, refetch} = getTrendingBooks('daily');

	return (
		<View style={styles.trendingList}>
			{
			isLoading ? <ActivityIndicator size={'large'}/>
			: error ? <Text>Something went wrong {error.message}</Text>
			: (
				<FlatList
				data={data.works}
				numColumns={2}
				renderItem={({item}) => (
					<TrendingCard item={item}/>
				)}
				keyExtractor={(item) => item.key}
				refreshing={isLoading}
				onRefresh={() => refetch()}
				/>
				)
		}
		</View>
	  );
};

const styles = StyleSheet.create({
  trendingList: {
    flex: 1,
	width: '100%',
    justifyContent: 'space-between',
  },
});