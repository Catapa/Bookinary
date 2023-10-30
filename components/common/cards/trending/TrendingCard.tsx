import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { ITrendingItem } from "../../../../types";

interface IProps {
  item: ITrendingItem;
}
const TrendingCard = ({ item }: IProps) => {
  const router = useRouter();
  const getCoverUrl = (
    cover_key: string,
    cover_key_value: string,
    size: "S" | "M" | "L",
  ) => {
    return `https://covers.openlibrary.org/b/${cover_key}/${cover_key_value}-${size}.jpg`;
  };
  const navigateToDetails = (edition_key: string, work_key: string) => {
    router.push(`/book/${edition_key}`);
  };
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigateToDetails(item.cover_edition_key, item.key)}
    >
      <View style={styles.coverContainer}>
        <Image
          source={{
            uri: getCoverUrl("olid", item.cover_edition_key, "M"),
          }}
          resizeMode="contain"
          style={styles.coverImage}
        />
      </View>
      <Text numberOfLines={1} style={styles.title}>
        {item.title}
      </Text>
      <Text style={styles.author}>{item.author_name?.join(" ")}</Text>
    </TouchableOpacity>
  );
};
export default TrendingCard;

const styles = StyleSheet.create({
  card: {
    flex: 1 / 2,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
  },
  title: {
    fontSize: 16,
  },
  author: {
    fontSize: 12,
  },
  coverContainer: {
    marginHorizontal: 12,
    //borderWidth: 1,
    borderColor: "#888",
    alignItems: "center",
    height: 170,
  },
  coverImage: {
    width: "70%",
    height: "100%",
  },
});
