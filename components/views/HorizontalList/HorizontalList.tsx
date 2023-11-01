import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';

import styles from './HorizontalList.style';
import { IResponse } from '../../../types';
import { BookCard, Loader } from '../../common';

interface IProps extends Partial<IResponse> {
  heading: string;
  redirect?: string;
}
export const HorizontalList = ({
  data,
  isLoading,
  error,
  heading,
  redirect,
}: IProps) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headingText}>
          {heading + ' '}
          {heading.toLowerCase() === 'trending' && (
            <Feather
              name="trending-up"
              size={24}
              color="black"
              style={{ padding: 16 }}
            />
          )}
        </Text>
        <TouchableOpacity
          style={styles.showAllContainer}
          onPress={() => {
            redirect && router.push(redirect);
          }}
        >
          <Text style={styles.showAllText}>Show all</Text>
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <BookCard item={item} round />}
          contentContainerStyle={{ columnGap: 8 }}
          //keyExtractor={(item) => item.key}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      )}
    </View>
  );
};
