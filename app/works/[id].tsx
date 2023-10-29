import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Image, StyleSheet, Text, View, ScrollView } from "react-native"
import { getWork } from "../../api/common";

const BookDetailPage = () => {
	const {id} = useLocalSearchParams();
	const {data, isLoading, error} = getWork(id as string);
	const book = data[`OLID:${id}`];
	return (
		isLoading ? <ActivityIndicator/>
		: error ? <Text>Something went wrong</Text>
		: (<View>
			<Image 
				source={{
					uri: book?.cover.medium
				}}
				style={styles.bookImage}
				resizeMode={'contain'}
			/>
			<Text>{book?.title}</Text>
			<Text>{book?.subtitle}</Text>
			<Text>{book?.authors[0].name}</Text>
		</View>
		)
		
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%'
	},
	bookImage : {
		width: '50%',
		height: '50%'
	}
})

export default BookDetailPage;