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
/**
 * Component: HorizontalList
 *
 * This component displays a horizontal list of items, typically used for showcasing trending content.
 * It provides loading feedback, error handling, and an option to redirect to a full list view.
 *
 * @param {IProps} props - An object containing the properties for rendering the horizontal list.
 * @param {Array<Object>} props.data - An array of data items to display in the horizontal list.
 * @param {boolean} props.isLoading - A flag indicating whether the data is currently loading.
 * @param {Error | null} props.error - An optional error object, if an error occurred during data fetching.
 * @param {string} props.heading - The heading text to display at the top of the list.
 * @param {string} props.redirect - An optional route to redirect to when "Show all" is clicked.
 *
 * Usage:
 * ```javascript
 * <HorizontalList
 *   data={itemsArray}
 *   isLoading={loadingState}
 *   error={errorObject}
 *   heading="Trending"
 *   redirect="/full-trending-list"
 * />
 * ```
 *
 * @component
 */
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
