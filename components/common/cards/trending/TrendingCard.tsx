import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ITrendingItem } from "../../../../types";
import { getCover } from "../../../../api/common/getCover";

interface IProps {
	item: ITrendingItem
};
export const TrendingCard = ({item}: IProps) => {
	//const {data: cover, isLoading, error} = getCover('olid', item.cover_edition_key, 'S');
	//console.log(cover.url);
	const [cover_key, cover_key_value, size] = ['olid', item.cover_edition_key, 'M'];
	console.log(`https://covers.openlibrary.org/b/${cover_key}/${cover_key_value}-${size}.jpg`);
	return (
		<TouchableOpacity style={styles.card}>
			<View style={styles.coverContainer}>
				<Image 
				source={{
						uri: `https://covers.openlibrary.org/b/${cover_key}/${cover_key_value}-${size}.jpg`
					}}
				resizeMode={'contain'}
				style={styles.coverImage}
				/>
					
			</View>
			<Text numberOfLines={1} style={styles.title}>{item.title}</Text>
			<Text style={styles.author}>{item.author_name?.join(' ')}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: {
		flex: 1/2,
		borderWidth: 1,
		borderColor: '#ddd',
		padding: 12
	},
	title: {
		fontSize: 16
	},
	author: {
		fontSize: 12
	},
	coverContainer: {
		marginHorizontal: 12,
		//borderWidth: 1,
		borderColor: '#888',
		alignItems: 'center',
		height: 170
	},
	coverImage: {
		width: '70%',
		height: '100%'
	}
});
