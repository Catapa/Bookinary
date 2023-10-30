import { Stack, useLocalSearchParams } from "expo-router";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";

import { getEdition, getWorkKey, getWork } from "../../api/common";
import { Loader } from "../../components/common/loader";
import { IWork, T_Edition_Key, T_Work_Key } from "../../types";

const BookDetailPage = () => {
  const { edition_key } = useLocalSearchParams();

  const {
    data: edition,
    isLoading: editionLoading,
    error: editionError,
  } = getEdition(edition_key as T_Edition_Key);
  const book = edition[`OLID:${edition_key}`];

  //const {work_key, isLoading: workKeyLoading} = getWorkKey(edition_key as T_Edition_Key);
  //console.log(work_key);

  //const{data: work, isLoading: workLoading, error: workError} = getWork(work_key); // TODO: BUG: fix initial valuefor work_key 'undefined'

  if (editionLoading) return <Loader />;
  if (editionError) return <Text>Something went wrong</Text>;
  return (
    <View>
      <Stack.Screen />
      <Image
        source={{
          uri: book?.cover.medium,
        }}
        style={styles.bookImage}
        resizeMode="contain"
      />
      <Text>{book.title}</Text>
      <Text>{book.subtitle}</Text>
      <Text>{book.authors[0].name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  bookImage: {
    width: "50%",
    height: "50%",
  },
});

export default BookDetailPage;
