import { Stack, useLocalSearchParams } from 'expo-router';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
} from 'react-native';

import { useEdition, useWorkKey, useWork } from '../../api/hooks';
import { Loader } from '../../components/common/loader';
import { IWork, T_Edition_Key, T_Work_Key } from '../../types';

const BookDetailPage = () => {
  const { edition_key } = useLocalSearchParams();

  const {
    data: edition,
    isLoading: editionLoading,
    error: editionError,
    refetch: refetchEdition,
  } = useEdition(edition_key as T_Edition_Key);
  const book = edition?.[`OLID:${edition_key}`] ?? {};

  const { work_key, isLoading: workKeyLoading } = useWorkKey(
    edition_key as T_Edition_Key,
  );

  const {
    data: work,
    isLoading: workLoading,
    error: workError,
  } = useWork(work_key, !workKeyLoading); // TODO: BUG: fix initial valuefor work_key 'undefined'

  if (editionLoading) return <Loader />;
  if (editionError) return <Text>Something went wrong</Text>;
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={editionLoading}
          onRefresh={() => refetchEdition()}
        />
      }
    >
      <Stack.Screen />
      <View style={styles.bookImageContainer}>
        <Image
          source={{
            uri: book?.cover.medium,
          }}
          style={styles.bookImage}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.bookTitle}>{book.title}</Text>
      <Text style={styles.bookSubtitle}>{book.subtitle}</Text>
      <Text style={styles.bookAuthor}>{book.authors[0].name}</Text>
      <Text style={styles.bookDescription}>
        {work?.description || 'No description'}
      </Text>
      {/* <Text>{work_key + ' --- ' + JSON.stringify(book)}</Text> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#FAFAFC',
    padding: 16,
  },
  bookImage: {
    width: '100%',
    height: 275,
  },
  bookImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookTitle: {
    fontSize: 24,
    textAlign: 'center',
    color: 'rgb(50, 50, 50)',
  },
  bookSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: 'rgb(170, 170, 170)',
  },
  bookAuthor: {
    fontSize: 16,
    textAlign: 'center',
  },
  bookDescription: {
    fontSize: 16,
  },
});

export default BookDetailPage;
