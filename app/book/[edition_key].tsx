import { Stack, useLocalSearchParams } from 'expo-router';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useEdition, useWorkKey, useWork } from '../../api/hooks';
import { Loader } from '../../components/common/loader';
import { T_Edition_Key } from '../../types';

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

  if (editionLoading || workLoading) return <Loader />;
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
      {book.subtitle && (
        <Text style={styles.bookSubtitle}>{book.subtitle}</Text>
      )}
      <View style={styles.authorContainer}>
        {book.authors.map((author) => (
          <Text key={author.name} style={styles.authorText}>
            {author.name}
          </Text>
        ))}
      </View>
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save to library</Text>
      </TouchableOpacity>
      <Text style={styles.bookDescription}>
        {work.description ?? 'No description provided'}
      </Text>
      <View style={styles.subjectContainer}>
        <Text style={styles.subjectHeader}>Subjects:</Text>
        {book.subjects.map((subject) => (
          <Text key={subject.name} style={styles.subjectTag}>
            {subject.name}
          </Text>
        ))}
      </View>
      <Text style={{ fontSize: 14, fontWeight: '300', marginBottom: 4 }}>
        {book.number_of_pages || '?'} pages
      </Text>
      <Text style={{ fontSize: 14, fontWeight: '300', marginBottom: 4 }}>
        Published: {book.publish_date}{' '}
        {work?.first_publish_date
          ? `(First on ${work.first_publish_date})`
          : ''}
      </Text>
      {/* <Text>{work_key + ' --- ' + JSON.stringify(edition)}</Text> */}
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
    marginBottom: 4,
    fontSize: 24,
    marginTop: 24,
    textAlign: 'center',
    color: 'rgb(50, 50, 50)',
    fontWeight: '600',
  },
  bookSubtitle: {
    marginBottom: 8,
    fontSize: 16,
    textAlign: 'center',
    color: 'rgb(170, 170, 170)',
  },
  authorContainer: {
    marginBottom: 20,
  },
  authorText: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  bookDescription: {
    fontSize: 14,
    color: 'rgb(50, 50, 50)',
    fontWeight: '300',
    marginBottom: 16,
  },
  subjectTag: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgb(50, 50, 50)',
    textDecorationLine: 'underline',
    textDecorationColor: 'rgb(220, 220, 200)',
  },
  subjectHeader: {
    fontSize: 12,
    color: 'rgb(128, 128, 128)',
    fontWeight: '300',
  },
  subjectContainer: {
    marginBottom: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 8,
    rowGap: 2,
    alignItems: 'baseline',
  },
  saveButton: {
    width: '66%',
    marginBottom: 20,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'rgb(97, 130, 100)',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 100,
    backgroundColor: 'rgb(121, 172, 120)',
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: 'rgb(255, 255, 255)',
  },
});

export default BookDetailPage;
