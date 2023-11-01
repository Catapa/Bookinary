import { Stack, useLocalSearchParams } from 'expo-router';
import { Image, Text, View, ScrollView, RefreshControl } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './book.style';
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
  if (editionError || workError) return <Text>Something went wrong</Text>;
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
        {typeof work.description === 'string'
          ? work.description
          : typeof work.description === 'object'
          ? work.description.value
          : 'No description provided'}
      </Text>
      <View style={styles.subjectContainer}>
        <Text style={styles.subjectHeader}>Subjects:</Text>
        {book.subjects?.map((subject) => (
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
export default BookDetailPage;
